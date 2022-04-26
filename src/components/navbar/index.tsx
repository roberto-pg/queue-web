import { useNavigate } from 'react-router-dom'
import { NavBar, ConfigTitle, Back } from './styles'

export function ConfigurationNavBar() {
  const navigate = useNavigate()

  return (
    <NavBar>
      <Back onClick={() => navigate('/')} />
      <ConfigTitle>Configurações</ConfigTitle>
    </NavBar>
  )
}
