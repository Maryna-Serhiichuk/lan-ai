import { FC } from "react";
import Grid from '@mui/material/Grid';
import { VerbsTable } from "./components/Verbs.table";
import { VerbsButton } from "./components/Verbs.button";

const Verbs: FC = () => {
    return <Grid container direction="row" justifyContent="center" style={{ minWidth: '100%', paddingTop: 170 }}>
        <Grid container direction={'column'} rowSpacing={5} style={{ maxWidth: 1000 }}>
            <VerbsButton />
            <VerbsTable />
        </Grid>
    </Grid>
}

export default Verbs