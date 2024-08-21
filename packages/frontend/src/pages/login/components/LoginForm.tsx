import { FC } from "react"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { emailValidator } from './../../../components/form/validates'
import { AuthContainer } from "components/containers/AuthContainer";
import { useLoginMutation } from "./../../../graphql";

export const LoginForm: FC = () => {
    const [login, { loading }] = useLoginMutation()

    const signIn: FormikConfig<UsersPermissionsLoginInput>['onSubmit'] = async (input, onSubmitProps) => {
        try {
            const data = await login({ variables: { input } })
            if(data?.data?.login?.jwt) {
                localStorage.setItem('jwt', data?.data?.login?.jwt) 
                window.location.reload()
            }
        } catch (err: any) {
            const error = err as ResolverError
            if(error?.message === 'Invalid identifier or password'){
                onSubmitProps.setFieldError('password', 'Invalid email or password')
            }
        }
    }

    const validate: FormikConfig<UsersPermissionsLoginInput>['validate'] = (values) => {
        const emailValidateResult = emailValidator(values?.identifier)
        if(emailValidateResult) {
            return { identifier: emailValidateResult,}
        }  
    }

    return <Formik
        initialValues={{ identifier: '', password: '' }}
        onSubmit={signIn}
        validate={validate}
    >
    {({ errors, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
            <AuthContainer title="Login">
                <Grid item xs={12}>
                    <TextField error={!!errors?.identifier} helperText={errors?.identifier} onChange={handleChange} fullWidth name="identifier" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={handleChange} fullWidth name="password" label="Password" type="password" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button disabled={loading} type="submit" fullWidth variant="contained">Login</Button>
                </Grid>
                <ErrorMessage component="div" name="password">{msg => (
                    <Grid item xs={12}>
                        <Alert severity="error">{msg}</Alert>
                    </Grid>
                )}</ErrorMessage>
            </AuthContainer>
        </Form>
    )}
</Formik>
}