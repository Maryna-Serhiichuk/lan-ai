import { FC } from "react";
import Grid from '@mui/material/Grid';
import { useSettingsQuery } from "./../../graphql";
import { SettingButton }from './components/SettingButton'

const Settings: FC = () => {
    const { data } = useSettingsQuery()

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
            style={{ maxWidth: '1200px' }}
        >
            {data?.settings?.data?.map(item => (
                <Grid item xs={3} key={item?.id}>
                    <SettingButton {...item}/>
                </Grid>
            ))}
        </Grid>
    </Grid>
}

export default Settings;