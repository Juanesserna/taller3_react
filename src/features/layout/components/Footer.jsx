import React from 'react'
import { Box, Typography, IconButton, Divider, Link, styled } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const footerLinks = {
    Ayuda: ['Centro de ayuda', 'Devolución', 'Envíos', 'Garantía'],
    Empresa: ['Sobre nosotros', 'Blog', 'Prensa'],
    Legal: ['Privacidad', 'Términos de uso', 'Cookies'],
}
const ContainerF = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '40% 20% 20% 20%',
    margin: '2%',
    paddingTop: '1%',
}))

const IconB = styled(IconButton)(({ theme }) => ({
    color: '#888',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    p: '6px',
    '&:hover': {
        color: '#ff5722',
        borderColor: '#ff5722',
        backgroundColor: 'rgba(255,87,34,0.08)'
    },
}))

const TypographyF = styled(Typography)(({ theme }) => ({
    color: '#ff5722',
    fontWeight: 700,
    letterSpacing: '0.12em',
    fontSize: '0.8rem',
    marginBottom: '1%'
}))

const Copyrights = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '1%'
}))


export const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: 'black', width: '100%', boxSizing: 'border-box' }}>
            <ContainerF>
                <Box sx={{ marginLeft: '5%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
                        <ShoppingCartIcon sx={{ color: '#ff5722', fontSize: 28 }} />
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                            Carrito
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#888', maxWidth: 240, mb: 3 }}>
                        Tu tienda de confianza para encontrar todo lo que necesitas.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <InstagramIcon />
                        <TwitterIcon />
                    </Box>
                </Box>

                {Object.entries(footerLinks).map(([section, links]) => (
                    <Box key={section}>
                        <TypographyF variant="overline">
                            {section}
                        </TypographyF>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                            {links.map((link) => (
                                <Link key={link} underline="none" sx={{ color: '#888', fontSize: '0.875rem', '&:hover': { color: '#fff' }, }}>
                                    {link}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                ))}
            </ContainerF>

            <Divider sx={{ borderColor: '#1e1e1e', marginBottom: '0.5%' }} />

            <Copyrights>
                <Typography variant="caption" sx={{ color: '#555' }}>
                    © 2026 Carrito de Compras. Todos los derechos reservados.
                </Typography>
            </Copyrights>
        </Box>
    )
}