import { ModalAddQueue } from '@/components/ModalAddQueue'
import { ConfigurationNavBar } from '@/components/NavBar'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { ModalProvider } from 'styled-react-modal'
import { api, socket } from '@/services/api'
import { QueueType } from '@/helpers'
import {
  MainContent,
  QueueContainer,
  DescriptionContainer,
  TitleContainer,
  DescriptionText,
  RemoveIcon,
  IconContainer,
  TitleText,
  PriorityText,
  Content,
  ControlContainer,
  Button
} from './styles'

function Configuration() {
  const [queues, setQueues] = useState<QueueType[]>([])

  useEffect(() => {
    api.get('queues')
    socket.on('load_queues', (listQueues: QueueType[]) => {
      setQueues(listQueues)
    })
  }, [])

  async function removeQueue(id: string) {
    try {
      await api.delete(`delete/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  async function removeTickets() {
    try {
      await api.delete('/remove-tickets')
      Cookies.remove('counterCookiePF')
      Cookies.remove('counterCookieEP')
      Cookies.remove('counterCookieNO')
      Cookies.remove('counterSequenceCookie')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalProvider>
      <MainContent>
        <ConfigurationNavBar />
        <DescriptionContainer>
          <DescriptionText>FILAS</DescriptionText>
          <ModalAddQueue />
        </DescriptionContainer>
        <Content>
          {queues.map((queue) => {
            return (
              <QueueContainer key={queue.id}>
                <TitleContainer>
                  <TitleText>
                    {queue.title} - {queue.abbreviation}
                  </TitleText>
                  <PriorityText>{queue.priority} de prioridade</PriorityText>
                </TitleContainer>
                <IconContainer>
                  <RemoveIcon
                    onClick={() =>
                      window.confirm('Confirma a remoção da fila?') &&
                      removeQueue(queue.id)
                    }
                  />
                </IconContainer>
              </QueueContainer>
            )
          })}
        </Content>
        <ControlContainer>
          <DescriptionText style={{ fontSize: '1rem' }}>
            CONTROLLE
          </DescriptionText>
          <Button
            onClick={() =>
              window.confirm('Confirma o reínicio das filas?') &&
              removeTickets()
            }
          >
            Reiniciar filas
          </Button>
        </ControlContainer>
      </MainContent>
    </ModalProvider>
  )
}

export { Configuration }
