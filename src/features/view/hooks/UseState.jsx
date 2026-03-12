import { Box, Typography, Button, Card } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const UseState = () => {
    const [contador, setContador] = useState(() => {
        const valorGuardado = localStorage.getItem('contador')
        return valorGuardado !== null ? Number(valorGuardado) : 0;
    })
    const actualizar = (valor) => {
        setContador(valor)
        localStorage.setItem('contador', valor)
    }
    return (
        <Card sx={{ width: '22%' }}>
            <Typography>Hook: UseState</Typography>
            <Box>
                <Typography>Contador de clics: {contador}</Typography>
                <Button onClick={() => actualizar(contador + 1)}>+1</Button>
                <Button onClick={() => actualizar(contador - 1)}>-1</Button>
                <Button onClick={() => actualizar(0)}>Reiniciar</Button>
            </Box>
        </Card>
    )
}