import { ModalProvider } from 'styled-react-modal'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { api, socket } from '@/services/api'
import { addLeadingZeros } from '@/utils/leading-zeros'
import {
  MainContent,
  Content,
  QueueContainer,
  QueueTitle,
  StyledModal,
  ModalContainer,
  ModalText
} from './styles'
import { QueueType } from '@/helpers/types'

function Checkin() {
  const [queues, setQueues] = useState<QueueType[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [numberInQueue, setNumberInQueue] = useState('')
  const [abbreviatedTitle, setAbbreviatedTitle] = useState('')
  const [hour, setHour] = useState('')
  let counter: number
  let counterCookie: string

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  function aftertTest() {
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 1000)
  }

  async function handleTicketRegister(id: string, abbreviation: string) {
    counterCookie = Cookies.get(`counterCookie${abbreviation}`) ?? ''

    if (counterCookie === '') {
      counter = 1
      Cookies.set(`counterCookie${abbreviation}`, String(counter))
    } else {
      counter = parseInt(Cookies.get(`counterCookie${abbreviation}`) ?? '')
    }

    counterCookie = Cookies.get(`counterCookie${abbreviation}`) ?? ''

    const numberWithZero = addLeadingZeros(counterCookie)
    setNumberInQueue(numberWithZero)
    setAbbreviatedTitle(abbreviation)

    const now = new Date()
    now.setHours(now.getHours() - 3)

    setHour(new Date().toLocaleTimeString())

    const data = {
      queueId: id,
      position: parseInt(counterCookie),
      timestamp: now.toISOString(),
      status: 'waiting',
      queueAbb: abbreviation
    }

    await api.post('/create-ticket', data)
    counter++
    Cookies.set(`counterCookie${abbreviation}`, String(counter))

    toggleModal()
  }

  useEffect(() => {
    api.get('queues')
    socket.on('load_queues', (listQueues: QueueType[]) => {
      setQueues(listQueues)
    })
  }, [])

  return (
    <ModalProvider>
      <MainContent>
        <Content>
          <QueueTitle>Retire sua senha</QueueTitle>
          {queues.map((queue) => {
            return (
              <QueueContainer
                key={queue.id}
                onClick={() =>
                  handleTicketRegister(queue.id, queue.abbreviation)
                }
              >
                <QueueTitle>{queue.title}</QueueTitle>
              </QueueContainer>
            )
          })}
          <StyledModal isOpen={isOpen} afterOpen={aftertTest}>
            <ModalContainer>
              <ModalText>Senha</ModalText>
              <ModalText style={{ fontSize: '3rem' }}>
                {abbreviatedTitle} - {numberInQueue}
              </ModalText>
              <ModalText>{hour}</ModalText>
            </ModalContainer>
          </StyledModal>
        </Content>
      </MainContent>
    </ModalProvider>
  )
}

export { Checkin }
