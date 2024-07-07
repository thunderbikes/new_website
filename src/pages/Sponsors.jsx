import React from "react";
import {
    Paper,
    Typography,
    Divider,
    Grid
} from "@mui/material";
import dff from "../images/sponsors/dff.svg";
import altium from "../images/sponsors/altium.svg";
import solidworks from "../images/sponsors/solidworks.svg";
import ansys from "../images/sponsors/ansys.svg";
import manu from "../images/sponsors/manu.svg";
import bender from "../images/sponsors/bender.svg";
import grin from "../images/sponsors/grin.svg";
import brenco from "../images/sponsors/brenco.svg";
import applsc from "../images/sponsors/ubc-applied-sciences-footer-logo.png";
import ubc from "../images/sponsors/ubc-logo.png";

function Sponsors() {
    return (
        <Paper elevation={0} sx={{ borderRadius: 0, padding: 3, bgcolor: '#eceff1', zIndex: 0 }}>
            <Typography variant="h4" align="left" gutterBottom>
                Our sponsors
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={dff} alt="DFF" style={{ width: 250 }} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={altium} alt="Altium" style={{ width: 250 }} />
                </Grid> 
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={manu} alt="UBC Manufacturing Eng" style={{ width: 400 }} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 4 }}>
                    <img src={grin} alt="Grin" style={{ height: 80, marginRight: '40px' }} />
                    <img src={solidworks} alt="Solidworks" style={{ height: 50, marginRight: '40px' }} />
                    <img src={applsc} alt="UBC Applied Science" style={{ height: 60, marginRight: '40px' }} />
                    <img src={ubc} alt="UBC" style={{ height: 70 }} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 4 }}>
                    <img src={bender} alt="Bender" style={{ height: 60, marginRight: '40px' }} />
                    <img src={brenco} alt="Brenco" style={{ height: 70, marginRight: '40px' }} />
                    <img src={ansys} alt="Ansys" style={{ height: 60 }} />
                </Grid> 
            </Grid>
        </Paper>
    )
}

export default Sponsors;
