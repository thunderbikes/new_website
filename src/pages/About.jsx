import React from "react"
import {
    Typography,
    Grid,
    Divider,
    Card,
    CardContent
} from "@mui/material"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function About() {
    return (
        <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#e8eaf6' }}>
            <Grid item xs={12} md={10} sx={{ padding: 3, paddingBottom: 0, bgcolor: 'background.paper' }}>
                <Typography variant="h4" align="left" gutterBottom sx={{ color: "#002e5b", fontWeight: 700 }}>
                    About us
                </Typography>
                <Divider color="#002e5b" />
            </Grid>
            <Grid item xs={12} md={5} sx={{ padding: 3, bgcolor: 'background.paper' }}>
                <Card elevation={3} sx={{ borderRadius: 5, height: '27vh' }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <TrendingUpIcon sx={{ fontSize: 30, marginRight: 2 }} />
                            <Typography variant="h5" align="left">
                                Our mission
                            </Typography>
                        </div>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography variant="body1" align="left" gutterBottom>
                            The University of British Columbia ThunderBikes Team is dedicated to designing and racing vehicles in order to demonstrate the performance capability of sustainable transportation while encouraging its use as daily transport.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={5} sx={{ padding: 3, bgcolor: 'background.paper' }}>
                <Card elevation={3} sx={{ borderRadius: 5, height: '27vh' }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <WbIncandescentIcon sx={{ fontSize: 30, marginRight: 2 }} />
                            <Typography variant="h5" align="left">
                            Our vision
                            </Typography>
                        </div>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography variant="body1" align="left" gutterBottom>
                            To encourage people to use bikes as their primary method of transportation.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default About;
