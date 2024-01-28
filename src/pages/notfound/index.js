import React from 'react'
import ContainerFunction from '../../components/container'
import Lottie from 'react-lottie';
import NotFoundView from './not_found_view.json'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle,DialogContentText,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFound(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: NotFoundView,
    };

    const navegacao = useNavigate()


    return(
        <ContainerFunction>
            <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
            sx={{
                border: 5,
                borderColor: '#B97247',
                borderRadius:10,
            }}
            >
                <Dialog
                open={true}
                >
                    <DialogTitle>Parece que os digletts querem te dizer algo</DialogTitle>
                    <DialogContent dividers>
                        <DialogContentText>
                            A pagina desejada não existe,
                            Por favor, tente ir para uma das nossas paginas
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                        color="error"
                        autoFocus
                        onClick={() => navegacao('/')}
                        variant="contained"
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <Lottie options={defaultOptions} height={window.innerHeight*9/10}/>
            </Box>
        </ContainerFunction>
    )
}