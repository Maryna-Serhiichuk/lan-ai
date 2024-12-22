import { FC } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { VerbsRow } from "./Verbs.row";
import { useVerbsListsQuery } from "./../../../graphql";

export const VerbsTable: FC = () => {
    const { data } = useVerbsListsQuery()   

    return <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableBody>
                {data?.verbsLists?.data?.map((row) => (
                    <VerbsRow key={row?.id} row={row} />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}