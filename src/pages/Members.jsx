import React from "react";
import {
    Grid,
    Typography,
    Divider,
    Box,
    Avatar,
    Button
} from "@mui/material";
import { captainImage, memberImages } from "../ImageImports";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const members = [
    {
        name: "Aaran Poon",
        role: "member",
        image: memberImages.aaran,
        linkedin: ""
    },
    {
        name: "Anshu Shibu",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Anshul Israni",
        role: "member",
        image: memberImages.anshul,
        linkedin: "https://www.linkedin.com/in/anshul-israni-24004b204/"
    },
    {
        name: "Bar Nyhof",
        role: "member",
        image: memberImages.bar,
        linkedin: ""
    },
    {
        name: "Colson Kroeker",
        role: "member",
        image: memberImages.colson,
        linkedin: "https://www.linkedin.com/in/colson-kroeker/"
    },
    {
        name: "Connor Block",
        role: "member",
        image: memberImages.connor_block,
        linkedin: ""
    },
    {
        name: "Connor Bosenberg",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Connor Floyd",
        role: "member",
        image: memberImages.connor_floyd,
        linkedin: ""
    },
    {
        name: "Dae Yong Shin",
        role: "member",
        image: memberImages.daen,
        linkedin: ""
    },
    {
        name: "Deev Shah",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Deepak Shah",
        role: "member",
        image: memberImages.deepak,
        linkedin: ""
    },
    {
        name: "Eli Rodrigues",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Elian Chassard",
        role: "member",
        image: memberImages.elian,
        linkedin: ""
    },
    {
        name: "Elijah Stewart",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Emilio Castillo",
        role: "member",
        image: memberImages.emilio,
        linkedin: ""
    },
    {
        name: "Ethan Smith",
        role: "member",
        image: memberImages.ethan,
        linkedin: ""
    },
    {
        name: "Henry Hui",
        role: "member",
        image: memberImages.henry_hui,
        linkedin: ""
    },
    {
        name: "Henry Wong",
        role: "member",
        image: memberImages.henry_wong,
        linkedin: ""
    },
    {
        name: "Idara Nkono",
        role: "member",
        image: memberImages.idara,
        linkedin: ""
    },
    {
        name: "Kimathra Reddy",
        role: "member",
        image: memberImages.kimathra,
        linkedin: "https://www.linkedin.com/in/kimathra-reddy"
    },
    {
        name: "Lynn Kelly",
        role: "member",
        image: memberImages.lynn,
        linkedin: ""
    },
    {
        name: "Lyra Fletcher",
        role: "member",
        image: memberImages.lyra,
        linkedin: ""
    },
    {
        name: "Marcelo Gorrini",
        role: "member",
        image: memberImages.marcelo,
        linkedin: ""
    },
    {
        name: "Matthew Hill-Turner",
        role: "member",
        image: memberImages.matthew,
        linkedin: ""
    },
    {
        name: "Nathan Yang",
        role: "member",
        image: memberImages.nathan,
        linkedin: ""
    },
    {
        name: "Niharika Vij",
        role: "member",
        image: memberImages.niharika,
        linkedin: "https://www.linkedin.com/in/niharika-vij-34450b52"
    },
    {
        name: "Oliver Kis",
        role: "member",
        image: memberImages.oliver,
        linkedin: "http://linkedin.com/in/oliver-kis"
    },
    {
        name: "Omar Khan",
        role: "member",
        image: memberImages.omar,
        linkedin: ""
    },
    {
        name: "Peter Woolsey",
        role: "member",
        image: memberImages.peter,
        linkedin: "https://www.linkedin.com/in/peter-woolsey-a0b81a233/"
    },
    {
        name: "Quinn Senych",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: "https://www.linkedin.com/in/quinn-senych-5111a2293/"
    },
    {
        name: "Raymond Chen",
        role: "member",
        image: memberImages.raymond_chen,
        linkedin: "https://www.linkedin.com/in/raymondchen4/"
    },
    {
        name: "Raymond Shen",
        role: "member",
        image: memberImages.raymond_shen,
        linkedin: "https://www.linkedin.com/in/rayleishen/"
    },
    {
        name: "Rexton Winarya",
        role: "member",
        image: memberImages.rexton,
        linkedin: ""
    },
    {
        name: "Robert Solomon",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Senal Wickramasinghe",
        role: "member",
        image: memberImages.senal,
        linkedin: ""
    },
    {
        name: "Shawn Du",
        role: "member",
        image: memberImages.shawn,
        linkedin: ""
    },
    {
        name: "Seiya Nozawa-Temchenko",
        role: "member",
        image: memberImages.defaultpic,
        linkedin: ""
    },
    {
        name: "Thomas Wood",
        role: "member",
        image: memberImages.thomas,
        linkedin: "https://www.linkedin.com/in/thomaswoodcpen"
    },
    {
        name: "Tristan Brett",
        role: "member",
        image: memberImages.tristan,
        linkedin: ""
    },
    {
        name: "Zaid Khalidi",
        role: "member",
        image: memberImages.zaid,
        linkedin: ""
    }
]

function Members() {
    return (
        <Grid container sx={{ borderRadius: 0, padding: 3, bgcolor: '#eceff1', marginTop: '10vh' }} justifyContent={'center'}>
            <Grid item xs={12} md={10}>
                <Typography variant="h4" align="left" gutterBottom sx={{ color: "#002e5b", fontWeight: 700 }}>
                    Meet our team
                </Typography>
                <Divider sx={{ marginBottom: 2 }} color="#002e5b" />
            </Grid>
            <Grid item xs={12} md={10}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Captain
                    </Typography>
                    <Avatar src={captainImage} alt="Ananya Swaminathan" sx={{ width: 150, height: 150, margin: 2 }} />
                    <Button 
                        aria-label="linkedin" 
                        startIcon={<LinkedInIcon />}
                        sx={{ textTransform: 'none', color: 'text.primary' }}
                        href="https://www.linkedin.com/in/ananya-swaminathan-9871251b5/"
                    >
                        Ananya Swaminathan
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Team members
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {members.map((member) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 2 }} key={member.name}>
                            <Avatar src={member.image} alt={member.name} sx={{ width: 120, height: 120, margin: 2 }} />
                            <Button 
                                aria-label="linkedin" 
                                startIcon={<LinkedInIcon />}
                                sx={{ textTransform: 'none', color: 'text.primary' }}
                                href={member.linkedin}
                            >
                                {member.name} 
                            </Button>
                        </Box>
                    ))}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Members;
