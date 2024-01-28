import api from '../../../../../services/api'

export default function RequisicaoInicial(SetLoading,SetDadosPokemon,Name){

    api.get(`pokemon/${Name}`)
    .then((res) => {
        // console.log(res.data.stats)
        SetDadosPokemon(res.data)
        SetLoading(false)
    })

}