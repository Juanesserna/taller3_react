import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Card } from '@mui/material'

export const UseEffect = () => {
    const [count, setCount] = useState(() => {
        const valorGuardado = localStorage.getItem('contador')
        return valorGuardado !== null ? Number(valorGuardado) : 0
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        localStorage.setItem('contador', count)
    })

    return (
        <Card sx={{ width: '22%' }}>
            <Typography>Hook UseEffect</Typography>
            <Box>
                <Typography>Esta pagina se ha renderizado: {count} veces</Typography>
            </Box>
        </Card>
    )
}

