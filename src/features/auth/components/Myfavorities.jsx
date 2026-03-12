import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, styled } from '@mui/material';
import { useShop } from '../../context/ShopContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PageWrapper = styled(Box)({
    minHeight: '100vh',
    backgroundColor: '#000000',
    padding: '32px 24px',
});

const PageTitle = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '26px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '24px',
});

const Grid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}));

const ProductCard = styled(Card)({
    background: '#3d0000',
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: 'none',
});

const ProductName = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffffff',
});

const ProductArtist = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '6px',
});

const ProductPrice = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    color: '#ffffff',
});

const RemoveBtn = styled(Button)({
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 14px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '10px',
    '&:hover': { background: '#222' },
});

const EmptyState = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px',
    gap: '12px',
});

export const MyFavorities = () => {
    const { favoritos, eliminarFavorito } = useShop();

    if (favoritos.length === 0) {
        return (
            <PageWrapper>
                <PageTitle>Mis Favoritos</PageTitle>
                <EmptyState>
                    <Typography sx={{ fontSize: '48px' }}>🔖</Typography>
                    <Typography sx={{ fontFamily: 'Arial', fontSize: '18px', color: 'rgba(255,255,255,0.5)' }}>
                        Aún no tienes favoritos
                    </Typography>
                    <Typography sx={{ fontFamily: 'Arial', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                        Ve a Artículos y presiona "Favorito" en cualquier vinilo
                    </Typography>
                </EmptyState>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <PageTitle>Mis Favoritos</PageTitle>
            <Box sx={{ mb: '24px' }}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                    {favoritos.length} {favoritos.length === 1 ? 'vinilo guardado' : 'vinilos guardados'}
                </Typography>
            </Box>
            <Grid>
                {favoritos.map((producto) => (
                    <ProductCard key={producto.id}>
                        <CardMedia component="img" height="180" image={producto.imagen} alt={producto.nombre} />
                        <CardContent>
                            <ProductName>{producto.nombre}</ProductName>
                            <ProductArtist>{producto.artista}</ProductArtist>
                            <ProductPrice>${producto.precio.toLocaleString('es-CO')}</ProductPrice>
                            <RemoveBtn startIcon={<DeleteOutlineIcon fontSize="small" />} onClick={() => eliminarFavorito(producto.id)}>
                                Eliminar
                            </RemoveBtn>
                        </CardContent>
                    </ProductCard>
                ))}
            </Grid>
        </PageWrapper>
    );
};