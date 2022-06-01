import styled from 'styled-components'
import { color } from '@/helpers/colors'

export const QueueContainer = styled.div`
  width: 15rem;
  height: 5rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background-color: ${color.backgroundModal};
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
  background-color: ${color.backgroundModal};
`

export const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  line-height: 0.3rem;
  color: ${color.textLight};
`
