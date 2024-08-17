import { FC, PropsWithChildren } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const AuthContainer: FC<PropsWithChildren<{title?: string}>> = ({ children, title }) => {
    return <Box sx={{ flexGrow: 5 }}>
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minWidth: '100%' }}
        >
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Grid 
                container 
                spacing={0}
                rowSpacing={2}
                direction="column"
                style={{ maxWidth: '400px' }}
            >
                {children}
            </Grid>
        </Grid>
    </Box>
}