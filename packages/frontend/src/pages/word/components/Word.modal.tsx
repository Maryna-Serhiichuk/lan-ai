import { FC } from "react";
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Word from "..";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const WordModal: FC = () => {
    const navigate = useNavigate()
    const { wordPoints, openModal } = Word.useContext()

    const resultColor = (point: number) => {
        if (point === 0) return undefined
        if (point > 0) return 'green'
        if (point < 0) return 'red'
    }

    return <Dialog open={openModal}>
        <List sx={{ padding: 2, width: 250, display: 'block' }}>
            {wordPoints.sort((a, b) => (b?.point ?? 0) - (a?.point ?? 0))?.map(item => (
                <ListItem disableGutters key={item?.id} style={{ color: resultColor(item?.point ?? 0) }}>
                    <Grid container direction={'row'} wrap="nowrap" justifyContent={'space-between'} style={{ fontSize: 26 }}>
                        <Grid item>{item?.word}</Grid>
                        <Grid item>{item?.point}</Grid>
                    </Grid>
                </ListItem>
            ))}
            <ListItem disableGutters>
                <Button fullWidth onClick={() => navigate(-1)} variant="outlined">
                    OK
                </Button>
            </ListItem>
        </List>
    </Dialog>
}