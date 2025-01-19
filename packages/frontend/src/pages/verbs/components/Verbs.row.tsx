import { FC, useState, Fragment, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { styled } from '@mui/material/styles';
import { VerbRow } from "./Verb.row";
import { VerbEditForm } from "./VerbEdit.form";
import { VerbAddForm } from "./VerbAdd.form";
import Verbs from "..";
import { useHash } from "components/hooks/useHash";

const ButtonStyled = styled(Button)`
    .MuiButton-icon {
      margin: 0;
    }
`

export const VerbsRow: FC<{ row: VerbsListEntity }> = memo(({ row }) => {
    const { setChosen, setEditState, isEditState, setCreateState, isCreateState } = Verbs.useContext()
    const [open, setOpen] = useState(false);
    const [hash, setHash] = useHash() // anyway calls rerender page

    const onCollaps = useCallback(() => {
      if (open) {
        setHash('');
      } else {
        setHash(row?.id);
      }
      setOpen(!open);
    }, [open, row?.id]);

    useEffect(() => {
      if(hash && hash === `#${row?.id}` && open) {
        setOpen(true)
      }
    }, [hash])

    const onEdit = useCallback((item: VerbEntity) => {
      setChosen(item)
      setEditState(true)
    }, [setChosen, setEditState])

    return (
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={onCollaps}
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
              <Box sx={{ margin: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Table size="small" aria-label="purchases" style={{ width: 400 }}>
                  <TableBody>
                    {row?.attributes?.verbs?.data?.map(word => <VerbRow key={word?.id} data={word} onEdit={onEdit} />)}
                  </TableBody>
                </Table>
                {isEditState && <VerbEditForm />}
                <TableRow>
                  <Button fullWidth onClick={() => setCreateState(true)} variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                      Add
                  </Button>
                </TableRow>
              </Box>
              <Box sx={{ margin: 1, display: 'flex', justifyContent: 'space-between' }}>
                {isCreateState &&
                  <TableRow>
                    <Grid>
                      <VerbAddForm />
                    </Grid>
                  </TableRow>
                }
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  })