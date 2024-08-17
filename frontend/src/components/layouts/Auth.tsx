import { FC, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { styled } from '@mui/material/styles';

const Container = styled('div')`
  padding-top: 300px;
`

export const Auth: FC = () => {
    return <Suspense>
        <Container>
            <Outlet/>
        </Container>
    </Suspense>
}