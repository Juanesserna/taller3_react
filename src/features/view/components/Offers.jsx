import { React, useState } from 'react'
import { Use } from '../hooks/Use'
import { UseOnlineStatus } from '../hooks/UseOnlineStatus'

export const Offers = () => {
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>My color favorito es {color}</h1>
            <button type='button' onClick={() => setColor("Blue")}>Blue</button>
            <button type='button' onClick={() => setColor("Black")}>Blue</button>
            <button type='button' onClick={() => setColor("White")}>Blue</button>
            <Use />
            <UseOnlineStatus/>
        </div>
    )
}
