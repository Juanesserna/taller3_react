import { Card, Box, TextField } from '@mui/material';
import React from 'react'
import { useReducer } from 'react';

export const UseReducer = () => {
    const initialScore = [
        {
            id: 1,
            score: 0,
            name: "Juan",
        },
        {
            id: 2,
            score: 0,
            name: "Esteban",
        },
    ];

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREASE":
                return state.map((player) => {
                    if (player.id === action.id) {
                        return { ...player, score: player.score + 1 };
                    } else {
                        return player;
                    }
                });
            default:
                return state;
        }
    };

    const Score = () => {
        const [score, dispatch] = useReducer(reducer, initialScore);

        const handleIncrease = (player) => {
            dispatch({ type: "INCREASE", id: player.id });
        };

        return (
            <>
                {score.map((player) => (
                    <Box key={player.id}>
                        <TextField
                            type="button"
                            onClick={() => handleIncrease(player)}
                            value={player.name}
                        />
                        {player.score}
                    </Box>
                ))}
            </>
        );
    }

    return (
        <Card>
            <Score />
        </Card>
    )
}
