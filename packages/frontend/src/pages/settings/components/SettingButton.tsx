import { FC } from "react";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export const SettingButton: FC<SettingEntity> = ({ id, attributes }) => {
    return <Link to={'/list'}>
        <Button variant="outlined" style={{ height: '100px', width: '200px', fontSize: 20 }}>
            {attributes?.name}
        </Button>
    </Link>
}