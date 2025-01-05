import { FC } from "react";
import ListUI from '@mui/material/List';

import { useUpdateWordMutation } from "./../../../graphql";
import List from "..";
import styled from "@emotion/styled";
import { ListName } from "./ListName";
import { ListRow } from "./List.row";

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