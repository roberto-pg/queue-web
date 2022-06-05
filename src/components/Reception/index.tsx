import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { color } from '@/helpers/colors'
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
  QueueContainer,
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
    (ticket) => ticket.status === 'called'
  )

  console.log(lastCalledTicket)

  return (
    <MainContent>
      <ReceptionNavBar numberDesk={numberDesk} />
      <Content>
        <Left>
          <TopContent>
            <TopText>Preferencial</TopText>
          </TopContent>
          <LeftContent>
            <PreferentialCard listQueues={queues} numberDesk={numberDesk} />
          </LeftContent>
        </Left>
        <MiddleLeft>
          <TopContent>
            <TopText>Empresa</TopText>
          </TopContent>
          <MiddleLeftContent>
            <CompanyCard listQueues={queues} numberDesk={numberDesk} />
          </MiddleLeftContent>
        </MiddleLeft>
        <MiddleRight>
          <TopContent>
            <TopText>Normal</TopText>
          </TopContent>
          <MiddleRightContent>
            <RegularCard listQueues={queues} numberDesk={numberDesk} />
          </MiddleRightContent>
        </MiddleRight>
        <RightContent>
          <QueueContainer style={{ marginBottom: 100 }}>
            <TitleContainer>
              <TitleText>{lastCalledTicket[0]?.position}</TitleText>
              <TitleText>{lastCalledTicket[0]?.timestamp}</TitleText>
            </TitleContainer>
          </QueueContainer>

          <ControlContainer style={{ backgroundColor: `${color.blue}` }}>
            <ControlText>Chamar novamente</ControlText>
          </ControlContainer>
          <ControlContainer style={{ backgroundColor: `${color.red}` }}>
            <ControlText>Não atendido</ControlText>
          </ControlContainer>
          <ControlContainer
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
