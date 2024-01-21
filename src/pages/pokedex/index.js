//Externas
import React,{useEffect,useState} from 'react'

//Internas
import ContainerFunction from '../../components/container'
import CardFunction from './components/card'
import SearchFunction from './components/search'
import PaginationFunction from './components/pagination'

//requests
import RequisicaoInicial from './requests/inicial'

export default function Pokedex(){

    const[ListaPokemon,SetListaPokemon] = useState([])

    const[BasePokemon,SetBasePokemon] = useState([])

    const[NumberOfPages,SetNumberOfPages] = useState([])

    const[InputSearch,SetInputSearch] = useState("")

    const[PageNow,SetPageNow] = useState(1)

    const[Status,SetStatus] = useState(200)

    const[Loading,SetLoading] = useState(true)

    useEffect(() => {
        RequisicaoInicial(SetLoading,SetStatus,SetListaPokemon,SetBasePokemon,SetNumberOfPages)
    },[])

    return(
        <ContainerFunction
        Loading={Loading}
        Status={Status}
        >
            <SearchFunction
            Base={BasePokemon}
            SetData={SetListaPokemon}
            InputSearch={InputSearch}
            SetInputSearch={SetInputSearch}
            />
            
            {
                ListaPokemon.slice(
                    ((PageNow-1)*20),(PageNow*20)
                ).map((Pokemon) =>(
                        <CardFunction
                        Pokemon={Pokemon}
                        />
                ))
            }
            {
                InputSearch.length === 0
                ? <PaginationFunction
                NumberOfPages={NumberOfPages}
                SetPageNow={SetPageNow}
                PageNow={PageNow}
                />
                : null
            }
            
        </ContainerFunction>
    )

}