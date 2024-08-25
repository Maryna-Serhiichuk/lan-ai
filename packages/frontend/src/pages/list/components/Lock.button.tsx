import { FC } from "react";
import { useParams } from "react-router-dom"
import Button, { ButtonOwnProps } from '@mui/material/Button';
import List from "..";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { useUpdateListMutation } from "./../../../graphql";

export const LockButton: FC = () => {
    const { id } = useParams()
    const { data } = List.useContext()
    const [updateList] = useUpdateListMutation()

    const isClosed = data?.attributes?.closed

    const ButtonIcon = isClosed ? LockOpenIcon : LockIcon
    const buttonLabel = isClosed ? 'Open' : 'Close'
    const buttonVariant: ButtonOwnProps['variant'] = isClosed ? 'outlined' : 'contained'

    const update = async () => {
        if(id) {
            await updateList({ variables: { id, data: { closed: !isClosed } } })
        }
    }

    return <Button onClick={update} fullWidth variant={buttonVariant} startIcon={<ButtonIcon />}>
        {buttonLabel}
    </Button>
}