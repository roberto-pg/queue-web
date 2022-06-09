import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { color } from '@/helpers/colors'
import { addLeadingZeros } from '@/utils'
import { ReceptionNavBar } from '@/components/NavBar'
import { PreferentialCard } from '@/components/PreferentialCard'
import { CompanyCard } from '@/components/CompanyCard'
import { RegularCard } from '@/components/RegularCard'
import { api, socket } from '@/services/api'
import {
  MainContent,
  Content,
  Left,
  LeftContent,
  MiddleLeft,
  MiddleLeftContent,
  MiddleRight,
  MiddleRightContent,
  RightContent,
  TopContent,
  TopText,
  CalledTicketContainer,
  TitleContainer,
  TitleText,
  ControlContainer,
  ControlText
} from './styles'
import { QueueTicketType, QueueType, TicketType } from '@/helpers/types'

type PropsNavigate = {
  numberDesk: string
}

function Reception() {
  const location = useLocation()
  const { numberDesk } = location.state as PropsNavigate
  const [queues, setQueues] = useState<QueueType[]>([])
  const [tickets, setTickets] = useState<TicketType[]>([])
  let counter: number
  let counterSequenceCookie: string

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

  async function handleTicketBeingAttended(id: string) {
    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''

    if (counterSequenceCookie === '') {
      counter = 1
      Cookies.set('counterSequenceCookie', String(counter))
    } else {
      counter = parseInt(Cookies.get('counterSequenceCookie') ?? '')
    }

    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''

    await api.patch('/update-status', { id, status: 'beingAttended' })
    await api.patch('/update-call-sequence', {
      id,
      callSequence: parseInt(counterSequenceCookie)
    })
    counter++
    Cookies.set('counterSequenceCookie', String(counter))
  }

  async function handleTicketAttended(id: string) {
    const ticketCalled = tickets.filter(
      (ticket) => ticket.status === 'called' && ticket.id === id
    )

    if (ticketCalled.length > 0) {
      window.alert('Operação não permitida')
    } else {
      await api.patch('/update-status', { id, status: 'finished' })
    }
  }

  async function handleNotAnswered(id: string) {
    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''

    if (counterSequenceCookie === '') {
      counter = 1
      Cookies.set('counterSequenceCookie', String(counter))
    } else {
      counter = parseInt(Cookies.get('counterSequenceCookie') ?? '')
    }

    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''
    await api.patch('/update-status', { id, status: 'notFound' })
    await api.patch('/update-call-sequence', {
      id,
      callSequence: parseInt(counterSequenceCookie)
    })
    counter++
    Cookies.set('counterSequenceCookie', String(counter))
  }

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
            onClick={() => handleTicketBeingAttended(lastCalledTicket[0]?.id)}
            style={{ backgroundColor: `${color.blue}` }}
          >
            <ControlText>Em atendimento</ControlText>
          </ControlContainer>
          <ControlContainer
            onClick={() => handleNotAnswered(lastCalledTicket[0]?.id)}
            style={{ backgroundColor: `${color.red}` }}
          >
            <ControlText>Não respondeu</ControlText>
          </ControlContainer>
          <ControlContainer
            onClick={() => handleTicketAttended(lastCalledTicket[0]?.id)}
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
