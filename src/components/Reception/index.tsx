import { CompanyCard } from '@/components/CompanyCard'
import { ReceptionNavBar } from '@/components/NavBar'
import { PreferentialCard } from '@/components/PreferentialCard'
import { RegularCard } from '@/components/RegularCard'
import { color } from '@/helpers/colors'
import { api, socket } from '@/services/api'
import { addLeadingZeros } from '@/utils'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  handleServiceBeginning,
  handleServiceFinished,
  handleUnansweredCall,
  QueueTicketType,
  QueueType,
  TicketType
} from '@/helpers'
import {
  CalledTicketContainer,
  Content,
  ControlContainer,
  ControlText,
  Left,
  LeftContent,
  MainContent,
  MiddleLeft,
  MiddleLeftContent,
  MiddleRight,
  MiddleRightContent,
  RightContent,
  TitleContainer,
  TitleText,
  TopContent,
  TopText
} from './styles'

type PropsNavigate = {
  numberDesk: string
}

function Reception() {
  const location = useLocation()
  const { numberDesk } = location.state as PropsNavigate
  const [queues, setQueues] = useState<QueueType[]>([])
  const [tickets, setTickets] = useState<TicketType[]>([])

  useEffect(() => {
    api.get('/queues')
    api.get('/tickets')
    socket.on('load_queues', (listQueues: QueueType[]) => {
      return setQueues(listQueues)
    })
    socket.on('load_tickets', (listTickets: TicketType[]) => {
      return setTickets(listTickets)
    })
  }, [])

  const allTicketsIntheQueue = queues.map((queue) => {
    return queue.tickets
  })
  const onlyTickets: QueueTicketType[] = [].concat(...allTicketsIntheQueue)
  const lastCalledTicket = onlyTickets.filter(
    (ticket) =>
      (ticket.status === 'called' &&
        ticket.service_desk === parseInt(numberDesk)) ||
      (ticket.status === 'beingAttended' &&
        ticket.service_desk === parseInt(numberDesk))
  )
  const beingAttendedTicket = onlyTickets.filter(
    (ticket) =>
      ticket.status === 'beingAttended' &&
      ticket.service_desk === parseInt(numberDesk)
  )

  const queueTitleAbbreviation = lastCalledTicket[0]?.queue_abb
  const position = lastCalledTicket[0]?.position
  const positionWithZeros = addLeadingZeros(String(position))
  const hour = new Date(lastCalledTicket[0]?.timestamp)
  const hourString = hour.toLocaleTimeString()

  return (
    <MainContent>
      <ReceptionNavBar numberDesk={numberDesk} />
      <Content>
        <Left>
          <TopContent>
            <TopText>Preferencial</TopText>
          </TopContent>
          <LeftContent
            className={beingAttendedTicket.length > 0 ? 'hidden' : ''}
          >
            <PreferentialCard
              listQueues={queues}
              listTickets={tickets}
              numberDesk={numberDesk}
            />
          </LeftContent>
        </Left>
        <MiddleLeft>
          <TopContent>
            <TopText>Empresa</TopText>
          </TopContent>
          <MiddleLeftContent
            className={beingAttendedTicket.length > 0 ? 'hidden' : ''}
          >
            <CompanyCard
              listQueues={queues}
              listTickets={tickets}
              numberDesk={numberDesk}
            />
          </MiddleLeftContent>
        </MiddleLeft>
        <MiddleRight>
          <TopContent>
            <TopText>Normal</TopText>
          </TopContent>
          <MiddleRightContent
            className={beingAttendedTicket.length > 0 ? 'hidden' : ''}
          >
            <RegularCard
              listQueues={queues}
              listTickets={tickets}
              numberDesk={numberDesk}
            />
          </MiddleRightContent>
        </MiddleRight>
        <RightContent>
          <CalledTicketContainer
            className={lastCalledTicket.length > 0 ? 'visible' : ''}
            style={{ marginBottom: 100 }}
          >
            <TitleContainer>
              <TitleText>
                {queueTitleAbbreviation} - {positionWithZeros}
              </TitleText>
              <TitleText>{hourString}</TitleText>
            </TitleContainer>
          </CalledTicketContainer>

          <ControlContainer
            onClick={() => handleServiceBeginning(lastCalledTicket[0]?.id)}
            style={{ backgroundColor: `${color.blue}` }}
          >
            <ControlText>Iniciar atendimento</ControlText>
          </ControlContainer>
          <ControlContainer
            onClick={() => handleUnansweredCall(lastCalledTicket[0]?.id)}
            style={{ backgroundColor: `${color.red}` }}
          >
            <ControlText>Não respondeu</ControlText>
          </ControlContainer>
          <ControlContainer
            onClick={() => handleServiceFinished(lastCalledTicket[0]?.id)}
            style={{ marginBottom: 50, backgroundColor: `${color.green}` }}
          >
            <ControlText>Atendido</ControlText>
          </ControlContainer>
        </RightContent>
      </Content>
    </MainContent>
  )
}

export { Reception }
