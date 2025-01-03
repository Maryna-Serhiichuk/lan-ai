import { FC, Fragment, useMemo, useState } from "react";
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
import { ChangeWordActivityType } from "./ListElement";
import styled from "@emotion/styled";
import List from "..";
import { wordPointState } from "components/untils/wordPointState";

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

export const ListRow: FC<{ data: WordEntity, changeWordActivity: ChangeWordActivityType }> = ({ data: value, changeWordActivity }) => {
    const { setUpdateWord, setChosenWord, setDeleteWord } = List.useContext()

    return <Fragment>
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
}