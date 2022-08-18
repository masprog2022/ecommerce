import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmJhNjJlNzdkN2U4N2IzMzg1ODBmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDc1MDQ4MSwiZXhwIjoxNjYxMDA5NjgxfQ.jVi6_RgvrwJb12uLeioiTaEaeVPyTGFYd8oAGHQKWDk"

export const publicRquest = axios.create({

    baseURL: BASE_URL,
})

export const userRquest = axios.create({

    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})