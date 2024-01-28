import React from 'react'
import ContainerFunction from '../../components/container'
import {Box, Typography} from '@mui/material'

export default function HomeScreen(){

    const ColorsType = ['#ff0000','#fff']

    return(
        <ContainerFunction>
            <Box
            m={2}
            sx={{
                border: 1,
                borderColor: 'error.main',
                borderRadius:10,
                background: `linear-gradient(${ColorsType[0]} 0%,color-mix(in srgb ,${ColorsType[0]},${ColorsType[1]}) 50%,${ColorsType[1]} 50%,${ColorsType[1]} 100%)`
            }}
            py={5}
            >
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                py={5}
                >
                    <Typography 
                    variant="h3"
                    >Olá, seja bem-vindo(a)</Typography>
                </Box>
                <Box
                py={5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <Typography
                    variant="h5"
                    paragraph={true}
                    >
                        Muito obrigado por vir ate esta pagina<br/>
                        Sua visita ajuda muito
                    </Typography>
                </Box>
            </Box>
        </ContainerFunction>
    )

}