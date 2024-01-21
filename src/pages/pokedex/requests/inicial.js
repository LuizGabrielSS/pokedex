import api from '../../../services/api'

export default function RequisicaoInicial(SetLoading,SetStatus,SetListaPokemon,SetBasePokemon,SetNumberOfPages){

    api.get('/pokemon?limit=100000&offset=0')
    .then((res) => {
        SetNumberOfPages(res.data.count)
        SetBasePokemon(res.data.results)
        SetListaPokemon(res.data.results)
        SetStatus(res.status)
        SetLoading(false)
    }
    )
    .catch(
        (error) => {
            }
        )

}