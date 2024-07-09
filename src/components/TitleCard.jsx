import React from "react"
import {
    Button,
    Paper,
    Typography,
    Box
} from "@mui/material"
import banner from "../images/banner.jpg"

function TitleCard() {
    return (
        <Paper elevation={3} sx={{ height: '100vh', background: `url(${banner})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ padding: 2, bgcolor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ color: '#ffc400', textAlign: 'center' }} variant="h2">
                    UBC Thunderbikes
                </Typography>
                <Typography sx={{ color: '#fff', textAlign: 'center', padding: '10px 0' }} variant="h5">
                    Interested in sustainable transportation, electric vehicles, or racing?
                </Typography>
                <Button variant="contained" sx={{ background: '#002e5b', color: '#fff', margin: '10px', padding: 2, width: 200, textTransform: 'none', fontWeight: 700, fontSize: 16 }} href="https://linktr.ee/ubcthunderbikes">
                    Join us
                </Button>
            </Box>
        </Paper>
    )
}

export default TitleCard;
