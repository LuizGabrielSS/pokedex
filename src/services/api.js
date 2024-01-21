import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

const api = axios.create({
    baseURL:URL
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        return error
    }
)

export default api