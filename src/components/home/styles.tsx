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
  width: 10rem;
  height: 3rem;
  border: 0;
  margin: 1rem;
  text-align: center;
  font-size: 0.9375rem;
  color: ${color.textLight};
  cursor: pointer;
  background-color: ${color.blueColor};
`
