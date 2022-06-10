import { api, socket } from '@/services/api'
import { useEffect, useState } from 'react'
import { addLeadingZeros } from '@/utils'
import { TicketType } from '@/helpers'
import {
  MainContent,
  TopContent,
  MiddleContent,
  CalledTicketContainer,
  TicketText,
  BottonContent,
  FinishedTicketContainer
} from './styles'

export function Hall() {
  const [tickets, setTickets] = useState<TicketType[]>([])
  const [finishedTickets, setFinishedTickets] = useState<TicketType[]>([])

  useEffect(() => {
    api.get('tickets')
    api.get('/tickets-by-call-sequence')
    socket.on('load_tickets', (listTickets: TicketType[]) => {
      setTickets(listTickets)
    })
    socket.on('tickets_by_call_sequence', (finishedList: TicketType[]) => {
      setFinishedTickets(finishedList)
    })
  }, [])

  const calledTicket = tickets.filter((ticket) => ticket.status === 'called')
  const shortTitle =
    calledTicket[0]?.queueAbb === undefined ? '' : calledTicket[0]?.queueAbb
  const numberTicket =
    calledTicket[0]?.position === undefined ? '' : calledTicket[0]?.position
  const position = addLeadingZeros(String(numberTicket))
  const numberServiceDesk =
    calledTicket[0]?.serviceDesk === undefined
      ? ''
      : calledTicket[0]?.serviceDesk

  const index0 = finishedTickets.length - 1
  const index1 = finishedTickets.length - 2
  const index2 = finishedTickets.length - 3
  const index3 = finishedTickets.length - 4

  const abbreviation1 =
    finishedTickets[index0]?.queueAbb === undefined
      ? ''
      : finishedTickets[index0]?.queueAbb
  let position1 =
    finishedTickets[index0]?.position === undefined
      ? ''
      : finishedTickets[index0]?.position
  position1 = addLeadingZeros(String(position1))
  const serviceDesk1 = finishedTickets[index0]?.serviceDesk

  const abbreviation2 =
    finishedTickets[index1]?.queueAbb === undefined
      ? ''
      : finishedTickets[index1]?.queueAbb
  let position2 =
    finishedTickets[index1]?.position === undefined
      ? ''
      : finishedTickets[index1]?.position
  position2 = addLeadingZeros(String(position2))
  const serviceDesk2 = finishedTickets[index1]?.serviceDesk

  const abbreviation3 =
    finishedTickets[index2]?.queueAbb === undefined
      ? ''
      : finishedTickets[index2]?.queueAbb
  let position3 =
    finishedTickets[index2]?.position === undefined
      ? ''
      : finishedTickets[index2]?.position
  position3 = addLeadingZeros(String(position3))
  const serviceDesk3 = finishedTickets[index2]?.serviceDesk

  const abbreviation4 =
    finishedTickets[index3]?.queueAbb === undefined
      ? ''
      : finishedTickets[index3]?.queueAbb
  let position4 =
    finishedTickets[index3]?.position === undefined
      ? ''
      : finishedTickets[index3]?.position
  position4 = addLeadingZeros(String(position4))
  const serviceDesk4 = finishedTickets[index3]?.serviceDesk

  return (
    <MainContent>
      <TopContent>
        <CalledTicketContainer>
          <TicketText style={{ fontSize: 25 }}>Senha</TicketText>
          <TicketText
            style={{ fontSize: 40 }}
          >{`${shortTitle} - ${position}`}</TicketText>
          <TicketText style={{ fontSize: 25 }}>
            Guichê 0{numberServiceDesk}
          </TicketText>
        </CalledTicketContainer>
      </TopContent>
      <MiddleContent>
        <TicketText style={{ fontSize: 30 }}>Últimas chamadas</TicketText>
      </MiddleContent>
      <BottonContent>
        <FinishedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${abbreviation1} - ${position1}`}</TicketText>
          <TicketText>Guichê 0{serviceDesk1}</TicketText>
        </FinishedTicketContainer>
        <FinishedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${abbreviation2} - ${position2}`}</TicketText>
          <TicketText>Guichê 0{serviceDesk2}</TicketText>
        </FinishedTicketContainer>
        <FinishedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${abbreviation3} - ${position3}`}</TicketText>
          <TicketText>Guichê 0{serviceDesk3}</TicketText>
        </FinishedTicketContainer>
        <FinishedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText
            style={{ fontSize: 20 }}
          >{`${abbreviation4} - ${position4}`}</TicketText>
          <TicketText>Guichê 0{serviceDesk4}</TicketText>
        </FinishedTicketContainer>
      </BottonContent>
    </MainContent>
  )
}
