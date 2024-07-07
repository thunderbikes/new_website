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
        <Box>
            <CssBaseline />
            <AppBar component="nav" position="fixed" sx={{ bgcolor: 'background.default' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} height={60} alt="thunderbike-logo" style={{ margin: '15px 0' }} />
                    <Box sx={{ display: 'flex' }}>
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
                    </Box>
                </Toolbar>
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
