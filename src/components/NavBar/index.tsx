import { useNavigate } from 'react-router-dom'
import { ConfigNavBar, ReceptNavBar, ConfigTitle, Back } from './styles'

type PropsNavigate = {
  numberDesk: string
}

export function ConfigurationNavBar() {
  const navigate = useNavigate()

  return (
    <ConfigNavBar>
      <Back onClick={() => navigate('/')} />
      <ConfigTitle>Configurações</ConfigTitle>
    </ConfigNavBar>
  )
}

export function ReceptionNavBar(props: PropsNavigate) {
  const { numberDesk } = props
  const navigate = useNavigate()

  return (
    <ReceptNavBar>
      <Back onClick={() => navigate('/')} />
      <ConfigTitle>Guichê 0{numberDesk}</ConfigTitle>
    </ReceptNavBar>
  )
}
