import { FC, useState } from "react";
import { useParams } from "react-router-dom"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { useCreateWordMutation } from "./../../../graphql";
import List from "..";

export const AddWord: FC = () => {
    const { id } = useParams()
    const [isCreateState, setCreateState] = useState(false)
    const { refetch } = List.useState()

    const [createWord] = useCreateWordMutation()

    const addWord: FormikConfig<WordInput>['onSubmit'] = async (data, onSubmitProps) => {
        try {
            const result = await createWord({ variables: { data: { ...data, list: id } } })
            refetch && await refetch()
            setCreateState(false)
        } catch (err: any) {
            const error = err as ResolverError
            onSubmitProps.setFieldError('word', error?.message ?? '')
        } 
    }

    return <Grid>
        {isCreateState
            ? <Formik initialValues={{ word: '', translation: '' }} onSubmit={addWord}>
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'column'} rowSpacing={1}>
                            <Grid item>
                                <TextField autoComplete="off" fullWidth onChange={handleChange} name="word" label="Word" size="small" variant="standard" />
                            </Grid>
                            <Grid item>
                                <TextField autoComplete="off" fullWidth onChange={handleChange} name="translation" label="Translation" size="small" variant="standard" />
                            </Grid>
                            <Grid item container direction="column" justifyContent="center">
                                <Button type="submit" variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                                    Done
                                </Button>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center">
                                <Button variant="outlined" onClick={() => setCreateState(false)}>
                                    Cancel
                                </Button>
                            </Grid>
                            <ErrorMessage component="div" name="word">{msg => (
                                <Grid item xs={12}>
                                    <Alert severity="error">{msg}</Alert>
                                </Grid>
                            )}</ErrorMessage>
                        </Grid>
                    </Form>
                )}
            </Formik>
            : <Grid item>
                <Button fullWidth onClick={() => setCreateState(true)} variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                    Add
                </Button>
            </Grid>
        }
    </Grid>
}