import { FC } from "react";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import dayjs from 'dayjs'
import LockIcon from '@mui/icons-material/Lock';

const DateStyled = styled('div')`
    position: absolute;
    font-size: 10px;
    bottom: 0;
    right: 10px;
`

const PointStyled = styled('div')`
    position: absolute;
    font-size: 10px;
    bottom: 0;
    left: 8px;
`

const LockStyled = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .3;
    svg {
        font-size: 150px;
    }
`


export const ListButton: FC<ListEntity> = ({ id, attributes }) => {
    const opacityMin = 0.1
    const roofPoints = 30
    const pointsSum = attributes?.words?.data?.map(it => it?.attributes?.point ?? 0)?.reduce((a,b) => a + b, 0)
    const avaragePoints = (pointsSum ?? 0) / (attributes?.words?.data?.length ?? 1)
    
    return <Link to={id ?? ''} style={{ opacity: Math.abs(((1 / roofPoints) * avaragePoints) - 1) + opacityMin }}>
        <Button variant={attributes?.words?.data && attributes?.words?.data?.length > 0 ? "contained" : "outlined"} style={{ overflow: 'hidden', height: '100px', width: '200px', fontSize: 20 }}>
            {attributes?.name}
            <DateStyled>
                {dayjs(attributes?.createdAt).format('DD-MM-YY')}
            </DateStyled>
            <PointStyled>
                {pointsSum}
            </PointStyled>
            {attributes?.closed &&
                <LockStyled>
                    <LockIcon fontSize={'small'}/>
                </LockStyled>
            }
        </Button>
    </Link>
}