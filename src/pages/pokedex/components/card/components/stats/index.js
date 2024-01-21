import { Box, Typography,Tooltip } from '@mui/material'
import React from 'react'
import StraightenIcon from '@mui/icons-material/Straighten';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BoltIcon from '@mui/icons-material/Bolt';

function StatsComponent({IconePrimeiro,IconeSegundo,InfoPrimeiro,InfoSegundo,DescricaoPrimeiro,DescricaoSegundo,Inverso}){

    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        bgcolor={
            Inverso 
            ? '#fff'
            : '#edad72'
        }
        >
            <Tooltip arrow placement="top" title={DescricaoPrimeiro}>
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            m={1}
            >
                
                <IconePrimeiro
                sx={{
                    color:
                    Inverso 
                    ? '#edad72'
                    : '#fff'
                }}
                />
                
                    <Typography
                        variant="h6"
                        sx={{
                            color:
                            Inverso 
                            ? '#edad72'
                            : '#fff'
                        }}
                        >
                        :{InfoPrimeiro}
                    </Typography>
            </Box>
            </Tooltip>
            <Tooltip arrow placement="top" title={DescricaoSegundo}>
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            m={1}
            
            >
                <IconeSegundo
                sx={{
                    color:
                    Inverso 
                    ? '#edad72'
                    : '#fff'
                }}
                />
                
                    <Typography
                        variant="h6"
                        sx={{
                            color:
                            Inverso 
                            ? '#edad72'
                            : '#fff'
                        }}
                        >
                        :{InfoSegundo}
                    </Typography>
            </Box>
            </Tooltip>
        </Box>
    )

}

export default function StatsFunction({Altura,Peso,Forca,Vida,Defesa,Attack_Especial,Desefa_Especial,Velocidade}){

    return(
        <Box>
            <StatsComponent
            IconePrimeiro={StraightenIcon}
            IconeSegundo={BalanceIcon}
            InfoPrimeiro={`${(Altura*0.1).toFixed(2)}m`}
            InfoSegundo={`${(Peso*0.1).toFixed(2)}kg`}
            DescricaoPrimeiro="Altura"
            DescricaoSegundo="Peso"
            Inverso={true}
            />
            <StatsComponent
            IconePrimeiro={FavoriteBorderIcon}
            IconeSegundo={SpeedIcon}
            InfoPrimeiro={Vida}
            InfoSegundo={Velocidade}
            DescricaoPrimeiro="Vida"
            DescricaoSegundo="Velocidade"
            Inverso={false}
            />
            <StatsComponent
            IconePrimeiro={FitnessCenterIcon}
            IconeSegundo={ShieldIcon}
            InfoPrimeiro={Forca}
            InfoSegundo={Defesa}
            DescricaoPrimeiro="Ataque"
            DescricaoSegundo="Defesa"
            Inverso={true}
            />
            <StatsComponent
            IconePrimeiro={BoltIcon}
            IconeSegundo={LocalPoliceIcon}
            InfoPrimeiro={Attack_Especial}
            InfoSegundo={Desefa_Especial}
            DescricaoPrimeiro="Ataque especial"
            DescricaoSegundo="Defesa especial"
            Inverso={false}
            />
        </Box>
    )

}