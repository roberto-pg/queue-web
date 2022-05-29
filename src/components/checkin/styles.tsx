import styled from 'styled-components'
import { color } from '@/helpers/colors'
import Modal from 'styled-react-modal'

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.backgroundColor};
`

export const Content = styled.div`
  width: 80vw;
  height: 100vh;
  padding: 3rem 0 3rem 0;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QueueContainer = styled.div`
  width: 30rem;
  height: 8rem;
  margin: 1rem;
  display: flex;
  border-radius: 0.4rem;
  background-color: ${color.backgroundModal};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`

export const QueueTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: auto;
  color: ${color.textLight};
`

export const StyledModal = Modal.styled`
width: 30rem;
height: 35rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${color.backgroundModal};
`

export const ModalContainer = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ModalText = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${color.textLight};
  cursor: pointer;
  background-color: transparent;
  border: 0;
`
