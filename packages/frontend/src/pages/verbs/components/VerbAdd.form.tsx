import { FC } from "react";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Formik, Form, ErrorMessage } from 'formik';
import Verbs from "..";

export const VerbAddForm: FC = () => {
    const { setCreateState, onCreateVerb } = Verbs.useContext()

    return <Formik initialValues={{ word: '', first: '', second: '', third: '' }} onSubmit={onCreateVerb}>
        {({ handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <Grid container direction={'row'} spacing={2}>
                    <Grid item sm={2}>
                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="first" label="Infinitive" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="second" label="Past" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="third" label="Past Participle" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="word" label="Translation" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2} container direction="column" justifyContent="center">
                        <Button type="submit" variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                            Done
                        </Button>
                    </Grid>
                    <Grid item sm={2} container direction="column" justifyContent="center">
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
}