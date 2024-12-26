import { FC, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom"
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Formik, Form, ErrorMessage, FormikConfig  } from 'formik';
import { styled } from '@mui/material/styles';
import { useCreateVerbMutation } from "./../../../graphql";

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

const ButtonStyled = styled(Button)`
    .MuiButton-icon {
      margin: 0;
    }
`

export const VerbsRow: FC<{ row: VerbsListEntity }> = ({ row }) => {
    const { id } = useParams()
    const [open, setOpen] = useState(false);
    const [isCreateState, setCreateState] = useState(false)
    const [createWord] = useCreateVerbMutation()

    const addWord: FormikConfig<VerbInput>['onSubmit'] = async (data, onSubmitProps) => {
      console.log(111111)
      console.log(data, { ...data, verbs_list: row?.id })
      try {
          const result = await createWord({ variables: { data: { ...data, verbs_list: row?.id } } })
          // refetch && await refetch()
          setCreateState(false)
      } catch (err: any) {
          const error = err as ResolverError
          onSubmitProps.setFieldError('word', error?.message ?? '')
      } 
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
                    {row?.attributes?.verbs?.data?.map(word => (
                      <TableRow key={word?.id}>
                        <TableCell align="center">{word?.attributes?.first}</TableCell>
                        <TableCell align="center">{word?.attributes?.second}</TableCell>
                        <TableCell align="center">{word?.attributes?.third}</TableCell>
                        <TableCell align="right">{word?.attributes?.word}</TableCell>
                        <TableCellButtonStyled align="right" onClick={() => setCreateState(true)}>
                          <Button startIcon={<EditIcon />} size="small"/>
                        </TableCellButtonStyled>
                        <TableCellButtonStyled align="right">
                          <Button startIcon={<DeleteOutlineIcon />} size="small"/>
                        </TableCellButtonStyled>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                      <Formik initialValues={{ word: '', first: '', second: '' , third: ''}} onSubmit={addWord}>
                        {({ handleSubmit, handleChange }) => (
                            <Form onSubmit={handleSubmit}>
                                <Grid container direction={'row'} spacing={2}>
                                    <Grid item sm={2}>
                                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="first" label="Infinitive" size="small" variant="standard" />
                                    </Grid>
                                    <Grid item sm={2}>
                                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="second" label="Past" size="small" variant="standard" />
                                    </Grid>
                                    <Grid item sm={2}>
                                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="third" label="Past Participle" size="small" variant="standard" />
                                    </Grid>
                                    <Grid item sm={2}>
                                        <TextField autoComplete="off" fullWidth onChange={handleChange} name="word" label="Translation" size="small" variant="standard" />
                                    </Grid>
                                    <Grid item sm={2} container direction="column" justifyContent="center">
                                        <Button type="submit" variant="contained" startIcon={<AddBoxOutlinedIcon />}>
                                            Done
                                        </Button>
                                    </Grid>
                                    <Grid item sm={2} container direction="column" justifyContent="center">
                                        <Button variant="outlined" onClick={() => setCreateState(false)}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <ErrorMessage component="div" name="word">{msg => (
                                        <Grid item xs={12}>
                                            <Alert severity="error">{msg}</Alert>
                                        </Grid>
                                    )}</ErrorMessage>
                                </Grid>
                            </Form>
                          )}
                      </Formik>
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