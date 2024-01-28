import { Box, IconButton,Avatar } from '@mui/material'
import React,{useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarrosselFunction({Imagens}){

    delete Imagens.other

    delete Imagens.versions

    const array_imagens = Object.values(Imagens).filter(valor => valor !== null);

    const[FotoAtual,SetFotoAtual] = useState(array_imagens[2])

    function PassarFoto(Direcao){

        const posicao = array_imagens.indexOf(FotoAtual)

        // console.log(FotoAtual)

        if(Direcao === "menor"){
        
            if(posicao === 0){
                SetFotoAtual(array_imagens[array_imagens.length - 1])
            }else{
                SetFotoAtual(array_imagens[posicao-1])
            }
        
        }else if(Direcao === "maior"){

            if(posicao === (array_imagens.length - 1)){
                SetFotoAtual(array_imagens[0])
            }else{
                SetFotoAtual(array_imagens[posicao+1])
            }

        }

    }

    return(
        <Box
        sx={{
            border: 3,
            borderColor: '#edad72',
            borderRadius: 2,
            boxShadow: 3,
        }}
        justifyContent="center"
        alignContent='center'
        alignSelf='center'
        display='flex'
        m={2}
        p={2}
        >
            <Box
            width="100%"
            height="100%"
            justifyContent="center"
            alignContent='center'
            alignSelf='center'
            display='flex'
            m={2}
            >
                {/*Voltar*/}
                <IconButton onClick={() => PassarFoto("menor")}>
                    <ArrowBackIosNewIcon/>
                </IconButton> 
                <Avatar
                src={FotoAtual}
                sx={{ width: "80%", height: "100%" }}
                /> 
                {/*Seguir*/}
                <IconButton onClick={() => PassarFoto("maior")}>
                    <ArrowForwardIosIcon/>
                </IconButton>                
            </Box>
        </Box>
    )

}