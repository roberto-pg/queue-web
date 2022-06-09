export type QueueTicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queue_id: string
  queue_abb: string
  service_desk: number
}

export type TicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queueId: string
  queueAbb: string
  serviceDesk: number
  callSequence: number
}

export type QueueType = {
  id: string
  title: string
  abbreviation: string
  priority: number
  tickets: []
}
