import styled from 'styled-components'
import { color } from '@/helpers'

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${color.backgroundColor};
`

export const Content = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Left = styled.div`
  width: 22vw;
  height: 90vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const LeftContent = styled.div`
  width: 22vw;
  height: 83vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  overflow-y: scroll;
  visibility: ${(props) =>
    props.className === 'hidden' ? 'hidden' : 'visible'};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const MiddleLeft = styled.div`
  width: 22vw;
  height: 90vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const MiddleLeftContent = styled.div`
  width: 22vw;
  height: 83vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  overflow-y: scroll;
  visibility: ${(props) =>
    props.className === 'hidden' ? 'hidden' : 'visible'};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const MiddleRight = styled.div`
  width: 22vw;
  height: 90vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const MiddleRightContent = styled.div`
  width: 22vw;
  height: 83vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  overflow-y: scroll;
  visibility: ${(props) =>
    props.className === 'hidden' ? 'hidden' : 'visible'};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const RightContent = styled.div`
  width: 22vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 26vw;
  }
`

export const TopContent = styled.div`
  width: 22vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 18vw;
  }
`

export const TopText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${color.textLight};

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const CalledTicketContainer = styled.div`
  width: 15rem;
  height: 5rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background-color: ${color.red};
  visibility: ${(props) =>
    props.className === 'visible' ? 'visible' : 'hidden'};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`

export const TitleContainer = styled.div`
  width: 12rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  line-height: 0.3rem;
  color: ${color.textLight};
`

export const ControlContainer = styled.div`
  width: 15rem;
  height: 3rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`

export const ControlText = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  line-height: 0.3rem;
  color: ${color.textLight};
`
