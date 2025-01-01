import { FC } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { styled } from '@mui/material/styles';

const TableCellButtonStyled = styled(TableCell)`
  padding-left: 3px;
  padding-right: 3px;
  .MuiButton-root{
    min-width: auto;
    .MuiButton-icon {
      margin: 0;
    }
    &: hover {
      background: ${({ theme }) => theme?.mainColor };
    }
  }
`

export const VerbRow: FC<{ data: VerbEntity, onEdit: (item: VerbEntity) => void }> = ({ data, onEdit }) => {
    return <TableRow key={data?.id}>
        <TableCell align="center">{data?.attributes?.first}</TableCell>
        <TableCell align="center">{data?.attributes?.second}</TableCell>
        <TableCell align="center">{data?.attributes?.third}</TableCell>
        <TableCell align="right">{data?.attributes?.word}</TableCell>
        <TableCellButtonStyled align="right" onClick={() => onEdit(data)}>
            <Button startIcon={<EditIcon />} size="small"/>
        </TableCellButtonStyled>
        <TableCellButtonStyled align="right">
            <Button startIcon={<DeleteOutlineIcon />} size="small"/>
        </TableCellButtonStyled>
    </TableRow>
}