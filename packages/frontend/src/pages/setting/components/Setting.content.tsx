import { FC } from "react";
import { useParams } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import { useSettingQuery, useUpdateSettingMutation } from "./../../../graphql";
import { tenses } from "../constants";
import { Formik, Form, Field, FieldProps, FormikConfig } from 'formik';
import { styled } from '@mui/material/styles';

const LabelDiv = styled(Grid)`
    width: 100px;
    font-weight: 700;
`

export const SettingContent: FC = () => {
    const { id } = useParams()

    const { data } = useSettingQuery({ variables: { id: id ?? '' } })
    const [updateSettingMutation] = useUpdateSettingMutation()

    const update: FormikConfig<Omit<SettingInput, 'tenses'> & { tenses: Maybe<string[]> }>['onSubmit'] = async (input, onSubmitProps) => {
        const data: SettingInput = { ...input, tenses: input?.tenses?.join(', ')}

        if(id) {
            await updateSettingMutation({ variables: { id, data } })
        }
        
    }

    return <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minWidth: '100%', paddingTop: 100 }}
    >
        <Grid
            container 
            spacing={0}
            rowSpacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ maxWidth: '600px' }}
        >
            <Formik enableReinitialize initialValues={{ 
                name: data?.setting?.data?.attributes?.name, 
                level: data?.setting?.data?.attributes?.level, 
                theme: data?.setting?.data?.attributes?.theme, 
                tenses: data?.setting?.data?.attributes?.tenses?.split(', ')
            }} onSubmit={update}>
                {({ values, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid container direction={'column'} rowSpacing={5}>
                            <Grid item container direction={'row'} columnSpacing={3}>
                                <LabelDiv item>
                                    Name
                                </LabelDiv>
                                <Grid item>
                                    <Field
                                        name={`name`}
                                        render={({ field }: FieldProps) => (
                                            <Input fullWidth {...field} placeholder="English, Spanish" size="small" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} columnSpacing={3}>
                                <LabelDiv item>
                                    Level
                                </LabelDiv>
                                <Grid item>
                                    <Field
                                        name={`level`}
                                        render={({ field }: FieldProps) => (
                                            <Input fullWidth {...field} placeholder="A1" size="small" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} columnSpacing={3}>
                                <LabelDiv item>
                                    Tenses
                                </LabelDiv>
                                <Grid item>
                                    <FormGroup>
                                        {tenses?.map(tense => (
                                            <Field
                                                key={tense?.type}
                                                name={`tenses`}
                                                render={({ field }: FieldProps) => (
                                                    <FormControlLabel {...field} control={
                                                        <Checkbox 
                                                            checked={values?.tenses?.includes(tense?.type) ?? false} 
                                                            value={tense?.type}
                                                            onChange={handleChange}
                                                        />} 
                                                    label={tense?.type} style={{ textTransform: 'capitalize' }} />
                                                )}
                                            />
                                        ))}
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid item container direction={'row'} columnSpacing={3}>
                                <LabelDiv item>
                                    Theme
                                </LabelDiv>
                                <Grid item>
                                    <Field
                                        name={`theme`}
                                        render={({ field }: FieldProps) => (
                                            <Input fullWidth {...field} placeholder="Medicine, IT, Business" size="small" />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button fullWidth type="submit" variant="contained" startIcon={<DoneIcon />}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    </Grid>
}