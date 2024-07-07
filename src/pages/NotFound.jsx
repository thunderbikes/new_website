import { Paper, Typography } from "@mui/material"
import React from "react"

function NotFound() {
    return (
        <Paper elevation={3} sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#eceff1', flexDirection: 'column' }}>
            <Typography variant="h1" align="center" color="text.secondary">
                404
            </Typography>
            <Typography variant="h3" align="center" color="text.secondary" gutterBottom>
                Page not found
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary">
                The specified file was not found on this website.
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary">
                Please check the URL for mistakes and try again.
            </Typography>
        </Paper>
    )
}

export default NotFound
