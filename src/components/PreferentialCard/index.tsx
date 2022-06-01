import { QueueContainer, TitleContainer, TitleText } from './styles'
import { addLeadingZeros } from '@/utils'

type TicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queue_id: string
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
}

export function PreferentialCard(props: Queue) {
  const { listQueues } = props

  const filteredQueue = listQueues.filter(
    (filtered) => filtered.title === 'Preferencial'
  )
  const preferentialQueue = filteredQueue[0]
  const validTickets: TicketType[] = preferentialQueue?.tickets.filter(
    (ticket: TicketType) => ticket.status === 'waiting'
  )

  return (
    <>
      {validTickets?.map((ticket: TicketType) => {
        const position = addLeadingZeros(String(ticket.position))
        const hour = new Date(ticket.timestamp)
        const hourString = hour.toLocaleTimeString()

        return (
          <QueueContainer key={ticket.id}>
            <TitleContainer>
              <TitleText>
                {preferentialQueue?.abbreviation} - {position}
              </TitleText>
              <TitleText>{hourString}</TitleText>
            </TitleContainer>
          </QueueContainer>
        )
      })}
      )
    </>
  )
}
