import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { TextareaField } from './../../components/textarea';
import Button from '@mui/material/Button';
import { useCheckSentencesMutation, useGetSentencesMutation } from './../../graphql';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Formik, Form, FormikConfig, FieldArray } from 'formik';
import { Markdown } from 'components/markdown';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

// Did you buy me a bread?
// Do you want to do with me in cinema tomorrow?
// Which last books you read?

const Sentences = () => {
    const { id } = useParams()
    const navigation = useNavigate()
    const [sentences, setSentences] = useState<Sentence[]>([])
    const [getSentences, { loading }] = useGetSentencesMutation()
    const [checkSentences, { loading: checkLoading }] = useCheckSentencesMutation()
    const [result, setResult] = useState<SentenceResponse[]>([])

    const getSentencesData = async () => {
        if(id) {
            const resultData = await getSentences({ variables: { id } })
            setSentences((resultData?.data?.getSentences?.data ?? []) as Sentence[]) // TODO: ще раз не запускається
        }
    }

    const check: FormikConfig<{data: Maybe<SentenceInput[]>}>['onSubmit'] = async (input, onSubmitProps) => {
        if(result?.length > 0){
            onSubmitProps.resetForm()
            await again()
            return 
        }

        const data = await checkSentences({ variables: input })
        setResult((data?.data?.checkSentences?.data ?? []) as SentenceResponse[])
    }

    const again = async () => {
        setResult([])
        setSentences([])
        await getSentencesData()
    }

    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 100 }}>
        <Grid container direction={'column'} rowSpacing={5} style={{ maxWidth: 800 }}>
            <Grid item container direction="column" justifyContent="center" style={{ maxWidth: 200 }}>
                <Button startIcon={<KeyboardBackspaceOutlinedIcon />} size="large" variant="outlined" onClick={() => navigation(-1)}>
                    Return
                </Button>
            </Grid>
            {sentences?.length <= 0
                ? <Grid item container direction="column" justifyContent="center">
                    <Button disabled={loading} size="large" variant="contained" onClick={getSentencesData}>
                        Go
                    </Button>
                </Grid>
                : <Grid item style={{ width: '100%' }}>
                    <Formik 
                        enableReinitialize={true}
                        initialValues={{ data: sentences?.map((it, i) => ({ id: i.toString(),  original: it?.text ?? '', sentences: '' })) as Maybe<SentenceInput[]> }}
                        onSubmit={check}
                    >
                        {({ values, handleSubmit, handleChange }) => (
                            <Form onSubmit={handleSubmit}>
                                <FieldArray name="data">
                                    {() => (
                                        <Grid container direction={'column'} rowSpacing={5}>
                                            {values?.data?.length && values?.data?.length > 0 && values?.data?.map((item, index) => (
                                                <Grid item key={index} style={{ width: '100%' }}>
                                                    <Grid item style={{ width: '100%' }}>
                                                        <Grid style={{ width: '100%' }}>
                                                            <Typography variant="h5">
                                                                {item?.original}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid style={{ width: '100%' }}>
                                                            <TextareaField name={`data.${index}.sentences`} as="textarea"/>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item style={{ width: '100%', opacity: .6 }}>
                                                        <Markdown text={result?.find(it => it?.id === index.toString())?.explain ?? ""} />
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    )}
                                </FieldArray>
                                <Grid item style={{ marginTop: 50, maxWidth: 300 }}>
                                    <Button disabled={checkLoading || loading} fullWidth type="submit" variant="contained">
                                        {result?.length > 0 ? 'Again' : 'Check'}
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            }
        </Grid>
    </Grid>
}

export default Sentences