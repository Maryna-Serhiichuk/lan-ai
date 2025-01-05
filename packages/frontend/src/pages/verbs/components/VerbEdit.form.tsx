import { FC } from "react";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Formik, Form, ErrorMessage } from 'formik';
import Verbs from "..";

export const VerbEditForm: FC = () => {
    const { onUpdateVerb, chosen, setEditState } = Verbs.useContext()

    return <Formik initialValues={{ 
        word: chosen?.attributes?.word ?? '', 
        first: chosen?.attributes?.first ?? '', 
        second: chosen?.attributes?.second ?? '', 
        third: chosen?.attributes?.third ?? ''
      }} onSubmit={onUpdateVerb}>
        {({ values, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item sm={2}>
                        <TextField value={values?.first} autoComplete="off" fullWidth onChange={handleChange} name="first" label="Infinitive" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField value={values?.second} autoComplete="off" fullWidth onChange={handleChange} name="second" label="Past" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField value={values?.third} autoComplete="off" fullWidth onChange={handleChange} name="third" label="Past Participle" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2}>
                        <TextField value={values?.word} autoComplete="off" fullWidth onChange={handleChange} name="word" label="Translation" size="small" variant="standard" />
                    </Grid>
                    <Grid item sm={2} container direction="column" justifyContent="center">
                        <Button type="submit" variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                            Done
                        </Button>
                    </Grid>
                    <Grid item sm={2} container direction="column" justifyContent="center">
                        <Button variant="outlined" onClick={() => setEditState(false)}>
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