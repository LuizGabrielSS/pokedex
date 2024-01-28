import { Box } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie';
import Loading from './loading_view.json'

export default function LoadingScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loading,
      };

    return(
        <Box
        m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        sx={{
            border: 5,
            borderColor: 'error.main',
            borderRadius:10,
        }}
        >
            <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )

}