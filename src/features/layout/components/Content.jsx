import React from 'react'
import main_img from '../public/inicio.jpg'
import monitor_img from '../public/monitoreo.avif'
import document_img from '../public/documentar.avif'
import stock_img from '../public/conteo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Typography, Box, Card, CardContent, CardMedia, CardActionArea, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';

const cards = [
    {
        id: 1,
        title: 'Envío seguro',
        description: 'Todos nuestros vinilos son empacados con materiales especializados para garantizar que lleguen en perfecto estado a tu puerta.',
    },
    {
        id: 2,
        title: 'Ediciones limitadas',
        description: 'Accede a prensados exclusivos, ediciones de color y lanzamientos limitados que no encontrarás en ningún otro lugar.',
    },
    {
        id: 3,
        title: 'Calidad garantizada',
        description: 'Cada disco pasa por una revisión de calidad antes de ser despachado. Si no estás satisfecho, te lo cambiamos sin preguntas.',
    },
    {
        id: 4,
        title: 'Catálogo diverso',
        description: 'Desde jazz clásico hasta metal progresivo. Tenemos vinilos para todos los gustos y géneros musicales.',
    },
    {
        id: 5,
        title: 'Precios justos',
        description: 'Ofrecemos los mejores precios del mercado en vinilos nuevos y de segunda mano, con descuentos frecuentes para nuestros clientes.',
    },
    {
        id: 6,
        title: 'Comunidad vinilera',
        description: 'Únete a nuestra comunidad de amantes del vinilo. Reseñas, recomendaciones y eventos especiales para coleccionistas.',
    },
];

export const Content = () => {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Box>
            <Card sx={{ maxWidth: '100%', margin: '1%', marginTop: '5%' }}>
                <CardActionArea>
                    <CardMedia component="img" height="200" image={main_img} alt="Imagen de inicio" />
                    <CardContent sx={{ backgroundColor: 'black' }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                            Tu tienda de vinilos online
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'beige' }}>
                            Somos apasionados del sonido analógico. Nuestra tienda ofrece una cuidada selección de vinilos de todos los géneros y épocas, desde clásicos atemporales hasta los lanzamientos más recientes. Compra desde cualquier lugar, recibe en tu casa y disfruta del ritual de escuchar música como se merece.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Box sx={{ textAlign: 'center', margin: '1%', marginTop: '2%' }}>
                <Typography variant='h4' sx={{ backgroundColor: 'black' }}>Nuestra colección</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left', marginTop: '1%' }}>
                    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={monitor_img} alt="Vinilos nuevos" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                    Vinilos nuevos
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'beige' }}>
                                    Los últimos lanzamientos y reediciones recién llegadas al stock. Discos sin abrir, con su plástico original y en perfecto estado de reproducción.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={document_img} alt="Vinilos usados" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                    Segunda mano
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'beige' }}>
                                    Vinilos usados revisados y clasificados por condición: Mint, Very Good Plus y Good. Cada disco llega con una descripción honesta de su estado visual y sonoro.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={stock_img} alt="Ediciones especiales" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                    Ediciones especiales
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'beige' }}>
                                    Prensados de color, picture discs, box sets y ediciones numeradas de colección. Piezas únicas para el coleccionista más exigente.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={stock_img} alt="Accesorios" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                    Accesorios
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'beige' }}>
                                    Fundas protectoras, limpiadoras de discos, agujas, tocadiscos y todo lo que necesitas para cuidar y disfrutar tu colección al máximo.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ margin: '1' }}>
                <Typography variant='h4' sx={{ backgroundColor: 'black' }}>Beneficios</Typography>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Expanded by default</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">Header</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}