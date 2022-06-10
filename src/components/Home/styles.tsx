import { color } from '@/helpers'
import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const HomeContent = styled.div`
  width: 100vw;
  height: 100vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.backgroundColor};
`

export const HomeButton = styled.button`
  width: 20rem;
  height: 5rem;
  border: 0;
  border-radius: 0.4rem;
  margin: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${color.textLight};
  cursor: pointer;
  background-color: ${color.blue};
`

export const StyledModal = Modal.styled`
width: 25rem;
height: 25rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${color.backgroundModal};
`

export const ModalContainer = styled.div`
  width: 18rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
`

export const ModalText = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${color.textLight};
  background-color: transparent;
  border: 0;
`

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: ${color.backgroundColor};
  color: ${color.textLight};
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  border: none;

  option {
    color: ${color.textLight};
    background: ${color.backgroundColor};
    font-size: 14px;
    align-items: center;
    min-height: 10px;
    font-weight: 700;
  }
`

export const ButtonContainer = styled.div`
  width: 18rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModalButton = styled.button`
  width: 8rem;
  height: 2rem;
  border: 0;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${color.textLight};
  cursor: pointer;
  background-color: ${color.blue};
`
