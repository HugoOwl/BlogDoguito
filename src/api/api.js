import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://mihawk.herokuapp.com'
})

export const busca = async(url, setDado) => { 
  const reposta = await api.get(url)
  setDado(reposta.data)
}