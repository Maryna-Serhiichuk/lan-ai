import { FC } from "react";
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Word from "..";
import { Button, Grid } from "@mui/material";

export const StudyModal: FC = () => {
    const { studyModal, setStudyModal, studyWord } = Word.useContext()

    return <Dialog open={studyModal}>
        <List sx={{ padding: 3, width: 400, display: 'block' }}>
            <ListItem disableGutters>
                <Grid container direction={'row'} wrap="nowrap" justifyContent={'center'} style={{ fontSize: 26 }}>
                    <Grid item>{studyWord}</Grid>
                </Grid>
            </ListItem>
            <ListItem disableGutters>
                <Button fullWidth onClick={() => setStudyModal(false)} variant="outlined">
                    OK
                </Button>
            </ListItem>
        </List>
    </Dialog>
}