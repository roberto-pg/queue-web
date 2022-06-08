import { api, socket } from '@/services/api'
import { useEffect, useState } from 'react'
import { addLeadingZeros } from '@/utils'
import {
  MainContent,
  TopContent,
  MiddleContent,
  TicketContainerCalled,
  TicketText,
  BottonContent,
  ServicedTicketContainer
} from './styles'

type TicketType = {
  id: string
  position: number
  timestamp: string
  status: string
  queueId: string
  queueAbb: string
  serviceDesk: number
}

function Hall() {
  const [tickets, setTickets] = useState<TicketType[]>([])

  useEffect(() => {
    api.get('tickets')
    socket.on('load_tickets', (listTickets: TicketType[]) => {
      setTickets(listTickets)
    })
  }, [])

  const calledTickets = tickets.filter((ticket) => ticket.status === 'called')
  const lastTickets = tickets.filter(
    (ticket) =>
      ticket.status === 'beingAttended' ||
      ticket.status === 'notFound' ||
      ticket.status === 'finished'
  )
  console.log(calledTickets)
  console.log(lastTickets)
  const last0 = lastTickets.length - 1
  const last1 = lastTickets.length - 2
  const last2 = lastTickets.length - 3
  const last3 = lastTickets.length - 4
  const shortTitle =
    calledTickets[0]?.queueAbb === undefined ? '' : calledTickets[0]?.queueAbb
  const numberTicket =
    calledTickets[0]?.position === undefined ? '' : calledTickets[0]?.position
  const position = addLeadingZeros(String(numberTicket))
  const numberServiceDesk =
    calledTickets[0]?.serviceDesk === undefined
      ? ''
      : calledTickets[0]?.serviceDesk

  return (
    <MainContent>
      <TopContent>
        <TicketContainerCalled>
          <TicketText style={{ fontSize: 25 }}>Senha</TicketText>
          <TicketText
            style={{ fontSize: 40 }}
          >{`${shortTitle} - ${position}`}</TicketText>
          <TicketText style={{ fontSize: 25 }}>
            Guichê 0{numberServiceDesk}
          </TicketText>
        </TicketContainerCalled>
      </TopContent>
      <MiddleContent>
        <TicketText style={{ fontSize: 30 }}>Últimas chamadas</TicketText>
      </MiddleContent>
      <BottonContent>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${lastTickets[last0]?.queueAbb} - ${lastTickets[last0]?.position}`}</TicketText>
          <TicketText>Guichê {lastTickets[last0]?.serviceDesk}</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${lastTickets[last1]?.queueAbb} - ${lastTickets[last1]?.position}`}</TicketText>
          <TicketText>Guichê 0{lastTickets[last1]?.serviceDesk}</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${lastTickets[last2]?.queueAbb} - ${lastTickets[last2]?.position}`}</TicketText>
          <TicketText>Guichê 0{lastTickets[last2]?.serviceDesk}</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${lastTickets[last3]?.queueAbb} - ${lastTickets[last3]?.position}`}</TicketText>
          <TicketText>Guichê 0{lastTickets[last3]?.serviceDesk}</TicketText>
        </ServicedTicketContainer>
      </BottonContent>
    </MainContent>
  )
}

export { Hall }
