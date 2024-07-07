import {
    Typography,
    Divider,
    Grid
} from "@mui/material"
import React from "react";
import ImageStepper from "../components/ImageStepper";
import { sm24_images, ccc_images } from "../StepperImageList";

function Images() {
    return (
        <Grid container spacing={2} sx={{ borderRadius: 0, padding: 3, bgcolor: '#eceff1', marginTop: '10vh' }} justifyContent={'center'}>
            <Grid item xs={12} md={10}>
                <Typography variant="h4" align="left" gutterBottom>
                    Image gallery
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageStepper images={sm24_images} />
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageStepper images={ccc_images} />
            </Grid>
        </Grid>
    )
}

export default Images
