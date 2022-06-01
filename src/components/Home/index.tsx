import { useNavigate } from 'react-router-dom'
import { HomeButton, HomeContent } from './styles'

function Home() {
  const navigate = useNavigate()

  return (
    <HomeContent>
      <HomeButton
        onClick={() => navigate('/checkin')}
      >Entrada</HomeButton>
      <HomeButton
        onClick={() => navigate('/hall')}
      >Salão</HomeButton>
      <HomeButton
        onClick={() => navigate('/reception')}
      >Guichê</HomeButton>
      <HomeButton
        onClick={() => navigate('/config')}
      >Configurações</HomeButton>
    </HomeContent>

  )
}

export { Home }
