import { env } from '@/config/env'
import axios from 'axios'
import { io } from 'socket.io-client'

const api = axios.create({
  baseURL: env.HTTP_PORT
})

const socket = io(env.SOCKET_PORT)

export { api, socket }
