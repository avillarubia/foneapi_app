import http from './http'

export async function login(payload) {
  return await http.post('logins', payload)
}