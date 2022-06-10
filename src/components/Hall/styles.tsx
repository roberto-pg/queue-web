import styled from 'styled-components'
import { color } from '@/helpers'

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.backgroundColor};
`

export const TopContent = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const MiddleContent = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
`

export const CalledTicketContainer = styled.div`
  width: 30rem;
  height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2.5rem;
  background-color: ${color.backgroundModal};
`

export const TicketText = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  line-height: 0.3rem;
  color: ${color.textLight};
`

export const BottonContent = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;

  @media screen and (max-width: 800px) {
    width: 30rem;
  }
`

export const FinishedTicketContainer = styled.div`
  width: 12rem;
  height: 8rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.backgroundModal};

  @media screen and (max-width: 800px) {
    width: 7rem;
    height: 6rem;
  }
`
