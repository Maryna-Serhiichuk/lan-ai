import { FC, Fragment, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import List from "..";
import IconButton from '@mui/material/IconButton';
import { Formik, Form, Field, FieldProps  } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from "@mui/material";
import { IUseList } from './../context/useList'
import styled from "@emotion/styled";
import { ThemeOptions } from "@mui/material/styles/createTheme";

const EditButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'listShadow',
})<{ theme?: ThemeOptions }>`
    position: absolute;
    top: -20px;
    right: -20px;
    width: 50px;
    height: 50px;
    box-shadow: ${({ theme }) => theme?.listShadow?.boxShadow };
    border-radius: ${({ theme }) => theme?.listShadow?.borderRadius };
    &: hover {
        background: ${({ theme }) => theme?.mainColor };
    }
`

export const ListName: FC = () => {
    const theme = useTheme();

    const [isUpdateState, setUpdateState] = useState(false)
    const { data, updateData } = List.useContext()

    const onSubmit: IUseList['updateData'] = async (input, handler) => {
        await updateData(input, handler)
        setUpdateState(false)
    }

    return <Typography variant="h3" gutterBottom align="center" style={{ ...theme.listShadow, position: 'relative', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        {isUpdateState
            ? <Formik initialValues={{ name: data?.attributes?.name ?? '' } as ListInput} onSubmit={onSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'} columnSpacing={4} wrap={"nowrap"}>
                            <Grid item>
                                <Field
                                    name={`name`}
                                    render={({ field }: FieldProps) => (
                                        <Input fullWidth {...field} placeholder="Name" size="small" style={{ fontSize: '3rem' }}/>
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                <EditButton type="submit" size="large">
                                    <CheckIcon fontSize="inherit" />
                                </EditButton>
                            </Grid>
                        </Grid>
                        
                    </Form>
                )}
            </Formik>
            : data?.attributes?.name
        }

        {!isUpdateState &&
            <Fragment>
                <Typography component="span" variant="overline" style={{ fontSize: 24, marginLeft: 10 }}>
                    {data?.attributes?.words?.data?.length}/10
                </Typography>
                <EditButton size="small" onClick={() => setUpdateState(true)}>
                    <EditIcon fontSize="inherit" />
                </EditButton>
            </Fragment>
        }
    </Typography>
}