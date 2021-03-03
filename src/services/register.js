import http from './http'

export async function register(payload) {
    return await http.post('registrations', payload)
}