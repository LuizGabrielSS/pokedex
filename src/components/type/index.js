import { Box, Typography } from '@mui/material'
import React from 'react'


function TypeComponent({Icone,Tipagem}){
    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Icone/>
            <Typography>
                {Tipagem}
            </Typography>
        </Box>
    )
}

export default function TypesFunction({Type}){

    if(Type === 'normal'){
        
    }else if(Type === 'fighting'){
        
    }else if(Type === 'poison'){
        
    }else if(Type === 'ground'){
        
    }else if(Type === 'rock'){
        
    }else if(Type === 'bug'){
        
    }else if(Type === 'steel'){
        
    }else if(Type === 'fire'){
        
    }else if(Type === 'water'){
        
    }else if(Type === 'grass'){
        
    }else if(Type === 'electric'){
        
    }else if(Type === 'psychic'){
        
    }else if(Type === 'ice'){
        
    }else if(Type === 'dragon'){
        
    }else if(Type === 'dark'){
        
    }else if(Type === 'fairy'){
        
    }else if(Type === 'unknown'){
        
    }else if(Type === 'shadow'){
        
    }else if(Type === 'flying'){
        
    }else if(Type === 'ghost'){
        
    }

}