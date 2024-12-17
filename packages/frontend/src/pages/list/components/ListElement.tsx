import { FC, Fragment } from "react";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ListUI from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColor';

import { useUpdateWordMutation } from "./../../../graphql";
import List from "..";
import styled from "@emotion/styled";
import { wordPointState } from "components/untils/wordPointState";
import { ListName } from "./ListName";

const PointMark = styled('div', {
    shouldForwardProp: (prop) => prop !== 'color',
})<{ color?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        content: "";
        width: 10px;
        height: 10px;
        background: ${({ color }) => color};
        opacity: .3;
        border-radius: 50%;
    }
`
const Container = styled('div', {
    shouldForwardProp: (prop) => prop !== 'color',
})<{ color?: string }>`
    max-width: 450px;
`


export const ListElement: FC = () => {
    const { data, setUpdateWord, setChosenWord, setDeleteWord } = List.useContext()

    const [updateWord] = useUpdateWordMutation()

    const changeWordActivity = async (id: string|undefined|null, active: boolean) => {
        if(id){
            await updateWord({ variables: { id, data: { active } } })
        }
    }

    return <Container>
        <ListName />
        <ListUI sx={{ width: '100%', maxWidth: '100%', bgcolor: 'transparent' }}>
            {data?.attributes?.words?.data?.map((value) => {
                return (
                    <Fragment key={value?.id}>
                        <ListItem
                            color={wordPointState(value?.attributes?.point ?? 0)?.color}
                            secondaryAction={
                                <Grid>
                                    <IconButton onClick={() => {
                                        setChosenWord(value)
                                        setUpdateWord(true)
                                    }} edge="end" aria-label="comments">
                                        <BorderColorOutlinedIcon />
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        setChosenWord(value)
                                        setDeleteWord(true)
                                    }} edge="end" aria-label="comments">
                                        <DeleteOutlinedIcon />
                                    </IconButton>
                                </Grid>
                            }
                            disablePadding
                        >
                            {/* <ListItemButton role={undefined} onClick={handleToggle(value)} dense> */}
                            <ListItemButton role={undefined} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={!!value?.attributes?.active}
                                        tabIndex={-1}
                                        disableRipple
                                        onChange={() => changeWordActivity(value?.id, !value?.attributes?.active)}
                                    />
                                    <PointMark color={wordPointState(value?.attributes?.point ?? 0)?.color}/>
                                
                                </ListItemIcon>
                                <ListItemText primary={value?.attributes?.word} style={{ width: 150 }} />
                                <ListItemText primary={value?.attributes?.translation} style={{ width: 200 }} />
                            </ListItemButton>
                        </ListItem>
                    <Divider/>
                </Fragment>
                );
            })}
        </ListUI>
    </Container>
}