import { FC } from "react";
import styled from "@emotion/styled";
import { wordPointState } from "./wordPointState";

const Mark = styled('div', {
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

type PointMarkType = {
    point: Maybe<number>
}

export const PointMark: FC<PointMarkType> = ({ point }) => {
    return <Mark color={wordPointState(point ?? 0)?.color} />
}