import axios from 'axios'
import { io } from 'socket.io-client'
import { env } from 'src/config/env'

const api = axios.create({
  baseURL: env.HTTP_PORT
})
console.log(env)
const socket = io(env.SOCKET_PORT)

export { api, socket }
