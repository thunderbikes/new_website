import React from "react";
import {
    Paper,
    Typography,
    Box,
    Button
} from "@mui/material";
import team from "../images/team.jpeg";

function Team() {
    return (
        <Paper elevation={3} sx={{ height: '100vh', background: `url(${team})`, backgroundSize: 'cover' }}>
            <Box sx={{ padding: 2, bgcolor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%' }}>
                <Box sx={{ position: 'relative', top: '20vh', display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
                    <Typography sx={{ color: '#ffc400', marginBottom: 2, fontWeight: 700 }} variant="h4">
                        Meet our team
                    </Typography>
                    <Button variant="contained" sx={{ background: '#002e5b', color: '#fff', margin: '10px', padding: 2, width: 200, fontWeight: 700, textTransform: 'none', fontSize: 16 }} href="/new_website/#/members">
                        See all members
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}

export default Team;
