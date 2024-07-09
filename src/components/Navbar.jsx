import * as React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
    Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const drawerWidth = 240;
const navItems = ['About us', 'Our projects', 'Images', 'Meet our team', 'Sponsors', 'Contact us'];
const navMap = {
    'About us': '/#about',
    'Our projects': '/#projects',
    'Images': '/images',
    'Meet our team': '/#team',
    'Sponsors': '/#sponsors',
    'Contact us': '/#contact'
};

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Thunderbikes
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton 
                    sx={{ textAlign: 'center' }} 
                    component={Link} 
                    smooth
                    to={navMap[item]}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: '#002e5b' }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={10}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ color: 'black', mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon size={40} />
                            </IconButton>
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, margin: '15px 0' }} component="img" src={logo} height={60} alt="thunderbike-logo" />
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button 
                                        key={item} 
                                        sx={{ px: 3, textTransform: 'none' }}
                                        component={Link}
                                        smooth
                                        to={navMap[item]}
                                    >
                                        <Typography variant="body1" sx={{ color: '#FFF', fontSize: 16, fontWeight: 700 }}>
                                            {item}
                                        </Typography>
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                        </Grid>
                    </Grid>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Navbar;
