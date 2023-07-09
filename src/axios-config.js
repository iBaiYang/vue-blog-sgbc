import axios from 'axios'

const install = axios.create({
    baseUrl: "https://jsonplaceholder.typicode.com"
})

install.defaults.headers.common["Authorization"] = "Token"
install.defaults.headers.post["Content-type"] = "application/json"

export default install
