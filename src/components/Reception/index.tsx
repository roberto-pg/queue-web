import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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

type TicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queue_id: string
  queue_abb: string
  service_desk: number
}

type QueueType = {
  id: string
  title: string
  abbreviation: string
  priority: number
  tickets: []
}

type PropsNavigate = {
  numberDesk: string
}

function Reception() {
  const location = useLocation()
  const { numberDesk } = location.state as PropsNavigate
  const [queues, setQueues] = useState<QueueType[]>([])

  useEffect(() => {
    api.get('/queues')
    socket.on('load_queues', (list: QueueType[]) => {
      return setQueues(list)
    })
  }, [])

  const allTicketsIntheQueue = queues.map((queue) => {
    return queue.tickets
  })
  const onlyTickets: TicketType[] = [].concat(...allTicketsIntheQueue)
  const lastCalledTicket = onlyTickets.filter(
    (ticket) =>
      (ticket.status === 'called' &&
        ticket.service_desk === parseInt(numberDesk)) ||
      (ticket.status === 'beingAttended' &&
        ticket.service_desk === parseInt(numberDesk))
  )

  const queueTitleAbbreviation = lastCalledTicket[0]?.queue_abb
  const position = lastCalledTicket[0]?.position
  const positionWithZeros = addLeadingZeros(String(position))
  const hour = new Date(lastCalledTicket[0]?.timestamp)
  const hourString = hour.toLocaleTimeString()

  async function handleTicketAttended(id: string) {
    await api.patch('/update-status', { id, status: 'finished' })
  }

  async function handleNotAnswered(id: string) {
    await api.patch('/update-status', { id, status: 'notFound' })
  }

  return (
    <MainContent>
      <ReceptionNavBar numberDesk={numberDesk} />
      <Content>
        <Left>
          <TopContent>
            <TopText>Preferencial</TopText>
          </TopContent>
          <LeftContent className={lastCalledTicket.length > 0 ? '' : 'visible'}>
            <PreferentialCard listQueues={queues} numberDesk={numberDesk} />
          </LeftContent>
        </Left>
        <MiddleLeft>
          <TopContent>
            <TopText>Empresa</TopText>
          </TopContent>
          <MiddleLeftContent
            className={lastCalledTicket.length > 0 ? '' : 'visible'}
          >
            <CompanyCard listQueues={queues} numberDesk={numberDesk} />
          </MiddleLeftContent>
        </MiddleLeft>
        <MiddleRight>
          <TopContent>
            <TopText>Normal</TopText>
          </TopContent>
          <MiddleRightContent
            className={lastCalledTicket.length > 0 ? '' : 'visible'}
          >
            <RegularCard listQueues={queues} numberDesk={numberDesk} />
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

          <ControlContainer style={{ backgroundColor: `${color.blue}` }}>
            <ControlText>Chamar novamente</ControlText>
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
