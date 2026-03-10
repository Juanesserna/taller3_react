import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
// MUI
import { AppBar, Toolbar, Button, Typography, ButtonGroup, IconButton, Box, styled, alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import InventoryIcon from '@mui/icons-material/Inventory';
import DiscountIcon from '@mui/icons-material/Discount';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StoreIcon from '@mui/icons-material/Store';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { createTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledNavLink = styled(NavLink)({
    color: 'gray',
    textDecoration: 'none',
    borderBottom: 'none'
});


export const Header = () => {
    return (
        <Box sx={{
            flexGrow: 1, mt: '64px', width: '100%'
        }}>
            <AppBar position='fixed' sx={{
                backgroundColor: 'black',
            }} >
                <Toolbar sx={{ justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant='h4'>Venta de Vinilos</Typography>
                    </Box>
                    <ButtonGroup>
                        <Button variant="text" color='inherit' startIcon={<HomeFilledIcon />}><StyledNavLink to='/'>Inicio</StyledNavLink></Button>
                        <Button variant="text" color='inherit' startIcon={<StoreIcon />}> <StyledNavLink to='/article'>Articulos</StyledNavLink></Button>
                        <Button variant="text" color='inherit' startIcon={<DiscountIcon />}> <StyledNavLink to='/offers'>Ofertas</StyledNavLink></Button>
                        <Button variant="text" color='inherit' startIcon={<AccountBoxIcon />}> <StyledNavLink to='/myaccount'>Mi cuenta</StyledNavLink></Button>
                        <Button variant="text" color='inherit' startIcon={<InventoryIcon />}> <StyledNavLink to='/mybuys'>Mis compras</StyledNavLink></Button>
                        <Button variant="text" color='inherit' startIcon={<BookmarkIcon />}> <StyledNavLink to='/myfavorities'>Mis favoritos</StyledNavLink></Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
