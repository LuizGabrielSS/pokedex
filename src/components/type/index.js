import { Box, Typography } from '@mui/material'
import React from 'react'

//Icones
import { IoLeafSharp,IoWaterOutline } from "react-icons/io5";
import { RiEmotionNormalLine } from "react-icons/ri";
import { LuSword } from "react-icons/lu";
import { GiPoisonBottle,GiSteelClaws,GiFairyWand,GiAngelWings,GiUndergroundCave,GiStoneSphere } from "react-icons/gi";
import { FaFire,FaBug,FaBolt,FaDragon,FaGhost,FaRegSnowflake } from "react-icons/fa";
import { MdDarkMode,MdOutlinePsychology } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { SiShadow } from "react-icons/si";

function TypeComponent({Icone,Tipagem,Color}){
    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Icone
            style={{
                color:Color,
                 width: '20%', height: '20%'
            }}
            />
            <Typography

            variant={
                    window.innerWidth > 420
                    ? "h5"
                    : "subtitle1"
                }
            sx={{
                color:Color
            }}
            >
                {Tipagem}
            </Typography>
        </Box>
    )
}

export default function TypesFunction({Type}){

    // // function CorTipo(NovaCor){
    //     SetCorTipagem([...CorTipagem,NovaCor])
    // }

    if(Type === 'NORMAL'){
        // CorTipo("#999966")
        return(
            <TypeComponent
            Icone={RiEmotionNormalLine}
            Tipagem='Normal'
            Color="#999966"
            />
        )
    }else if(Type === 'FIGHTING'){
        // CorTipo("#993300")
        return(
            <TypeComponent
            Icone={LuSword}
            Tipagem='Lutador'
            Color="#993300"
            />
        )
    }else if(Type === 'POISON'){
        // CorTipo("#9d00ff")
        return(
            <TypeComponent
            Icone={GiPoisonBottle}
            Tipagem='Venenoso'
            Color="#9d00ff"
            />
        )
    }else if(Type === 'GROUND'){
        // CorTipo("#ff8000")
        return(
            <TypeComponent
            Icone={GiUndergroundCave}
            Tipagem='Terra'
            Color="#ff8000"
            />
        )
        
    }else if(Type === 'ROCK'){
        // CorTipo("#663300")
        return(
            <TypeComponent
            Icone={GiStoneSphere}
            Tipagem='Pedra'
            Color="#663300"
            />
        )
    }else if(Type === 'BUG'){
        // CorTipo("#336600")
        return(
            <TypeComponent
            Icone={FaBug}
            Tipagem='Inseto'
            Color="#336600"
            />
        )
    }else if(Type === 'STEEL'){
        // CorTipo("#c0c0c0")
        return(
            <TypeComponent
            Icone={GiSteelClaws}
            Tipagem='Metal'
            Color="#c0c0c0"
            />
        )
    }else if(Type === 'FIRE'){
        // CorTipo("#ff0000")
        return(
            <TypeComponent
            Icone={FaFire}
            Tipagem='Fogo'
            Color="#ff0000"
            />
        )
    }else if(Type === 'WATER'){
        // CorTipo("#0000ff")
        return(
            <TypeComponent
            Icone={IoWaterOutline}
            Tipagem='Agua'
            Color="#0000ff"
            />
        )
    }else if(Type === 'GRASS'){
        // CorTipo("#00ff00")
        return(
            <TypeComponent
            Icone={IoLeafSharp}
            Tipagem='Planta'
            Color="#00ff00"
            />
        )        
    }else if(Type === 'PSYCHIC'){
        // CorTipo("#ff66ff")
        return(
            <TypeComponent
            Icone={MdOutlinePsychology}
            Tipagem='Psiquico'
            Color="#ff66ff"
            />
        ) 
    }else if(Type === 'ICE'){
        // CorTipo("#66ccff")
        return(
            <TypeComponent
            Icone={FaRegSnowflake}
            Tipagem='Gelo'
            Color="#66ccff"
            />
        )
    }else if(Type === 'DRAGON'){
        // CorTipo("#333399")
        return(
            <TypeComponent
            Icone={FaDragon}
            Tipagem='Dragão'
            Color="#333399"
            />
        )        
    }else if(Type === 'DARK'){
        // CorTipo("#000033")
        return(
            <TypeComponent
            Icone={MdDarkMode}
            Tipagem='Escuridão'
            Color="#000033"
            />
        )
    }else if(Type === 'FAIRY'){
        // CorTipo("#ff00ff")
        return(
            <TypeComponent
            Icone={GiFairyWand}
            Tipagem='Fada'
            Color="#ff00ff"
            />
        )
        
    }else if(Type === 'UNKNOWN'){
        // CorTipo("#808080")
        return(
            <TypeComponent
            Icone={GrStatusUnknown}
            Tipagem='Desconhecido'
            Color="#808080"
            />
        )
        
    }else if(Type === 'SHADOW'){
        // CorTipo("#1a1a1a")
        return(
            <TypeComponent
            Icone={SiShadow}
            Tipagem='Sombra'
            Color="#1a1a1a"
            />
        )
        
    }else if(Type === 'FLYING'){
        // CorTipo("#99ebff")
        return(
            <TypeComponent
            Icone={GiAngelWings}
            Tipagem='Voador'
            Color="#99ebff"
            />
        )
        
    }else if(Type === 'GHOST'){
        // CorTipo("#666699")
        return(
            <TypeComponent
            Icone={FaGhost}
            Tipagem='Fantasma'
            Color="#666699"
            />
        )
        
    }else if(Type === 'ELECTRIC'){
        // CorTipo("#ffff00")
        return(
            <TypeComponent
            Icone={FaBolt}
            Tipagem='Eletrico'
            Color="#ffff00"
            />
        ) 
    }
}