import { FC, useState, Fragment, KeyboardEvent } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import Typography from '@mui/material/Typography';
import { useVerbs } from "./hooks/useVerbs";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const StyledTextField = styled(TextField)`
  input {
    padding: 10px 15px;
    font-size: 28px;
  }
`;

// Button color={result}

// Formik onSubmit={checkWord}

const Verb: FC = () => {
    const { chosenWord, checkWord, result, onReturn } = useVerbs()


    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 100 }}>
        <Grid container direction={'column'} rowSpacing={4} style={{ maxWidth: 1000, paddingTop: 50 }}>
            <Grid item>
                <Button onClick={onReturn} variant="outlined" startIcon={<KeyboardBackspaceOutlinedIcon />}>
                    Return
                </Button>
            </Grid>
            <Grid container item direction="column" alignItems="center">
                <Typography variant="h3" gutterBottom align="center">
                    {chosenWord?.attributes?.word}
                </Typography>
            </Grid>
            <Grid item>
                <Formik initialValues={{ first: '', second: '', third:'' }} onSubmit={checkWord}>
                    {({ handleSubmit, setFieldValue, handleChange, values }) => {
                        const handleKeyDown = (
                            event: KeyboardEvent<HTMLElement>,
                            fieldName: string,
                            nextFieldName?: string,
                            prevFieldName?: string
                        ) => {
                            const { key } = event;

                            if (key === ' ') {
                                event.preventDefault();

                                if (nextFieldName) {
                                    const nextField = document.querySelector<HTMLInputElement>(`input[name="${nextFieldName}"]`);
                                    nextField?.focus();
                                }
                            } else if (key === 'Backspace' && !values[fieldName]) {
                                if (prevFieldName) {
                                    const prevField = document.querySelector<HTMLInputElement>(`input[name="${prevFieldName}"]`);
                                    prevField?.focus();
                                }
                            }
                        };

                        return (
                            <Form onSubmit={handleSubmit}>
                                <Grid container direction={'column'} rowSpacing={2}>
                                    <Grid container direction={'row'} spacing={2}>
                                        <Grid item md={4}>
                                            <StyledTextField 
                                                error={typeof result?.first === 'boolean' ? !result?.first : false}
                                                autoComplete="off" value={values?.first} size="medium" fullWidth name="first"
                                                onChange={(e) => setFieldValue('first', e.target.value)} // Стандартне оновлення значення
                                                onKeyDown={(e) => handleKeyDown(e, 'first', 'second')}
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StyledTextField 
                                                error={typeof result?.second === 'boolean' ? !result?.second : false}
                                                autoComplete="off" value={values?.second} size="medium" fullWidth  name="second" 
                                                onChange={(e) => setFieldValue('second', e.target.value)} // Стандартне оновлення значення
                                                onKeyDown={(e) => handleKeyDown(e, 'second', 'third', 'first')} 
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <StyledTextField 
                                                error={typeof result?.third === 'boolean' ? !result?.third : false}
                                                autoComplete="off" value={values?.third} size="medium" fullWidth name="third" 
                                                onChange={(e) => setFieldValue('third', e.target.value)} // Стандартне оновлення значення
                                                onKeyDown={(e) => handleKeyDown(e, 'third', undefined, 'second')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container direction={'row'} spacing={2} style={{ height: 100 }}>
                                        <Grid item md={4}>
                                            <Typography variant="h4" gutterBottom align="center">
                                                {(typeof result?.first === 'boolean' && !result?.first) && chosenWord?.attributes?.first}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography variant="h4" gutterBottom align="center">
                                                {(typeof result?.second === 'boolean' && !result?.second) && chosenWord?.attributes?.second}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography variant="h4" gutterBottom align="center">
                                                {(typeof result?.third === 'boolean' && !result?.third) && chosenWord?.attributes?.third}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" justifyContent="center">
                                        <Button color={typeof result === 'object' 
                                            ? ((result?.first && result?.second && result?.third) 
                                                ? 'success' 
                                                : (!result?.first && !result?.second && !result?.third) 
                                                    ? 'error'
                                                    : 'warning'
                                            ) 
                                            : 'inherit'} type="submit" variant="contained"
                                        >
                                            Check
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )
                    }}
                </Formik>
            </Grid>
        </Grid>
    </Grid>
}

export default Verb