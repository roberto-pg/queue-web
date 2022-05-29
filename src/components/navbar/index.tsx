import { useNavigate } from 'react-router-dom'
import { ConfigNavBar, ReceptNavBar, ConfigTitle, Back } from './styles'

export function ConfigurationNavBar() {
  const navigate = useNavigate()

  return (
    <ConfigNavBar>
      <Back onClick={() => navigate('/')} />
      <ConfigTitle>Configurações</ConfigTitle>
    </ConfigNavBar>
  )
}

export function ReceptionNavBar() {
  const navigate = useNavigate()

  return (
    <ReceptNavBar>
      <Back onClick={() => navigate('/')} />
      <ConfigTitle>Guichê 01</ConfigTitle>
    </ReceptNavBar>
  )
}
