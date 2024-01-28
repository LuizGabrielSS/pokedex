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
            variant={
                window.innerWidth > 420
                ? "h3"
                : "h5"
            }
            sx={{
                color:"#fff"
            }}
            >
                {NomePokemon.toUpperCase()}
            </Typography>
        </Box>
    )

}