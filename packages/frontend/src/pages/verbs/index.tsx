import { FC, useState, Fragment } from "react";
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { useVerbsListsQuery } from "./../../graphql";

const ButtonStyled = styled(Button)`
    .MuiButton-icon {
        margin: 0;
    }
`

const Verbs: FC = () => {
  const { data } = useVerbsListsQuery()

    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 150 }}>
        <Grid container direction={'column'} rowSpacing={5} style={{ maxWidth: 1000 }}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableBody>
                      {data?.verbsLists?.data?.map((row) => (
                          <Row key={row?.id} row={row} />
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
}

function Row(props: { row: VerbsListEntity }) {
    const { row } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{row?.attributes?.name}</TableCell>
          <TableCell align="right">
            <Link to={`/verb/${row?.id}`}>
                <ButtonStyled startIcon={<ArrowForwardIcon />} size="large" variant="contained"/>
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, display: 'flex', justifyContent: 'center' }}>
                <Table size="small" aria-label="purchases" style={{ width: 400 }}>
                  <TableBody>
                    {row?.attributes?.verbs?.data?.map(word => (
                      <TableRow key={word?.id}>
                        <TableCell align="center">{word?.attributes?.first}</TableCell>
                        <TableCell align="center">{word?.attributes?.second}</TableCell>
                        <TableCell align="center">{word?.attributes?.third}</TableCell>
                        <TableCell align="right">{word?.attributes?.word}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }

export default Verbs