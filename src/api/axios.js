import axios from 'axios'

const BASE_URL = 'http://localhost:8080/';

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data = {}) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data = {}) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data = {}) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            headers:{
                "x-API-key": localStorage.getItem("token") || ""
            },
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        throw err;
    }
}
