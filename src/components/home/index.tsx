import { useNavigate } from 'react-router-dom'
import { HomeButton, HomeContent } from './styles'

function Home() {
  const navigate = useNavigate()

  return (
    <HomeContent>
      <HomeButton>Entrada</HomeButton>
      <HomeButton>Salão</HomeButton>
      <HomeButton>Guichê</HomeButton>
      <HomeButton
        onClick={() => navigate('/config')}
      >Configurações</HomeButton>
    </HomeContent>

  )
}

export { Home }
