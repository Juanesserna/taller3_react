import { React, useState } from 'react'
import { UseOnlineStatus } from '../hooks/UseOnlineStatus'
import { UseState } from '../hooks/UseState'
import { UseEffect } from '../hooks/UseEffect'
import { UseContext } from '../hooks/UseContext'
import { UseRef } from '../hooks/UseRef'
import { UseReducer } from '../hooks/UseReducer'
import { UseCallback } from '../hooks/UseCallback'
import { UseMemo } from '../hooks/UseMemo'
import { Box } from '@mui/material'

export const Offers = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <UseOnlineStatus />
            <UseState />
            <UseEffect />
            <UseContext />
            <UseRef />
            <UseReducer />
            <UseCallback />
            <UseMemo />
        </Box>
    )
}
