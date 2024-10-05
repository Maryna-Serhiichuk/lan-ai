import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Markdown } from 'components/markdown';
import { useGetStoryMutation } from "./../../graphql";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


const Story: FC = () => {
    const { id } = useParams()
    const navigation = useNavigate()
    const [story, setStor] = useState<string>('')
    const [getStory, { loading }] = useGetStoryMutation()

    const getStoryData = async () => {
        if(id) {
            const resultData = await getStory({ variables: { id } })
            setStor(resultData?.data?.getStory?.story as string)
        }
    }

    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 100 }}>
        <Grid container direction={'column'} rowSpacing={5} style={{ maxWidth: 800 }}>
            <Grid item container direction="column" justifyContent="center" style={{ maxWidth: 200 }}>
                <Button startIcon={<KeyboardBackspaceOutlinedIcon />} size="large" variant="outlined" onClick={() => navigation(-1)}>
                    Return
                </Button>
            </Grid>
            
            <Grid item container direction="column" justifyContent="center" style={{ fontSize: 20 }}>
                {story
                    ? <Markdown text={story} />
                    : <Button disabled={loading} size="large" variant="contained" onClick={getStoryData}>
                        Go
                    </Button>
                }
            </Grid>
        </Grid>
    </Grid>
}

export default Story