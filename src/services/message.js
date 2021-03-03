import http from './http'
import { getToken } from '../utils/user'

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getToken()
    }
}

export async function getAllMessages() {
    return await http.get('messages', config)
}