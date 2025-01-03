import { FC } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Verbs from "..";

export const VerbDeleteModal: FC = () => {
    const { isDeleteState, setDeleteState, chosen, onDeleteVerb, setChosen } = Verbs.useContext()

    return <Dialog open={isDeleteState}>
        <Grid container direction={'row'} style={{ width: 300, padding: 20 }} rowSpacing={2}>
            <Grid item container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h5" gutterBottom align="center">
                    Delete <Typography component="span" color={'red'} style={{ fontSize: 'inherit' }}>{chosen?.attributes?.first}</Typography>?
                </Typography>
            </Grid>
            <Grid item container direction={'row'} columnSpacing={2}>
                <Grid item xs={6}>
                    <Button onClick={onDeleteVerb} fullWidth variant="contained">
                        Delete
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" onClick={() => {
                        setChosen(undefined)
                        setDeleteState(false)
                    }}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Dialog>
}