import { color } from '@color'
import styled from 'styled-components'
import { ArrowBack } from 'styled-icons/material'

export const NavBar = styled.div`
  width: 100vw;
  height: 5rem;
  margin: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: ${color.backgroundNavBar};
`

export const ConfigTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0;
  color: ${color.textLight};
`

export const Back = styled(ArrowBack)`
  width: 2rem;
  height: 2rem;
  margin: 0 20rem 0 15rem;
  cursor: pointer;
  color: ${color.iconLight};
`
