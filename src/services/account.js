import http from './http'
import { getToken } from '../utils/user'

const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': getToken()
  }
}

export async function getAllAccounts() {
  return await http.get('accounts', config)
}

export async function updatePassword(payload) {
  try {
    return await http.patch('accounts', payload, config)

  } catch (error) {
    console.log(error)
    console.log(error)
  }
}
