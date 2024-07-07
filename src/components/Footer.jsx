import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { 
    Divider,
    Grid,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import logo from '../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const navItems = ['About us', 'Our projects', 'Images', 'Meet our team', 'Sponsors', 'Contact us'];
const navMap = {
    'About us': '/#about',
    'Our projects': '/#projects',
    'Images': '/images',
    'Meet our team': '/#team',
    'Sponsors': '/#sponsors',
    'Contact us': '/#contact'
};

export default function Footer() {
  return (
    <Box>
        <CssBaseline />
        <AppBar sx={{ top: 'auto', bottom: 0, position: 'relative', bgcolor: 'background.default', paddingTop: 3 }} component="nav" position="fixed">
            <Toolbar>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={2}>
                        <img src={logo} height={40} alt="thunderbike-logo" />
                        <Box sx={{ display: 'flex' }}>
                            <IconButton color="black" href='https://www.instagram.com/ubc_thunderbikes/'>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="black" href='https://www.facebook.com/UBCThunderBikes/'>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="black" href='https://www.linkedin.com/company/ubc-thunderbikes/'>
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="black">
                            Contact us
                        </Typography>
                        <hr />
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton>
                                <ListItemIcon>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText primary="2345 E Mall, Vancouver B.C., Canada" sx={{ color: 'black' }} />
                            </ListItemButton>
                            <ListItemButton href="mailto:thunderbikesdesign@gmail.com">
                                <ListItemIcon>
                                    <AlternateEmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="thunderbikesdesign@gmail.com" sx={{ color: 'black' }} />
                            </ListItemButton>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="black">
                            Quick links
                        </Typography>
                        <hr />
                        <List component="nav" aria-label="main mailbox folders">
                            {navItems.map((item) => (
                                <ListItemButton 
                                    key={item} 
                                    sx={{ color: '#000', px: 3, textTransform: 'none', fontSize: 16 }}
                                    component={Link}
                                    smooth
                                    to={navMap[item]}
                                >
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Toolbar>
            <Divider />
            <Typography variant="body2" color="black" align="center" sx={{ padding: 2 }}>
                © 2024 UBC Thunderbikes
            </Typography>
        </AppBar>
    </Box>
  );
}
