import { FC } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import List from "..";
import { Grid } from "@mui/material";
import { useDeleteWordMutation } from "./../../../graphql";

export const DeleteWord: FC = () => {
    const { isDeleteWord, chosenWord, setDeleteWord } = List.useContext()
    const [deleteWord] = useDeleteWordMutation()

    const deleteObject = async () => {
        if(chosenWord?.id) {
            await deleteWord({ variables: { id: chosenWord?.id } })
        }
    }

    return <Dialog open={isDeleteWord}>
        <Grid container direction={'row'} style={{ width: 300, padding: 20 }} rowSpacing={2}>
            <Grid item container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h5" gutterBottom align="center">
                    Delete <Typography component="span" color={'red'} style={{ fontSize: 'inherit' }}>{chosenWord?.attributes?.word}</Typography>?
                </Typography>
            </Grid>
            <Grid item container direction={'row'} columnSpacing={2}>
                <Grid item xs={6}>
                    <Button onClick={deleteObject} fullWidth variant="contained">
                        Delete
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" onClick={() => setDeleteWord(false)}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Dialog>
}