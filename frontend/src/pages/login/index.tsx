import { FC } from "react";
import { styled } from '@mui/material/styles';
import { LoginForm } from './components/LoginForm'

const Div = styled('div')`
  background: green;
`

const Login: FC = () => {
    return <LoginForm/>
}

export default Login;