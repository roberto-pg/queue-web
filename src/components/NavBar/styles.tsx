import { color } from '@/helpers'
import styled from 'styled-components'
import { ArrowBack } from 'styled-icons/material'

export const ConfigNavBar = styled.div`
  width: 100vw;
  height: 5rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: ${color.backgroundNavBar};

  @media screen and (max-width: 650px) {
    width: 20rem;
    justify-content: space-between;
  }
`

export const ReceptNavBar = styled.div`
  width: 100vw;
  height: 5rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: ${color.backgroundNavBar};

  @media (max-width: 690px) {
    justify-content: space-between;
    padding: 1rem;
  }
`

export const ConfigTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0;
  color: ${color.textLight};
`

export const Back = styled(ArrowBack)`
  width: 2rem;
  height: 2rem;
  margin: 0 20rem 0 15rem;
  cursor: pointer;
  color: ${color.iconLight};

  @media screen and (max-width: 650px) {
    margin: 0;
  }
`
