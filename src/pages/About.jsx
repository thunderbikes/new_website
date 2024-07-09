import React from "react"
import {
    Paper,
    Typography,
    Grid,
    ImageList,
    ImageListItem,
    Divider,
} from "@mui/material"
import bike1 from "../images/bike1.png"
import bike2 from "../images/bike-2.jpeg"
import bike3 from "../images/bike-3.jpeg"

const itemData = [
    {
        img: bike1,
        title: 'bike1'
    },
    {
        img: bike2,
        title: 'bike2'
    },
    {
        img: bike3,
        title: 'bike3'
    }
];

function About() {
    return (
        <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#e8eaf6' }}>
            <Grid item xs={12} md={5} sx={{ padding: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h4" align="left" gutterBottom sx={{ color: "#002e5b", fontWeight: 700 }}>
                    About us
                </Typography>
                <Divider color="#002e5b" />
                <Typography variant="h5" align="left" color="text.secondary" sx={{ marginTop: 2 }} gutterBottom>
                    Our mission
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                    The University of British Columbia ThunderBikes Team is dedicated to designing and racing vehicles in order to demonstrate the performance capability of sustainable transportation while encouraging its use as daily transport.
                </Typography>
                <br/>
                <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
                    Our vision
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                    To encourage people to use bikes as their primary method of transportation.
                </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
                <Paper elevation={3} sx={{ borderRadius: 0, height: '50vh', overflow: 'hidden' }}>
                    <ImageList
                        sx={{ width: 'auto', height: '100%', margin: 0, overflowY: 'scroll' }}
                        rowHeight={'40vh'}
                        cols={1}
                    >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default About;
