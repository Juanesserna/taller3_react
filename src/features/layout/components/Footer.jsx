import React from 'react'
import { Box, Typography, IconButton, Divider, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const footerLinks = {
    Ayuda: ['Centro de ayuda', 'Devoluciones', 'Envíos', 'Garantía'],
    Empresa: ['Sobre nosotros', 'Blog', 'Trabaja con nosotros', 'Prensa'],
    Legal: ['Privacidad', 'Términos de uso', 'Cookies'],
}

export const Footer = () => {
    return (
        <Box
            component="footer"
            position='fixed'
            sx={{
                width:'100%',
                backgroundColor: '#000000',
                color: '#e0e0e0',
                pt: 6,
                pb: 3,
                px: { xs: 3, md: 8 },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' },
                    gap: 5,
                    mb: 5,
                }}
            >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '0.04em',
                                color: '#fff',
                            }}
                        >
                            Carrito
                        </Typography>
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{ color: '#888', lineHeight: 1.8, maxWidth: 240, mb: 3 }}
                    >
                        Tu tienda de confianza para encontrar todo lo que necesitas con la mejor experiencia de compra.
                    </Typography>
                </Box>

                {Object.entries(footerLinks).map(([section, links]) => (
                    <Box key={section}>
                        <Typography>
                            {section}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                            {links.map((link) => (
                                <Link
                                    key={link}
                                    underline="none"
                                    sx={{
                                        color: '#888',
                                        fontSize: '0.875rem',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#fff' },
                                    }}
                                >
                                    {link}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Divider sx={{ borderColor: '#1e1e1e', mb: 3 }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Typography variant="caption" sx={{ color: '#555' }}>
                    © {new Date().getFullYear()}. Todos los derechos reservados.
                </Typography>
            </Box>
        </Box>
    )
}