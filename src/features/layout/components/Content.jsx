import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Box, Card, CardContent, CardMedia, CardActionArea, Accordion, AccordionSummary, AccordionDetails, styled } from '@mui/material';

const TypographyB = styled(Typography)({
    color: 'beige'
})

const TypographyT = styled(Typography)({
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '5px'
})

const Cards = styled(Card)(({ theme }) => ({
    backgroundColor: 'black',
    width: '100%',
}))

const CollectionGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    textAlign: 'left',
    marginTop: '0.5%',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}))

const AccordionM = styled(Accordion)({
    backgroundColor: 'rgba(7, 7, 7, 0.9)',
    color: 'beige',
    '&:hover': {
        color: 'black',
        backgroundColor: '#ff5722'
    },
})

export const Content = () => {
    return (
        <Box>
            <Card sx={{ maxWidth: '100%', margin: '1%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ height: { xs: '140px', sm: '200px', md: '260px' } }}
                        image='public\img\inicio.jpg'
                        alt="Imagen de inicio"
                    />
                    <CardContent sx={{ backgroundColor: 'black' }}>
                        <TypographyT variant="h4" sx={{ fontSize: { xs: '20px', sm: '28px', md: '34px' } }}>
                            Tu tienda de vinilos online
                        </TypographyT>
                        <TypographyB variant="body2" sx={{ fontSize: { xs: '12px', sm: '14px' }, mt: '8px' }}>
                            Somos apasionados del sonido analógico. Nuestra tienda ofrece una cuidada selección de vinilos de todos los géneros y épocas, desde clásicos atemporales hasta los lanzamientos más recientes. Compra desde cualquier lugar, recibe en tu casa y disfruta del ritual de escuchar música como se merece.
                        </TypographyB>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Box sx={{ textAlign: 'center', margin: '1%', marginTop: '2%' }}>
                <TypographyT variant='h4' sx={{ fontSize: { xs: '20px', sm: '28px', md: '34px' } }}>
                    Nuestra colección
                </TypographyT>
                <CollectionGrid>
                    <Cards>
                        <CardActionArea>
                            <CardMedia component="img" sx={{ height: { xs: '140px', sm: '180px' } }} image="public\img\vinilo1.jpg" alt="Vinilos nuevos" />
                            <CardContent>
                                <TypographyT gutterBottom variant="h5" sx={{ fontSize: { xs: '16px', sm: '20px' } }}>
                                    Vinilos nuevos
                                </TypographyT>
                                <TypographyB variant="body2">
                                    Los últimos lanzamientos y reediciones recién llegadas al stock. Discos sin abrir, con su plástico original y en perfecto estado de reproducción.
                                </TypographyB>
                            </CardContent>
                        </CardActionArea>
                    </Cards>

                    <Cards>
                        <CardActionArea>
                            <CardMedia component="img" sx={{ height: { xs: '140px', sm: '180px' } }} image='public\img\vinilos_usados.jpg' alt="Vinilos usados" />
                            <CardContent>
                                <TypographyT gutterBottom variant="h5" sx={{ fontSize: { xs: '16px', sm: '20px' } }}>
                                    Segunda mano
                                </TypographyT>
                                <TypographyB variant="body2">
                                    Vinilos usados revisados y clasificados por condición: Mint, Very Good Plus y Good. Cada disco llega con una descripción honesta de su estado visual y sonoro.
                                </TypographyB>
                            </CardContent>
                        </CardActionArea>
                    </Cards>

                    <Cards>
                        <CardActionArea>
                            <CardMedia component="img" sx={{ height: { xs: '140px', sm: '180px' } }} image='public\img\vinilo_especial.jpg' alt="Ediciones especiales" />
                            <CardContent>
                                <TypographyT gutterBottom variant="h5" sx={{ fontSize: { xs: '16px', sm: '20px' } }}>
                                    Ediciones especiales
                                </TypographyT>
                                <TypographyB variant="body2">
                                    Prensados de color, picture discs, box sets y ediciones numeradas de colección. Piezas únicas para el coleccionista más exigente.
                                </TypographyB>
                            </CardContent>
                        </CardActionArea>
                    </Cards>

                    <Cards>
                        <CardActionArea>
                            <CardMedia component="img" sx={{ height: { xs: '140px', sm: '180px' } }} image='public\img\accesorios.jpg' alt="Accesorios" />
                            <CardContent>
                                <TypographyT gutterBottom variant="h5" sx={{ fontSize: { xs: '16px', sm: '20px' } }}>
                                    Accesorios
                                </TypographyT>
                                <TypographyB variant="body2">
                                    Fundas protectoras, limpiadoras de discos, agujas, tocadiscos y todo lo que necesitas para cuidar y disfrutar tu colección al máximo.
                                </TypographyB>
                            </CardContent>
                        </CardActionArea>
                    </Cards>
                </CollectionGrid>
            </Box>

            <Box sx={{ margin: '1%', marginTop: '2%' }}>
                <TypographyT variant='h4' sx={{ paddingLeft: '1.5%', marginBottom: '0.3%', fontSize: { xs: '20px', sm: '28px', md: '34px' } }}>
                    Beneficios
                </TypographyT>

                <AccordionM defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">Github</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>https://github.com/Juanesserna/taller3_react</Typography>
                    </AccordionDetails>
                </AccordionM>

                <AccordionM>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">Arte y colección en tus manos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Cada vinilo es mucho más que música: es un objeto de colección. Las portadas de gran formato, los libretos interiores
                            y las ediciones limitadas convierten cada disco en una pieza de arte. Construye una colección que refleje tu personalidad
                            y que puedas exhibir con orgullo.
                        </Typography>
                    </AccordionDetails>
                </AccordionM>

                <AccordionM>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                        <Typography component="span">Envío seguro y empaque especializado</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sabemos lo valioso que es tu pedido. Por eso, cada vinilo se empaca con materiales de protección especializados
                            que garantizan que llegue en perfecto estado a tu puerta. Enviamos a todo el país con seguimiento en tiempo real
                            para que no pierdas de vista tu nuevo tesoro musical.
                        </Typography>
                    </AccordionDetails>
                </AccordionM>

                <AccordionM>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
                        <Typography component="span">Devoluciones sin complicaciones</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tu satisfacción es nuestra prioridad. Si por alguna razón tu vinilo llega con algún defecto de fábrica o daño en el
                            envío, gestionamos la devolución o el cambio sin preguntas en un plazo de 30 días. Compra con total tranquilidad
                            y confianza.
                        </Typography>
                    </AccordionDetails>
                </AccordionM>
            </Box>
        </Box>
    )
}