import { MainContent, QueueContainer, DescriptionContainer, TitleContainer, DescriptionText, RemoveIcon, IconContainer, TitleText, PriorityText, Content, ControlContainer, Button } from './styles'
import { useState, useEffect } from 'react'
import { api, socket } from '@api'
import { ConfigurationNavBar } from '@navbar'
import { ModalAddQueue } from 'src/components/ModalAddQueue'
import { ModalProvider } from 'styled-react-modal'

type QueueType = {
  id: string;
  title: string;
  abbreviation: string;
  priority: number
}

function Configuration() {
  const [queues, setQueues] = useState<QueueType[]>([])

  useEffect(() => {
    api.get('queues')
    socket.on('load_queues', (listQueues: QueueType[]) => {
      setQueues(listQueues)
    })
  }, [])

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
                  <TitleText>{queue.title} - {queue.abbreviation}</TitleText>
                  <PriorityText>{queue.priority} de prioridade</PriorityText>
                </TitleContainer>
                <IconContainer>
                  <RemoveIcon />
                </IconContainer>
              </QueueContainer>
            )
          })}
        </Content>
        <ControlContainer>
          <DescriptionText style={{ fontSize: '1rem' }}>CONTROLLE</DescriptionText>
          <Button>Reiniciar filas</Button>
        </ControlContainer>
      </MainContent>
    </ModalProvider>
  )
}

export { Configuration }
