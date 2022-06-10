import { QueueContainer, TitleContainer, TitleText } from './styles'
import { addLeadingZeros } from '@/utils'
import { api } from '@/services/api'
import { QueueTicketType, QueueType, TicketType } from '@/helpers'

type Queue = {
  listQueues: QueueType[]
  listTickets: TicketType[]
  numberDesk: string
}

export function PreferentialCard(props: Queue) {
  const { listQueues, listTickets, numberDesk } = props

  const filteredQueue = listQueues.filter(
    (filtered) => filtered.title === 'Preferencial'
  )
  const preferentialQueue = filteredQueue[0]
  const validTickets: QueueTicketType[] = preferentialQueue?.tickets.filter(
    (ticket: QueueTicketType) =>
      ticket.status === 'waiting' ||
      (ticket.status === 'called' &&
        ticket.service_desk === parseInt(numberDesk))
  )
  const calledTickets = listTickets?.filter(
    (ticket) => ticket.status === 'called'
  )
  const blocked = calledTickets[0]?.serviceDesk

  async function updateTicketStatusAndDesk(id: string) {
    const intNumberDesk = parseInt(numberDesk)

    if (calledTickets?.length >= 1) {
      window.alert(`Aguarde o guichê 0${blocked}`)
    } else {
      await api.patch('/update-service-desk', {
        id,
        serviceDesk: intNumberDesk
      })
      await api.patch('/update-status', { id, status: 'called' })
    }
  }

  return (
    <>
      {validTickets?.map((ticket: QueueTicketType) => {
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
