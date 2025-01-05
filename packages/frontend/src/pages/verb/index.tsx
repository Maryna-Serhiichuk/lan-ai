import { FC } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useVerb } from "./hooks/useVerb";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { VerbForm } from "./components/Verb.form";

const Verb: FC = () => {
    const verbsManager = useVerb();
    const { onReturn } = verbsManager;

    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 100 }}>
        <Grid container direction={'column'} rowSpacing={4} style={{ maxWidth: 1000, paddingTop: 50 }}>
            <Grid item>
                <Button onClick={onReturn} variant="outlined" startIcon={<KeyboardBackspaceOutlinedIcon />}>
                    Return
                </Button>
            </Grid>
            <VerbForm {...verbsManager} />
        </Grid>
    </Grid>
}

export default Verb