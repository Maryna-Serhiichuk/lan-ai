import { FC, useState, Fragment } from "react";
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
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
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { styled } from '@mui/material/styles';
import { useCreateVerbMutation, useVerbsListsLazyQuery } from "./../../../graphql";
import { VerbRow } from "./Verb.row";
import { VerbEditForm } from "./VerbEdit.form";
import { VerbAddForm } from "./VerbAdd.form";

const ButtonStyled = styled(Button)`
    .MuiButton-icon {
      margin: 0;
    }
`

export const VerbsRow: FC<{ row: VerbsListEntity }> = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [isCreateState, setCreateState] = useState(false)
    const [isEditState, setEditState] = useState(false)
    const [createWord] = useCreateVerbMutation()
    const [_, { refetch }] = useVerbsListsLazyQuery()
    const [chosen, setChosen] = useState<VerbEntity>()

    const addWord: FormikConfig<VerbInput>['onSubmit'] = async (data, onSubmitProps) => {
      try {
          const result = await createWord({ variables: { data: { ...data, verbs_list: row?.id } } })
          refetch && await refetch()
          setCreateState(false)
          
      } catch (err: any) {
          const error = err as ResolverError
          onSubmitProps.setFieldError('word', error?.message ?? '')
      } 
    }

    const onEdit = (item: VerbEntity) => {
      setChosen(item)
      setEditState(true)
    }

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
              <Box sx={{ margin: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Table size="small" aria-label="purchases" style={{ width: 400 }}>
                  <TableBody>
                    {row?.attributes?.verbs?.data?.map(word => <VerbRow key={word?.id} data={word} onEdit={onEdit} />)}
                  </TableBody>
                </Table>
                {isEditState && <VerbEditForm chosen={chosen} setEditState={setEditState}/>}
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
                      <VerbAddForm onAdd={addWord} setCreateState={setCreateState} />
                    </Grid>
                  </TableRow>
                }
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }