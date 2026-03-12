import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [compras, setCompras] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const agregarCompra = (producto) => {
        setCompras((prev) => {
            const existe = prev.find((p) => p.id === producto.id);
            if (existe) return prev.map((p) => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p);
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const agregarFavorito = (producto) => {
        setFavoritos((prev) => {
            const existe = prev.find((p) => p.id === producto.id);
            if (existe) return prev;
            return [...prev, producto];
        });
    };

    const eliminarCompra = (id) => setCompras((prev) => prev.filter((p) => p.id !== id));
    const eliminarFavorito = (id) => setFavoritos((prev) => prev.filter((p) => p.id !== id));

    return (
        <ShopContext.Provider value={{ compras, favoritos, agregarCompra, agregarFavorito, eliminarCompra, eliminarFavorito }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);