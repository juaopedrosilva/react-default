import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost/Crud-com-PHP-MYSQLI/"
})

export default api