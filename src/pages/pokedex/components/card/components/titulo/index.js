import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TituloFunction({NomePokemon}){

    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
            backgroundColor:'#edad72'
        }}
        >
            <Typography
            variant="h3"
            sx={{
                color:"#fff"
            }}
            >
                {NomePokemon.toUpperCase()}
            </Typography>
        </Box>
    )

}