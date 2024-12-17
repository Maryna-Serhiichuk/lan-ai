import { FC } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Formik, Form, Field, FormikConfig, FieldArray, FieldProps } from 'formik';
import { useCreateWordsListMutation, useListsLazyQuery } from "./../../graphql";
import { useNavigate } from "react-router-dom";

const CreateList: FC = () => {
    const navigate = useNavigate()
    const [createWordsList] = useCreateWordsListMutation()
    const [_, { refetch }] = useListsLazyQuery()

    const addList: FormikConfig<WordsListInput>['onSubmit'] = async (input, onSubmitProps) => {
        console.log(1)
        try {
            const data = await createWordsList({ variables: { input } })
            await refetch()
            navigate('/lists')
        } catch (err: any) {
            const error = err as ResolverError
        }

    }

    return <Grid container direction="column" alignItems="center" style={{ minWidth: '100%', paddingTop: 200 }}>
        <Grid style={{ maxWidth: 500 }}>
            <Formik initialValues={{ name: '', words: [{ word: '', translation: '' }, { word: '', translation: '' }] }} onSubmit={addList}>
                {({ values, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'column'} rowSpacing={5}>
                            <Grid item>
                                <TextField fullWidth onChange={handleChange} name="name" label="Name" size="small" variant="standard" />
                            </Grid>
                            <Grid item>
                                <FieldArray name="words">
                                    {({ insert, remove, push }) => (
                                        <Grid container direction={'column'} rowSpacing={0}>
                                            {values?.words?.length && values?.words?.length > 0 && values?.words?.map((word, index) => (
                                                <Grid key={index} item container direction={'row'} columnSpacing={3}>
                                                    <Grid item>
                                                        <Field
                                                            name={`words.${index}.word`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} placeholder="Word" size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Field
                                                            name={`words.${index}.translation`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} placeholder="Translation" size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton onClick={() => remove(index)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                            <Grid item>
                                                <Button onClick={() => push({ word: '', translation: '' })} variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                                                    Add
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </FieldArray>
                            </Grid>
                            <Grid item>
                                <Button fullWidth type="submit" variant="contained" startIcon={<DoneIcon />}>
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    </Grid>
}

export default CreateList;