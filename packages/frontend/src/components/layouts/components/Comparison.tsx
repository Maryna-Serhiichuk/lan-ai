import Grid from '@mui/material/Grid';
import { FC, Fragment, useReducer, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled, ThemeOptions } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Formik, Form, FormikConfig } from 'formik';
import TextField from '@mui/material/TextField';
import { Markdown } from 'components/markdown';
import { useCompareMutation } from './../../../graphql';

const ButtonStyled = styled('button', {
    shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen?: boolean }>`
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 20px;
    padding: 0;
    background: rgba(0,0,0,.3);
    transform: translate(-100%, -50%);
    border: none;
    border-radius: 4px 0 0 4px;
    box-shadow: 0 0 50px rgba(0, 0, 0, .5);
    transition: 100ms;
    svg {
        height: 20px;
        width: 10px;
        transform: ${({ isOpen }) => (isOpen ? "rotateY(0deg)" : "rotateY(180deg)")};
        transition: 500ms;
    }
    &:hover {
        background: rgba(255,255,255,.2); 
    }
`

const DrawerStyled = styled('div', {
    shouldForwardProp: (prop) => prop !== 'width'
})<{ width?: number, theme?: ThemeOptions }>`
    position: fixed;
    z-index: 10;
    top: 50%;
    right: 0;
    width: ${({ width }) => width}px;
    height: 100px;
    background: ${({ theme }) => theme?.bodyColor };
    box-shadow: 0 0 50px rgba(0, 0, 0, .5);
    border-radius: 6px 0 0 6px;
    transform: translateY(-50%);
    transition: 500ms;
`

const drawerWidth = 200

type State = number
  
type Action = "open" | "close";

const widthReducer = (_state: State, action: Action) => {
    switch (action) {
        case "open":
          return drawerWidth;
        case "close":
          return 0;
        default:
          throw new Error("Unknown action type");
    }
}

export const Comparison: FC = () => {
    const [width, changeState] = useReducer(widthReducer, 0)
    const [compare, { loading }] = useCompareMutation()
    const [explanation, setExplanation] = useState(undefined)

    const onCompare: FormikConfig<CompareInput>['onSubmit'] = async (input, onSubmitProps) => {
        try {
            const data = await compare({ variables: { input } })
            console.log(data)
            setExplanation(data?.data?.compare?.text)
            // await refetch()
            // navigate('/lists')
        } catch (err: any) {
            const error = err as ResolverError
        }
    }

    const onCloseDialog = () => {
        setExplanation(undefined)
    }

    return <Fragment>
        <DrawerStyled width={width}>
            <ButtonStyled isOpen={width ? false : true} onClick={() => changeState(width ? 'close' : 'open')}>
                <ArrowBackIosNewIcon color={'action'} />
            </ButtonStyled>
            <Grid style={{ width: drawerWidth, padding: '0 20px', }}>
                <Formik initialValues={{ words: '' }} onSubmit={onCompare}>
                    {({ values, handleSubmit, handleChange }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid container direction={'column'} rowSpacing={2}>
                                <Grid item>
                                    <TextField autoComplete="off" fullWidth onChange={handleChange} name="words" label="Words" size="small" variant="standard" />
                                </Grid>
                                <Grid item>
                                    <Button disabled={loading} size='small' fullWidth type="submit" variant="contained">
                                        Compare
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </DrawerStyled>
        <Dialog open={explanation}>
            <List sx={{ padding: 3, width: 600, display: 'block' }}>
                <ListItem disableGutters>
                    <Grid item>
                        <Markdown text={explanation} />
                    </Grid>
                </ListItem>
                <ListItem disableGutters>
                    <Button fullWidth onClick={onCloseDialog} variant="outlined">
                        Close
                    </Button>
                </ListItem>
            </List>
        </Dialog>
    </Fragment>
}