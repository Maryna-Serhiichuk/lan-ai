import { FC } from "react";
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)`
    .MuiButton-icon {
        margin: 0;
    }
`

export const VerbsButton: FC = () => {
    return <Grid alignItems={'end'} container direction={'column'} rowSpacing={4} style={{ marginBottom: 30 }}>
        <Link to={`/create-verb`}>
            <ButtonStyled size="large" variant="outlined" startIcon={<AddIcon />}/>
        </Link>
    </Grid>
}