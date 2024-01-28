import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie';
import Error from './error_view.json'

export default function ErrorScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Error,
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
            borderColor: '#0000ff',
            borderRadius:10,
        }}
        >
            <Dialog
            open={true}
            >
                <DialogTitle>Parece que o snorlax quer te dizer algo</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Parece que houve um erro na sua tentativa de requisição,
                        Por favor, entre em contato com o desenvolvedor da plataforma
                    </DialogContentText>
                    
                </DialogContent>
            </Dialog>
            <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
        </Box>
    )
}