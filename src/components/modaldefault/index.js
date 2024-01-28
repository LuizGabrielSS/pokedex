import {IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function ModalDefault({children,SetOpen,Open,Titulo}){

    return(
        <Dialog
        open={Open}
        > 
            <DialogTitle 
            sx={{ m: 0,
                p: 2,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
             }}
            >{Titulo}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => SetOpen(!Open)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    // color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon color="error" fontSize="large"/>
            </IconButton>
            <DialogContent >
                {children}
            </DialogContent>
        </Dialog>
    )

}

// export default function ModalDefault({children,SetOpen,Open,Titulo}){

    

//     return(
//         <Modal
//         open={Open}
//         onClose={() => SetOpen(!Open)}
//         >
//             <Grid
//             justifyContent="center"
//             alignItems="center"
//             height="90%"
//             width="100%"
//             // px={5}
//             // m={5}
//             container
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             >
//                 <Box
//                 overflow="auto"
//                 bgcolor="#fff"
//                 height="95%"
//                 width="100%"
//                 justifyContent="center"
//                 alignItems="center"
//                 sx={{
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 }}
//                 >
//                     <Box>
//                         <Box
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         >
//                                 <Box
//                             display="flex"
//                             alignItems="center"
//                             justifyContent="center"
//                             >
//                                 <Typography 
//                                 variant="h2"
//                                 sx={{
//                                     color:'#edad72'
//                                 }}
//                                 >
//                                     {Titulo}
//                                 </Typography>
//                                 </Box>
//                                 <Box
//                                 display="flex"
//                                 alignContent="flex-end"
//                                 // mx={9}
//                                 >
//                                 <IconButton onClick={() => SetOpen(!Open)} >
//                                     <CloseIcon color="error" fontSize="large"/>
//                                 </IconButton>
//                             </Box>
//                         </Box>
//                         {children}
//                     </Box>
//                 </Box>
//             </Grid>
//         </Modal>
//     )

// }