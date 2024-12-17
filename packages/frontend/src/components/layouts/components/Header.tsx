import { useAuth } from "Auth"
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FC } from "react"
import { styled } from '@mui/material/styles';
import { ThemeOptions } from "@mui/material/styles/createTheme";

const HeaderContainer = styled('header')`
    position: fixed;
    z-index: 2;
    width: 100%;
`

const HeaderWrap = styled(Grid, {
    shouldForwardProp: (prop) => prop !== 'listShadow',
})<{ theme?: ThemeOptions }>`
    padding: 10px 0;
    background: ${({ theme }) => theme?.mainColor };
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
`

export const Header: FC = () => {
    const me = useAuth()

    return <HeaderContainer>
        <HeaderWrap
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minWidth: '100%' }}
        >
            <Link to={`list`}>
                <Button variant="text">
                    Lists
                </Button>
            </Link>
            <Link to={`settings`}>
                <Button variant="text">
                    Change
                </Button>
            </Link>
            <Button variant="text">
                Account
            </Button>
            <Link to={`setting/${me?.setting?.data?.id}`}>
                <Button variant="text">
                    {me?.setting?.data?.attributes?.name}
                </Button>
            </Link>
        </HeaderWrap>
    </HeaderContainer>
}