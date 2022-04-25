import Modal from 'styled-react-modal'
import { Add } from 'styled-icons/material'
import styled from 'styled-components'
import { color } from '@color'

export const StyledModal = Modal.styled`
width: 30rem;
height: 30rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${color.backgroundModal};
`

export const MainContainer = styled.form`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${color.backgroundModal};
`

export const AddQueueIcon = styled(Add)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: ${color.iconLight};
`

export const Title = styled.h1`
width: 15rem;
  color: ${color.textLight};
  font-size: 1.2rem;
  font-weight: 700;
  margin: auto;
`

export const TextField = styled.input`
  width: 15rem;
  height: 3rem;
  border: solid 1px;
  border-color: ${color.white};
  font-size: 1rem;
  text-align: left;
  text-indent: 1rem;
  margin: auto;
  background-color: transparent;
`

export const TextContainer = styled.div`
  width: 16rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0.5rem auto;
  background-color: transparent;
`

export const StyledText = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${color.blueColor};
  cursor: pointer;
  background-color: transparent;
  border: 0;
`
