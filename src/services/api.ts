import axios from 'axios'
import { io } from 'socket.io-client'
import { env } from '@env'

const api = axios.create({
  baseURL: env.HTTP_PORT
})

const socket = io(env.SOCKET_PORT)

export { api, socket }
