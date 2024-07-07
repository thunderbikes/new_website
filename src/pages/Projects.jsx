import React from "react"
import {
    Card,
    Paper,
    Typography,
    Grid,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Collapse,
    Divider,
    Chip
} from "@mui/material"
import sm24 from "../images/sm-24.png"
import ccc from "../images/ccc.png"
import lmk4 from "../images/lmk4.png"
import ts1 from "../images/ts-1.png"
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const cards = [
    {
        title: 'Super Motorsport-24',
        image: sm24,
        description: 'SM24 is our first ever electric racing motorcycle build. Our goal is to race at the AHRMA Formula Lightning Race at New Jersey Motorsports Park in Summer 2024. This motorcycle is designed for speed and maximum performance.',
        objectives: [
            'Battery design',
            'Cooling of electronics',
            'Drivetrain setup',
            'Aerodynamics optimization',
            'Collection and analysis of race data',
            'Chassis improvements'
        ],
        isCurrent: true
    },
    {
        title: 'Campus Commuter Challenge (CCC)',
        image: ccc,
        description: 'The scope of the Campus Commuter Challenge is to create a custom e-bike for UBC President Santa J. Ono. This build involves not only designing for great performance, but also comfort and aesthetics.',
        objectives: [
            'Creating a model of the bike in CAD and designing the paint job',
            'Purchasing and installing a battery, building/purchasing a battery case',
            'Purchasing and installing a motor and controller',
            'Stripping and getting the frame painted'
        ],
        isCurrent: true
    },
    {
        title: 'LMK4',
        image: lmk4,
        description: 'The LMK4 project was the continuation of our first ever build: The MK3 Race Bike. Using a powerful hub motor with a rugged box frame, which houses the battery internally, it\'s predecessor was a capable bike that was competitive at the 2019 Lost Sierra Festival.',
        objectives: [
            'Battery design',
            'Suspension upgrades and setup',
            'Drivetrain optimization',
            'Motor power maximization',
            'Custom brake caliper mount design',
            'Carbon fibre side panels'
        ],
        isCurrent: false
    },
    {
        title: 'Thunder Sky 1',
        image: ts1,
        description: 'The Thunder Sky 1 was an electric mountain bike we built to compete in the Lost Sierra Festival in July 2020. With this project, the team planned to compete in a new category (the pedal-assist class). It was designed from scratch, with the team specifying components that optimize performance and integrating systems for compatibility. With this particular build, we aimed to explore the mid-drive motor set-up, which we compared to a benchmark set by our previous build.',
        objectives: [
            'Designing and building of a custom lithium-ion battery',
            'Create a full 3D model of bike using SolidWorks',
            'Designing and implementing data acquisition system to measure bike performance'
        ],
        isCurrent: false
    }
]

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Projects() {
    const [expanded, setExpanded] = React.useState([
        false,
        false,
        false,
        false
    ]);

    const handleExpandClick = (index) => {
        let temp = [...expanded];
        temp[index] = !temp[index];
        setExpanded(temp);
    };

    return (
        <Paper elevation={0} sx={{ borderRadius: 0, padding: 3, bgcolor: '#eceff1' }}>
            <Typography variant="h4" align="left" gutterBottom>
                Our projects
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item xs={12} md={6}>
                        <Card elevation={3} sx={{ height: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="330"
                                image={card.image}
                                alt={card.title}
                            />
                            <CardContent sx={{ height: { xs: 'auto', md: 200 } }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                {card.isCurrent ? (
                                    <Chip label="Current" sx={{ bgcolor: 'navy', color: 'white', padding: 2 }} />
                                ) : (
                                    <Chip label="Past" sx={{ bgcolor: '#ffc400', color: 'black', padding: 2 }} />
                                )}
                                <ExpandMore
                                    expand={expanded[index]}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expanded[index]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="h6">Objectives</Typography>
                                    <Typography variant="body1" sx={{ padding: 2 }} color="text.secondary">
                                        <ul style={{ padding: 0, margin: 0 }}>
                                            {card.objectives.map((objective) => (
                                                <li>{objective}</li>
                                            ))}
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}

export default Projects;
