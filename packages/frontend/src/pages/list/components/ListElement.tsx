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
import { ListRow } from "./List.row";

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

export type ChangeWordActivityType = (id: string|undefined|null, active: boolean) => void


export const ListElement: FC = () => {
    const { data } = List.useContext()

    const [updateWord] = useUpdateWordMutation()

    const changeWordActivity = async (id: string|undefined|null, active: boolean) => {
        if(id){
            await updateWord({ variables: { id, data: { active } } })
        }
    }

    return <Container>
        <ListName />
        <ListUI sx={{ width: '100%', maxWidth: '100%', bgcolor: 'transparent' }}>
            {data?.attributes?.words?.data?.map((value) => <ListRow 
                key={value?.id} data={value}
                changeWordActivity={changeWordActivity}
            />)}
        </ListUI>
    </Container>
}