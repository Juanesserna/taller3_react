import React from 'react'
import { Box, CardActions, Card, CardContent, CardMedia, Button, Typography, styled } from '@mui/material'
import vinilo1 from '../pages/vinilo1.jpg'

const ButtonP = styled(Button)({
    color: 'white',
    '&:hover': { color: '#ae0000' },

});

export const Article = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            gap: 2,
        }}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                <CardMedia
                    component="img"
                    alt="Producto 1"
                    height="200"
                    image={vinilo1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }} >
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography >
                    <Typography sx={{ color: 'white' }}>
                        Precio: $100.000
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonP>Comprar</ButtonP>
                    <ButtonP>Favorito</ButtonP>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                <CardMedia
                    component="img"
                    alt="Producto 1"
                    height="200"
                    image={vinilo1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }} >
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography >
                    <Typography sx={{ color: 'white' }}>
                        Precio: $100.000
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonP>Comprar</ButtonP>
                    <ButtonP>Favorito</ButtonP>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                <CardMedia
                    component="img"
                    alt="Producto 1"
                    height="200"
                    image={vinilo1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }} >
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography >
                    <Typography sx={{ color: 'white' }}>
                        Precio: $100.000
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonP>Comprar</ButtonP>
                    <ButtonP>Favorito</ButtonP>
                </CardActions>
            </Card>
        </Box>
    )
}
