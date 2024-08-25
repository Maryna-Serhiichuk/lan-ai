import { FC, Fragment, useState } from "react";
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import List from "..";
import IconButton from '@mui/material/IconButton';
import { Formik, Form, Field, FieldProps  } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from "@mui/material";
import { IUseList } from './../context/useList'

export const ListName: FC = () => {
    const [isUpdateState, setUpdateState] = useState(false)
    const { data, updateData } = List.useContext()

    const onSubmit: IUseList['updateData'] = async (input, handler) => {
        await updateData(input, handler)
        setUpdateState(false)
    }

    return <Typography variant="h3" gutterBottom align="center">
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
                                <IconButton type="submit" size="large">
                                    <CheckIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        
                    </Form>
                )}
            </Formik>
            : data?.attributes?.name
        }

        {!isUpdateState &&
            <Fragment>
                <Typography component="span" variant="overline" style={{ fontSize: 24, marginLeft: 10 }}>{data?.attributes?.words?.data?.length}/10</Typography>
                <IconButton size="small" onClick={() => setUpdateState(true)}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
            </Fragment>
        }
    </Typography>
}