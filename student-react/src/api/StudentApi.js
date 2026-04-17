import axios from "axios"

const api = axios.create({
    baseURL:"https://scaling-garbanzo-jj66gqxr469jc5wrw-8082.app.github.dev/students"
})
export default api