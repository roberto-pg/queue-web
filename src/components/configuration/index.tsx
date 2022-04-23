import { MainContent, QueueContainer, DescriptionContainer, TitleContainer, DescriptionText, RemoveIcon, AddIcon, IconContainer, TitleText, PriorityText, Content, ControlContainer, Button } from './styles'
import { useState, useEffect } from 'react'
import { api, socket } from '@api'
import { ConfigurationNavBar } from '@navbar'

type QueueType = {
  id: string;
  title: string;
  abbreviation: string;
  priority: number
}

const messagesQueue: QueueType[] = []

socket.on('', (listQueues: QueueType) => {
  messagesQueue.push(listQueues)
})

function Configuration() {
  const [queues, setQueues] = useState<QueueType[]>([])

  useEffect(() => {
    api.get<QueueType[]>('queues').then((response) => {
      setQueues(response.data)
    })
  }, [])

  return (
    <MainContent>
      <ConfigurationNavBar />
      <DescriptionContainer>
        <DescriptionText>FILAS</DescriptionText>
        <AddIcon />
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
  )
}

export { Configuration }
