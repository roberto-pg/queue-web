import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalProvider } from 'styled-react-modal'
import {
  HomeButton,
  HomeContent,
  StyledModal,
  ModalContainer,
  ModalText,
  Select,
  ButtonContainer,
  ModalButton
} from './styles'

function Home() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [desk, setDesk] = useState('')

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <ModalProvider>
      <HomeContent>
        <HomeButton onClick={() => navigate('/checkin')}>Entrada</HomeButton>
        <HomeButton onClick={() => navigate('/hall')}>Salão</HomeButton>
        <HomeButton onClick={toggleModal}>Guichê</HomeButton>
        <HomeButton onClick={() => navigate('/config')}>
          Configurações
        </HomeButton>
        <StyledModal isOpen={isOpen}>
          <ModalContainer>
            <ModalText>Abrir guichê</ModalText>
            <Select
              onChange={(event) => {
                setDesk(event.target.value)
              }}
            >
              <option value="" hidden>
                Escolha o guichê:
              </option>
              <option value="1">Guichê 01</option>
              <option value="2">Guichê 02</option>
              <option value="3">Guichê 03</option>
              <option value="4">Guichê 04</option>
              <option value="5">Guichê 05</option>
            </Select>
            <ButtonContainer>
              <ModalText
                onClick={toggleModal}
                style={{ fontSize: '1rem', cursor: 'pointer' }}
              >
                Cancelar
              </ModalText>
              <ModalButton
                onClick={() =>
                  navigate('/reception', { state: { numberDesk: desk } })
                }
              >
                Abrir
              </ModalButton>
            </ButtonContainer>
          </ModalContainer>
        </StyledModal>
      </HomeContent>
    </ModalProvider>
  )
}

export { Home }
