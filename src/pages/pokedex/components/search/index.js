import { Box, TextField } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchFunction({Base,SetData,InputSearch,SetInputSearch}){

    function Pesquisar(query){
        const updateData = Base.filter((item) => {
            const text_data = query.toUpperCase();
            const item_data = item.name.toUpperCase();
            let searchs = text_data.split(" ");
            for (let search of searchs) {
                if(!item_data.includes(search)){
                    return false;
                }
            }
            return true
        });
        SetData(updateData)
        SetInputSearch(query)
    }

    return(
        <Box
        m={2}
        >
            <TextField
            label="Pesquisando pokemons"
            defaultValue={InputSearch}
            onChange={(value) => Pesquisar(value.target.value)}
            fullWidth
            InputProps={{
                endAdornment: (
                    <SearchIcon 
                    color="error"
                    />
                ),
                }}
            />
        </Box>
    )
}