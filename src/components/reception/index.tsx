import { color } from '@/helpers/colors'
import { ReceptionNavBar } from '@/components/navbar'
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

function Reception() {
  return (
    <MainContent>
      <ReceptionNavBar />
      <Content>
        <Left>
          <TopContent>
            <TopText>Preferencial</TopText>
          </TopContent>
          <LeftContent>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
          </LeftContent>
        </Left>
        <MiddleLeft>
          <TopContent>
            <TopText>Empresa</TopText>
          </TopContent>
          <MiddleLeftContent>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
          </MiddleLeftContent>
        </MiddleLeft>
        <MiddleRight>
          <TopContent>
            <TopText>Normal</TopText>
          </TopContent>
          <MiddleRightContent>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
            <QueueContainer>
              <TitleContainer>
                <TitleText>NL - 0002</TitleText>
                <TitleText>15:10:45</TitleText>
              </TitleContainer>
            </QueueContainer>
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
