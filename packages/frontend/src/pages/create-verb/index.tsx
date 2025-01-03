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
import { useCreateInfinitiveListMutation, useVerbsListsLazyQuery } from "./../../graphql";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateVerb: FC = () => {
    const navigate = useNavigate()
    const [_, { refetch }] = useVerbsListsLazyQuery()
    const [createList] = useCreateInfinitiveListMutation()

    const addList: FormikConfig<InfinitiveListInput>['onSubmit'] = async (input, onSubmitProps) => {
        try {
            const data = await createList({ variables: { input } })
            await refetch();
            navigate('/verbs')
        } catch (err: any) {
            const error = err as ResolverError
            console.log(error)
        }
    }

    return <Grid container direction="column" alignItems="center" style={{ minWidth: '100%', paddingTop: 100 }}>
        <Grid style={{ maxWidth: 700 }}>
            <Formik initialValues={{ name: '', verbs: [{ word: '', first: '', second: '', third: '' }] }} onSubmit={addList}>
                {({ values, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'column'} rowSpacing={3}>
                            <Grid item>
                                <TextField fullWidth onChange={handleChange} name="name" label="Name" size="small" variant="standard" />
                            </Grid>
                            <Grid item container direction={'row'} columnSpacing={3}>
                                {['Word','Infinitive','Past','Past Participle']?.map(it => (
                                    <Grid key={it} item style={{ width: '23%' }}>
                                        <Typography variant="h6" gutterBottom align="center">
                                            {it}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item>
                                <FieldArray name="verbs">
                                    {({ insert, remove, push }) => (
                                        <Grid container direction={'column'} rowSpacing={0}>
                                            {values?.verbs?.length && values?.verbs?.length > 0 && values?.verbs?.map((word, index) => (
                                                <Grid key={index} item container direction={'row'} columnSpacing={3}>
                                                    <Grid item style={{ width: '23%' }}>
                                                        <Field
                                                            name={`verbs.${index}.word`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item style={{ width: '23%' }}>
                                                        <Field
                                                            name={`verbs.${index}.first`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item style={{ width: '23%' }}>
                                                        <Field
                                                            name={`verbs.${index}.second`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item style={{ width: '23%' }}>
                                                        <Field
                                                            name={`verbs.${index}.third`}
                                                            render={({ field }: FieldProps) => (
                                                                <Input fullWidth {...field} size="small" />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item style={{ width: '8%' }}>
                                                        <IconButton onClick={() => remove(index)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                            <Grid item>
                                                <Button onClick={() => push({ word: '', first: '', second: '', third: '' })} variant="contained" startIcon={<AddBoxOutlinedIcon />}>
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
                            <Grid item>
                                <Link to={`/verbs`}>
                                    <Button fullWidth type="submit" variant="outlined" startIcon={<DoneIcon />}>
                                        Cancel
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    </Grid>
}

export default CreateVerb;