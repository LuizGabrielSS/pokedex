//Externas
import { Box, Typography,Skeleton,Avatar, Button } from '@mui/material'
import React,{useEffect,useState} from 'react'

//Internas
import ModalDefault from "../../../../components/modaldefault"
import CarrosselFunction from './components/carrossel'
import TituloFunction from './components/titulo'
import StatsFunction from './components/stats'
import AbilitiesFunction from './components/abilities'
import TypesFunction from '../../../../components/type'

//Requisiçoes
import RequisicaoInicial from './request/inicial'

function CardCarregando(){

    return(
        <Box
        display='flex'
        justifyContent='space-around'
        alignItems="center"
        m={5}
        >
            <Skeleton
            variant="circular"
            width={120} height={120}
            animation="wave"
            />
            <Box>
                <Skeleton variant="text" width={70} height={20}/>
                <Box
                display='flex'
                justifyContent='space-around'
                alignItems="center"
                >
                    <Skeleton variant="text" width={70} height={70}/>
                </Box>
            </Box>
        </Box>
    )

}

function CardCarregado({Name,Foto,Tipagens,SetOpen}){
    
    return(
        <Button
        onClick={() => SetOpen(true)}
        sx={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            active:"color:#ff0000"
        }}
        fullWidth
        m={5}
        >
            <Box
            >
                <Avatar 
                src={Foto}
                alt={Name}
                sx={{ width: 190, height: 190 }}
                />
            </Box>
            <Box
            >
                <Typography 
                sx={{
                    color:"#ff0000"
                }}
                variant="h4">
                    {Name.toUpperCase()}
                </Typography>
                <Box
                display='flex'
                justifyContent='space-between'
                alignItems="center"
                >
                    {
                        Tipagens.map((values) => (
                            
                            <Box 
                            my={5}
                            mx={1}
                            >
                                <TypesFunction
                                Type={values.type.name.toUpperCase()}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Button>
        
    )
}

function PokeModal({SetOpen,Open,DadosPokemon,Loading}){

    return(
        <ModalDefault
        SetOpen={SetOpen}
        Open={Open}
        Titulo="Pokedex"
        >    
        {
            Loading
            ? null
            :   
                <Box>
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="50%"
                    width="100%"
                    >
                        <CarrosselFunction
                        Imagens={DadosPokemon.sprites}
                        />
                        <Box
                        alignItems="center"
                        >
                        <TituloFunction
                        NomePokemon={DadosPokemon.name}
                        />
                        <StatsFunction
                        Altura={DadosPokemon.height}
                        Peso={DadosPokemon.weight}
                        Attack_Especial={DadosPokemon.stats[3].base_stat}
                        Defesa={DadosPokemon.stats[2].base_stat}
                        Forca={DadosPokemon.stats[1].base_stat}
                        Vida={DadosPokemon.stats[0].base_stat}
                        Velocidade={DadosPokemon.stats[5].base_stat}
                        Desefa_Especial={DadosPokemon.stats[4].base_stat}
                        />
                        </Box>
                    </Box>
                    <Box
                    
                    
                    >
                        <AbilitiesFunction
                        Habilidades={DadosPokemon.abilities}
                        />
                    </Box>
                </Box>
                
        }   
        </ModalDefault>
    )

}

export default function CardFunction({Pokemon}){

    const[Loading,SetLoading] = useState(true)

    const[DadosPokemon,SetDadosPokemon] = useState([])

    const[Open,SetOpen] = useState(false)

    useEffect(() => {
        RequisicaoInicial(SetLoading,SetDadosPokemon,Pokemon.name)
    },[Pokemon])

    return(
        <>
        <PokeModal
        SetOpen={SetOpen}
        Open={Open}
        DadosPokemon={DadosPokemon}
        Loading={Loading}
        />
        <Box
        m={2}
        sx={{
            border: 1,
            borderColor: 'error.main',
            borderRadius:10,
            padding:0,
            background: 'linear-gradient(to right,red 0%,pink 50%,white 50%,white 100%)'
        }}
        >
            {
                Loading
                ? <CardCarregando/>
                :   <CardCarregado
                    Name={DadosPokemon.name}
                    Foto={DadosPokemon.sprites.front_default}
                    Tipagens={DadosPokemon.types}
                    SetOpen={SetOpen}
                    />
            }
        </Box>
        </>
        
    )

}