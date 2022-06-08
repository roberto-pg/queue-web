import { QueueContainer, TitleContainer, TitleText } from './styles'
import { addLeadingZeros } from '@/utils'
import { api } from '@/services/api'

type TicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queue_id: string
  service_desk: number
}

type TicketSequenceType = {
  id: string
  position: number
  timestamp: string
  status: string
  queueId: string
  queueAbb: string
  serviceDesk: number
  callSequence: number
}

type QueueType = {
  id: string
  title: string
  abbreviation: string
  priority: number
  tickets: []
}

type Queue = {
  listQueues: QueueType[]
  listTickets: TicketSequenceType[]
  numberDesk: string
}

export function RegularCard(props: Queue) {
  const { listQueues, listTickets, numberDesk } = props

  const filteredQueue = listQueues.filter(
    (filtered) => filtered.title === 'Normal'
  )
  const regularQueue = filteredQueue[0]
  const validTickets: TicketType[] = regularQueue?.tickets.filter(
    (ticket: TicketType) =>
      ticket.status === 'waiting' ||
      (ticket.status === 'called' &&
        ticket.service_desk === parseInt(numberDesk))
  )
  const calledTickets = listTickets?.filter(
    (ticket) => ticket.status === 'called'
  )

  async function updateTicketStatusAndDesk(id: string) {
    const intNumberDesk = parseInt(numberDesk)
    await api.patch('/update-service-desk', {
      id,
      serviceDesk: intNumberDesk
    })
    if (calledTickets?.length >= 1) {
      window.alert('Aguarde...')
    } else {
      await api.patch('/update-status', { id, status: 'called' })
    }
  }

  return (
    <>
      {validTickets?.map((ticket: TicketType) => {
        const position = addLeadingZeros(String(ticket.position))
        const hour = new Date(ticket.timestamp)
        const hourString = hour.toLocaleTimeString()

        return (
          <QueueContainer
            key={ticket.id}
            onClick={() => updateTicketStatusAndDesk(ticket.id)}
            className={ticket.status === 'called' ? 'ticketCalled' : ''}
          >
            <TitleContainer>
              <TitleText>
                {regularQueue?.abbreviation} - {position}
              </TitleText>
              <TitleText>{hourString}</TitleText>
            </TitleContainer>
          </QueueContainer>
        )
      })}
    </>
  )
}
