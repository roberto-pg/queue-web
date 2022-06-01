import { color } from '@/helpers/colors'
import styled from 'styled-components'
import { Remove } from 'styled-icons/material'

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
  width: 60vw;
  height: 70vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const DescriptionContainer = styled.div`
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.backgroundColor};
`

export const DescriptionText = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 0;
  color: ${color.textLight};
`

export const QueueContainer = styled.div`
  width: 20rem;
  height: 5rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${color.backgroundModal};
`

export const TitleContainer = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0.4rem 0 0 0.4rem;
  background-color: ${color.backgroundModal};
`

export const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  padding-left: 2rem;
  line-height: 0.3rem;
  color: ${color.textLight};
`

export const PriorityText = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;
  padding-left: 2rem;
  line-height: 0.3rem;
  color: ${color.textLight};
`

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: end;
  padding: 0.5rem 0.5rem 0 0;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: ${color.backgroundModal};
`

export const RemoveIcon = styled(Remove)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: ${color.redAccent};
`

export const ControlContainer = styled.div`
  width: 20rem;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${color.backgroundColor};
`

export const Button = styled.button`
  width: 8rem;
  height: 2rem;
  border: 0;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${color.textLight};
  cursor: pointer;
  background-color: ${color.blue};
`
