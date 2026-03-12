import * as React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    AppBar, Toolbar, Button, Typography, ButtonGroup, Box, styled,
    alpha, InputBase, Badge, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import InventoryIcon from '@mui/icons-material/Inventory';
import DiscountIcon from '@mui/icons-material/Discount';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StoreIcon from '@mui/icons-material/Store';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useShop } from '../../context/ShopContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': { width: '20ch' },
        },
    },
}));

const StyledNavLink = styled(NavLink)({
    color: 'gray',
    textDecoration: 'none',
    '&.active': { color: '#ff5722' },
});

const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {
        backgroundColor: '#ff5722',
        color: '#ffffff',
        fontSize: '10px',
        minWidth: '16px',
        height: '16px',
    },
});

const navItems = [
    { label: 'Inicio', to: '/', icon: <HomeFilledIcon /> },
    { label: 'Articulos', to: '/article', icon: <StoreIcon /> },
    { label: 'Ofertas', to: '/offers', icon: <DiscountIcon /> },
    { label: 'Mi cuenta', to: '/myaccount', icon: <AccountBoxIcon /> },
];

export const Header = () => {
    const { compras, favoritos } = useShop();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const totalCompras = compras.reduce((acc, p) => acc + p.cantidad, 0);
    const totalFavoritos = favoritos.length;

    return (
        <Box sx={{ flexGrow: 1, mt: '64px', width: '100%' }}>
            <AppBar position='fixed' sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between', px: { xs: '12px', md: '24px' } }}>

                    <Typography variant='h6' sx={{ color: '#ff5722', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        Old Shop
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '4px' }}>
                        {navItems.map(({ label, to, icon }) => (
                            <Button key={to} variant="text" color='inherit' startIcon={icon} sx={{ fontSize: '12px', minWidth: 'auto', px: '8px' }}>
                                <StyledNavLink to={to}>{label}</StyledNavLink>
                            </Button>
                        ))}

                        <Button variant="text" color='inherit' sx={{ fontSize: '12px', minWidth: 'auto', px: '8px' }}>
                            <StyledBadge badgeContent={totalCompras} max={99}>
                                <InventoryIcon sx={{ mr: '4px', fontSize: '20px' }} />
                            </StyledBadge>
                            <StyledNavLink to='/mybuys'>Mis compras</StyledNavLink>
                        </Button>

                        <Button variant="text" color='inherit' sx={{ fontSize: '12px', minWidth: 'auto', px: '8px' }}>
                            <StyledBadge badgeContent={totalFavoritos} max={99}>
                                <BookmarkIcon sx={{ mr: '4px', fontSize: '20px' }} />
                            </StyledBadge>
                            <StyledNavLink to='/myfavorities'>Mis favoritos</StyledNavLink>
                        </Button>

                        <Search>
                            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: '8px' }}>
                        <StyledBadge badgeContent={totalCompras} max={99}>
                            <InventoryIcon sx={{ color: 'white', fontSize: '22px' }} />
                        </StyledBadge>
                        <StyledBadge badgeContent={totalFavoritos} max={99}>
                            <BookmarkIcon sx={{ color: 'white', fontSize: '22px' }} />
                        </StyledBadge>
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
                PaperProps={{ sx: { background: '#1a0000', width: '240px' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '8px' }}>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <List>
                    {[...navItems,
                        { label: `Mis compras${totalCompras > 0 ? ` (${totalCompras})` : ''}`, to: '/mybuys', icon: <InventoryIcon /> },
                        { label: `Mis favoritos${totalFavoritos > 0 ? ` (${totalFavoritos})` : ''}`, to: '/myfavorities', icon: <BookmarkIcon /> },
                    ].map(({ label, to, icon }) => (
                        <ListItem key={to} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={to}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ color: 'rgba(255,255,255,0.7)', '&.active': { color: '#ff5722' }, gap: '12px' }}
                            >
                                {icon}
                                <ListItemText primary={label} primaryTypographyProps={{ fontFamily: 'Arial', fontSize: '14px' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};