import React from 'react'
import { Card, TextField, Typography } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

export const UseRef = () => {
    const App = () => {
        const [inputValue, setInputValue] = useState("");
        const previousInputValue = useRef("");

        useEffect(() => {
            previousInputValue.current = inputValue;
        }, [inputValue]);

        return (
            <Card>
                <TextField
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Typography>Pais actual: {inputValue}</Typography>
                <Typography>Pais pasado: {previousInputValue.current}</Typography>
            </Card>
        );
    }
    return (
        <App />
    )
}