//Externas
import React from 'react'
import {Container,Box} from '@mui/material'

//Internas
import LoadingScreen from './components/loading'
import ErrorScreen from './components/error'
import NetworkScreen from './components/network'
import Headers from './components/header'

export default function ContainerFunction({Loading=false,Status=200,children}){

    return(
        <Container>
            {
                Loading
                ? <LoadingScreen/>
                :   <>
                    {
                        Status === 200
                        ?   <>
                            <Headers/>
                            <Box
                            my={9}
                            >
                            {children}
                            </Box>
                            </>
                        :   <>
                            {
                                Status === "NETWORK"
                                ? <NetworkScreen/>
                                : <ErrorScreen/>
                            }   
                            </>
                    }
                    </>
            }
        </Container>
    )

}