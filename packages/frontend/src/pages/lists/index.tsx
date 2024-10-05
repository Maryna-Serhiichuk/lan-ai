import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid';
import { useListsQuery } from "./../../graphql";
import { ListButton } from "./components/ListButton";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useWordsPoint } from "pages/list/hooks/useWordsPoint";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Lists: FC = () => {
    const [showClosed, setShowClosed] = useState(false)
    const navigation = useNavigate()
    const { data, error } = useListsQuery({ variables: { filters: { 
        or: showClosed ? [] : [
            { closed: { in: [false] } },
            { closed: { null: true } }
        ]
    } } })

    const { saveWordsPoint } = useWordsPoint()

    useEffect(() => {
        saveWordsPoint()
    }, [])

    if(error?.message === 'Settings identifier is missing') {
        navigation('/settings')
    }

    return <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minWidth: '100%', paddingTop: 100 }}
    >
        <FormControlLabel 
            control={<Switch checked={showClosed} onChange={e => setShowClosed(e?.target?.checked)}/>} 
            label="Show Closed"
         />
        <Grid
            container 
            spacing={0}
            rowSpacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ maxWidth: '1200px' }}
        >
            {data?.lists?.data?.map(item => (
                <Grid item xs={3} key={item?.id}>
                    <ListButton {...item}/>
                </Grid>
            ))}
            <Grid item xs={3}>
                <Link to={'/create-list'}>
                    <Button variant="outlined" style={{ height: '100px', width: '200px', fontSize: 20 }}>
                        Add
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Grid>
}

export default Lists;