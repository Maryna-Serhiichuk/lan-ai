import { FC, useMemo, memo } from "react";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import dayjs from 'dayjs'
import LockIcon from '@mui/icons-material/Lock';
import DoneIcon from '@mui/icons-material/Done';

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

const opacityMin = 0.1
const roofPoints = 30

export const ListButton: FC<ListEntity> = memo(({ id, attributes }) => {
    const { pointsSum, avaragePoints } = useMemo(() => {
        const points = attributes?.words?.data?.map(it => it?.attributes?.point ?? 0) || [];
        const sum = points.reduce((a, b) => a + b, 0);
        const average = sum / (points.length || 1);
        return { pointsSum: sum, avaragePoints: average };
    }, [attributes?.words?.data]);

    const isToday = useMemo(() => {
        const dates = attributes?.words?.data?.map(a => a?.attributes?.updatedAt)?.filter(Boolean);
        return dates?.some(date => dayjs(date).isSame(dayjs(), "day"));
    }, [attributes?.words?.data]);

    const linkStyle = useMemo(() => {
        const opacity = Math.abs(((1 / roofPoints) * avaragePoints) - 1) + opacityMin;
        return { opacity };
    }, [avaragePoints]);


    return <Link to={id ?? ''} style={linkStyle}>
        <Button variant={attributes?.words?.data && attributes?.words?.data?.length > 0 ? "contained" : "outlined"} style={{ overflow: 'hidden', height: '100px', width: '200px', fontSize: 20 }}>
            {attributes?.name}
            <DateStyled>
                {dayjs(attributes?.createdAt).format('DD-MM-YY')}
            </DateStyled>
            <PointStyled>
                {pointsSum}
            </PointStyled>
            {isToday &&
                <LockStyled>
                    <DoneIcon fontSize={'small'}/>
                </LockStyled>
            }
            {attributes?.closed &&
                <LockStyled>
                    <LockIcon fontSize={'small'}/>
                </LockStyled>
            }
        </Button>
    </Link>
})