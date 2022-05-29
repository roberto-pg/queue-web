import {
  MainContent,
  TopContent,
  MiddleContent,
  TicketContainerCalled,
  TicketText,
  BottonContent,
  ServicedTicketContainer
} from './styles'

function Hall() {
  return (
    <MainContent>
      <TopContent>
        <TicketContainerCalled>
          <TicketText style={{ fontSize: 25 }}>Senha</TicketText>
          <TicketText style={{ fontSize: 40 }}>NL - 0001</TicketText>
          <TicketText style={{ fontSize: 25 }}>Guichê 01</TicketText>
        </TicketContainerCalled>
      </TopContent>
      <MiddleContent>
        <TicketText style={{ fontSize: 30 }}>Senhas chamadas</TicketText>
      </MiddleContent>
      <BottonContent>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText style={{ fontSize: 22 }}>NL - 0001</TicketText>
          <TicketText>Guichê 01</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText style={{ fontSize: 22 }}>NL - 0001</TicketText>
          <TicketText>Guichê 01</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText style={{ fontSize: 22 }}>NL - 0001</TicketText>
          <TicketText>Guichê 01</TicketText>
        </ServicedTicketContainer>
        <ServicedTicketContainer>
          <TicketText>Senha</TicketText>
          <TicketText style={{ fontSize: 22 }}>NL - 0001</TicketText>
          <TicketText>Guichê 01</TicketText>
        </ServicedTicketContainer>
      </BottonContent>
    </MainContent>
  )
}

export { Hall }
