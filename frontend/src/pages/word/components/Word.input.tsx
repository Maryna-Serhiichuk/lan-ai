import { FC } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Word from "..";

const StyledTextField = styled(TextField)`
  input {
    padding: 10px 15px;
    font-size: 28px;
  }
`;

export const WordInput: FC = () => {
    const { chosenWord, checkWord, errorWord, result } = Word.useContext()

    return <Grid item container direction={'column'} rowSpacing={2} style={{ width: '100%' }}>
        <Grid container item direction="column" alignItems="center">
            <Typography variant="h4" gutterBottom align="center">
                {chosenWord?.translation}
            </Typography>
        </Grid>
        <Grid item>
            <Formik initialValues={{ word: '' }} onSubmit={checkWord}>
                {({ handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'column'} rowSpacing={2}>
                            <Grid item>
                                <StyledTextField autoComplete="off" value={values?.word} size="medium" fullWidth onChange={handleChange} name="word" />
                            </Grid>
                            <Grid item container direction="column" justifyContent="center">
                                <Button color={result} type="submit" variant="contained">
                                    Check
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
        {errorWord &&
            <Grid item container direction="column" alignItems="center">
                <Typography variant="h4" gutterBottom align="center">
                    {errorWord}
                </Typography>
            </Grid>
        }
    </Grid>
}