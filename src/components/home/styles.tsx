import { color } from '@/helpers/colors'
import styled from 'styled-components'

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
