import React from "react"
import {
    Button,
    Paper,
    Typography,
    Box
} from "@mui/material"
import ccc from "../images/ccc/CCC_1.jpg"
function TitleCard() {
    return (
        <Paper elevation={3} sx={{ height: '100vh', background: `url(${ccc})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ padding: 2, bgcolor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography sx={{ color: '#ffc400', textAlign: 'center', fontWeight: 700 }} variant="h2">
                    UBC ThunderBikes
                </Typography>
                <Typography sx={{ color: '#fff', textAlign: 'center', padding: '10px 0' }} variant="h5">
                    Interested in sustainable transportation, electric vehicles, or racing?
                </Typography>
                <Button variant="contained" sx={{  color: '#fff', margin: '10px', padding: 2, width: 200, textTransform: 'none', fontWeight: 700, fontSize: 16, borderRadius: 5 }} href="https://linktr.ee/ubcthunderbikes">
                    Join us
                </Button>
            </Box>
        </Paper>
    )
}

export default TitleCard;
