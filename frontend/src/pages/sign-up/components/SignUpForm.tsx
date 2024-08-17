import { FC } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { useRegisterMutation } from "./../../../graphql";
import { emailValidator, passwordValidator } from './../../../components/form/validates'
import { AuthContainer } from "components/containers/AuthContainer";

export const GignUpForm: FC = () => {
    const [register] = useRegisterMutation()

    const signUp: FormikConfig<UsersPermissionsRegisterInput>['onSubmit'] = async (input, onSubmitProps) => {
        try {
            const data = await register({ variables: { input } })
            // TODO: next step
        } catch (err: any) {
            const error = err as ResolverError
            if(error?.message === 'Email or Username are already taken'){
                onSubmitProps.setFieldError('username', 'Email or Username are already taken')
            }
        }
    }

    const validate: FormikConfig<UsersPermissionsRegisterInput>['validate'] = (values) => {
        const emailValidateResult = emailValidator(values?.email)
        const passwordValidateResult = passwordValidator(values?.password)
        if(emailValidateResult || passwordValidateResult) {
            return { 
                email: emailValidateResult,
                password: passwordValidateResult
            }
        }  
    }

    return <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={signUp}
        validate={validate}
    >
        {({ errors, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <AuthContainer title="Sign Up">
                    <Grid item xs={12}>
                        <TextField onChange={handleChange} fullWidth name="username" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={!!errors?.email} helperText={errors?.email} onChange={handleChange} fullWidth name="email" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={!!errors?.password} helperText={errors?.password} onChange={handleChange} fullWidth name="password" label="Password" type="password" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained">Sign Up</Button>
                    </Grid>
                    <ErrorMessage component="div" name="username">{msg => (
                        <Grid item xs={12}>
                            <Alert severity="error">{msg}</Alert>
                        </Grid>
                    )}</ErrorMessage>
                </AuthContainer>
            </Form>
        )}
    </Formik>
}