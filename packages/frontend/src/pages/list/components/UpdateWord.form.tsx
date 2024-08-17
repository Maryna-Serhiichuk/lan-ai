import { FC } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { useUpdateWordMutation } from "./../../../graphql";
import List from "..";

export const UpdateWord: FC = () => {
    const [updateWordMutation] = useUpdateWordMutation()
    const { chosenWord, setUpdateWord, isUpdateWord } = List.useContext()

    const update: FormikConfig<WordInput>['onSubmit'] = async (data, onSubmitProps) => {
        if(chosenWord && chosenWord?.id) {
            await updateWordMutation({ variables: { id: chosenWord?.id, data } })
            setUpdateWord(false)
        }
    }

    return <Grid>
    {isUpdateWord
        ? <Formik initialValues={{ 
                word: chosenWord?.attributes?.word, 
                translation: chosenWord?.attributes?.translation 
            }} onSubmit={update}>
            {({ values, handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                    <Grid container direction={'column'} rowSpacing={1}>
                        <Grid item>
                            <TextField autoComplete="off" value={values?.word} fullWidth onChange={handleChange} name="word" label="Word" size="small" variant="standard" />
                        </Grid>
                        <Grid item>
                            <TextField autoComplete="off" value={values?.translation} fullWidth onChange={handleChange} name="translation" label="Translation" size="small" variant="standard" />
                        </Grid>
                        <Grid item container direction="column" justifyContent="center">
                            <Button type="submit" variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                                Change
                            </Button>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center">
                            <Button variant="outlined" onClick={() => setUpdateWord(false)}>
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
        : null
    }
</Grid>
}