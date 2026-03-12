import { Card, CardContent, Typography } from '@mui/material';
import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const UseContext = () => {

    const Component1 = () => {
        const [user] = useState("Linus Torvalds");

        return (
            <UserContext.Provider value={user}>
                <Typography variant="subtitle2" color="text.secondary">
                    Component 1 — Crea el contexto y provee el valor
                </Typography>
                <Typography variant="body1" fontWeight={700}>
                    {`Usuario autenticado: ${user}`}
                </Typography>
                <Component2 />
            </UserContext.Provider>
        );
    };

    const Component2 = () => (
        <>
            <Typography variant="subtitle2" color="text.secondary" mt={1}>
                Component 2 — Solo renderiza hijos (no usa el contexto)
            </Typography>
            <Component3 />
        </>
    );

    const Component3 = () => {
        const user = useContext(UserContext);
        return (
            <>
                <Typography variant="subtitle2" color="text.secondary" mt={1}>
                    Component 3 — Consume el contexto directamente
                </Typography>
                <Typography variant="body1">
                    {`¡Bienvenido de nuevo, ${user}!`}
                </Typography>
            </>
        );
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Hook useContext
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    El valor del contexto fluye de Component1 → Component3
                    sin pasar por Component2 como prop.
                </Typography>
                <Component1 />
            </CardContent>
        </Card>
    );
};