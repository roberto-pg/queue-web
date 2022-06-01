import { useEffect, useState } from 'react'
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

type QueueType = {
  id: string
  title: string
  abbreviation: string
  priority: number
  tickets: []
}

function Reception() {
  const [queues, setQueues] = useState<QueueType[]>([])

  useEffect(() => {
    api.get('/queues')
    socket.on('load_queues', (list: QueueType[]) => {
      return setQueues(list)
    })
  }, [])

  return (
    <MainContent>
      <ReceptionNavBar />
      <Content>
        <Left>
          <TopContent>
            <TopText>Preferencial</TopText>
          </TopContent>
          <LeftContent>
            <PreferentialCard listQueues={queues} />
          </LeftContent>
        </Left>
        <MiddleLeft>
          <TopContent>
            <TopText>Empresa</TopText>
          </TopContent>
          <MiddleLeftContent>
            <CompanyCard listQueues={queues} />
          </MiddleLeftContent>
        </MiddleLeft>
        <MiddleRight>
          <TopContent>
            <TopText>Normal</TopText>
          </TopContent>
          <MiddleRightContent>
            <RegularCard listQueues={queues} />
          </MiddleRightContent>
        </MiddleRight>
        <RightContent>
          <QueueContainer style={{ marginBottom: 100 }}>
            <TitleContainer>
              <TitleText>NL - 0002</TitleText>
              <TitleText>15:10:45</TitleText>
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
