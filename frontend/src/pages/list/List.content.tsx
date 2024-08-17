import { FC, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ListElement } from './components/ListElement'
import { ListActions } from './components/ListActions'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link } from "react-router-dom";
import { useWordsPoint } from "./hooks/useWordsPoint";
import { DeleteWord } from "./components/DeleteWord.modal";

const ListContent: FC = () => {
    const { saveWordsPoint } = useWordsPoint()

    useEffect(() => {
        saveWordsPoint()
    }, [])
    
    return <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minWidth: '100%', paddingTop: 100 }}
    >
        <Grid
            container 
            spacing={0}
            rowSpacing={2}
            columns={{ md: 12 }}
            style={{ maxWidth: '1200px' }}
        >
            <Grid item xs={12}>
                <Link to={'/list'}>
                    <Button variant="outlined" startIcon={<KeyboardBackspaceOutlinedIcon />}>
                        Return
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <ListElement/>
            </Grid>
            <Grid item xs={6} container alignItems={'center'}>
                <ListActions/>
            </Grid>
        </Grid>
        <DeleteWord/>
    </Grid>
}

export { ListContent }