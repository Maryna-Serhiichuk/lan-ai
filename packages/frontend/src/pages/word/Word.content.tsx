import { FC } from "react";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Word from './index'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export const WordContent: FC = () => {
    const { setOpenModal } = Word.useContext()

    return <Grid>
        <Grid container direction="column" alignItems="center" style={{ width: '100%', paddingTop: 200 }}>
            <Grid container direction={'column'} rowSpacing={10} style={{ maxWidth: 350, width: '100%' }}>
                <Grid item>
                    <Button onClick={() => setOpenModal(true)} variant="outlined" startIcon={<KeyboardBackspaceOutlinedIcon />}>
                        Return
                    </Button>
                </Grid>
                <Word.Input />
            </Grid>
        </Grid>
    </Grid>
}