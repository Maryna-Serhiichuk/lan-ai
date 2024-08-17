import { FC } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { AddWord } from "./AddWord.form";
import { Link } from "react-router-dom";
import { UpdateWord } from "./UpdateWord.form";

export const ListActions: FC = () => {
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
        <Button variant="contained" startIcon={<SubtitlesOutlinedIcon />}>
            Sentences
        </Button>
        <AddWord/>
        <UpdateWord/>
    </Stack>
}