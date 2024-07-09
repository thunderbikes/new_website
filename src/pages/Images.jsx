import {
    Typography,
    Divider,
    Grid
} from "@mui/material"
import React from "react";
import ImageStepper from "../components/ImageStepper";
import { imgList } from "../StepperImageList";

function Images() {
    return (
        <Grid container spacing={2} sx={{ borderRadius: 0, padding: 3, bgcolor: '#e8eaf6', marginTop: '10vh' }} justifyContent={'center'}>
            <Grid item xs={12} md={10}>
                <Typography variant="h4" align="left" gutterBottom sx={{ color: "#002e5b", fontWeight: 700 }}>
                    Image gallery
                </Typography>
                <Divider color="#002e5b" />
            </Grid>
            <Grid item xs={12} md={10} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageStepper images={imgList} />
            </Grid>
        </Grid>
    )
}

export default Images
