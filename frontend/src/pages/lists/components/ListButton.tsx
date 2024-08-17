import { FC } from "react";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export const ListButton: FC<ListEntity> = ({ id, attributes }) => {
    return <Link to={id ?? ''}>
        <Button variant={attributes?.words?.data && attributes?.words?.data?.length > 0 ? "contained" : "outlined"} style={{ height: '100px', width: '200px', fontSize: 20 }}>
            {attributes?.name}
        </Button>
    </Link>
}