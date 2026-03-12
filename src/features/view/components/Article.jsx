import React from 'react'
import { Box, CardActions, Card, CardContent, CardMedia, Button, Typography, styled } from '@mui/material'
import { useShop } from '../../context/ShopContext'

const ButtonP = styled(Button)({
    color: 'white',
    backgroundColor: '#0000008a',
    fontSize: '12px',
    '&:hover': {
        color: 'black',
        backgroundColor: '#ae3a00',
    },
});

const CardContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: 'auto',
    margin: '2%',
    marginLeft:'5%',
    maxWidth: '90%',
    width: '95%',
    gap: 10,
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '50% 50%',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '100%',
    },
}));

const CardActionsM = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-evenly',
});

const productos = [
    { id: 1, nombre: 'Abbey Road', artista: 'The Beatles', precio: 85000, imagen: '/img/producto1.jpg' },
    { id: 2, nombre: 'EverMind', artista: 'Nirvana', precio: 95000, imagen: '/img/producto2.jpg' },
    { id: 3, nombre: 'Slippert When Wet', artista: 'Bon Jovi', precio: 75000, imagen: '/img/producto3.jpg' },
    { id: 4, nombre: 'Blond', artista: 'Frank Ocean', precio: 75000, imagen: '/img/producto4.jpg' },
];

const ProductoCard = ({ producto }) => {
    const { agregarCompra, agregarFavorito } = useShop();

    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: '#2c0101' }}>
            <CardMedia component="img" height="200" image={producto.imagen} alt={producto.nombre} />
            <CardContent>
                <Typography variant="h5" sx={{ color: 'white' }}>{producto.nombre}</Typography>
                <Typography variant="body2" sx={{ color: '#aaa' }}>{producto.artista}</Typography>
                <Typography sx={{ color: 'white', mt: 1 }}>${producto.precio.toLocaleString('es-CO')}</Typography>
            </CardContent>
            <CardActionsM>
                <ButtonP onClick={() => agregarCompra(producto)}>Comprar</ButtonP>
                <ButtonP onClick={() => agregarFavorito(producto)}>Favorito</ButtonP>
            </CardActionsM>
        </Card>
    );
};

export const Article = () => {
    return (
        <Box sx={{ textAlign: 'center', backgroundColor: '#000000ad',paddingBottom:'1%'}}>
            <Typography variant='h4' sx={{ backgroundColor: '#00000051', marginLeft: '2%', marginRight: '2%' }}>Productos</Typography>
            <CardContainer>
                {productos.map((producto) => (
                    <ProductoCard key={producto.id} producto={producto} />
                ))}
            </CardContainer>
        </Box>
    );
};