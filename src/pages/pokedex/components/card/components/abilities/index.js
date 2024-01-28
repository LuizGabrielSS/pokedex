import { Box,Typography } from '@mui/material'
import React from 'react'


export default function AbilitiesFunction({Habilidades}){

    return(
        <Box>
            <Box
            bgcolor="#fff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={1}
            >
                <Typography
                variant={
                    window.innerWidth > 420
                    ? "h5"
                    :"subtitle1"
                }
                sx={{
                    color:'#edad72'
                }}
                >
                    Habilidades
                </Typography>
            </Box>
            {
                Habilidades.map((item,index)=> (
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={1}
                    key={index}
                    bgcolor={
                        index % 2 !== 0
                        ? '#fff'
                        : '#edad72'
                    }
                    >
                        <Typography
                        variant={
                            window.innerWidth > 420
                            ? "h5"
                            :"subtitle1"
                        }
                        sx={{
                            color:
                            index % 2 !== 0
                            ? '#edad72'
                            : '#fff'
                        }}
                        >
                            {item.ability.name}
                        </Typography>
                    </Box>
                ))  
            }
        </Box>
    )

}