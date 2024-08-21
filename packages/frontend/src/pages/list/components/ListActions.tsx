import { FC } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { AddWord } from "./AddWord.form";
import { Link } from "react-router-dom";
import { UpdateWord } from "./UpdateWord.form";
import { useParams } from "react-router-dom"

export const ListActions: FC = () => {
    const { id } = useParams()

    return <Stack direction="column" spacing={2} style={{ maxWidth: 250, width: '100%' }}>
        <Link to={'random'}>
            <Button fullWidth variant="outlined" startIcon={<ShuffleOutlinedIcon />}>
                Random
            </Button>
        </Link>
        <Link to={'study'}>
            <Button fullWidth variant="contained" startIcon={<PsychologyOutlinedIcon />}>
                Study
            </Button>
        </Link>
        <Link to={`/sentences/${id}`}>
            <Button fullWidth variant="contained" startIcon={<SubtitlesOutlinedIcon />}>
                Sentences
            </Button>
        </Link>
        <AddWord/>
        <UpdateWord/>
    </Stack>
}