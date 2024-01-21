import { Box,Typography,Button } from '@mui/material'
import React,{useState,useEffect} from 'react'

function CardNumber({value,PageNow,SetPageNow}){

    return(
        <Box 
        m={1}
        >
            <Button
            onClick={() => (SetPageNow(value))}
            color="error"
            variant={
                PageNow === value
                ? "contained"
                : "outlined"}
            >
            <Typography>{value}</Typography>
            </Button>
        </Box>
    )
}

export default function PaginationFunction({NumberOfPages,SetPageNow,PageNow}){

    const[PageNumbers,SetPageNumbers] = useState([1])

    const[PageNumbersShow,SetPagenNumbersShow] = useState([])

    useEffect(() => {
        const array = []
        for(let i=1; i <= (~~(NumberOfPages/20)); i++){
            array.push(i)
        }
        SetPageNumbers(array)
    },[NumberOfPages])

    useEffect(() => {
        if(PageNow === 1){
            const init_necessarios = PageNumbers.slice((PageNow-1),(PageNow+3))
            SetPagenNumbersShow(init_necessarios)
        }else if(PageNow === 2){
            const init_necessarios = PageNumbers.slice((PageNow-2),(PageNow+3))
            SetPagenNumbersShow(init_necessarios)
        }else if(PageNow > 2){
            const init_necessarios = PageNumbers.slice((PageNow-3),(PageNow+3))
            SetPagenNumbersShow(init_necessarios)
        }
    },[PageNow,PageNumbers])

    return(
        <Box
        display='flex'
        justifyContent='space-around'
        alignItems="center"
        m={2}
        >
            {
                PageNumbersShow.map((value) => (
                    <Box
                    key={value}
                    >
                        <CardNumber
                        PageNow={PageNow}
                        value={value}
                        SetPageNow={SetPageNow}
                        />
                    </Box>
                ))
            }
        </Box>
    )

}