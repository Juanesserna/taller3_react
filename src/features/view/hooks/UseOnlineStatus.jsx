import { Box, Typography, Card } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react'


export const UseOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <Card sx={{ width: '22%' }}>
            <Typography>Use Online Status</Typography>
            <Box>
                <Typography>{isOnline ? '✅ En línea' : '❌ Desconectado'}</Typography>
            </Box>
        </Card>
    );
}