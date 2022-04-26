import { ConfigurationPage } from '@/pages/configuration_page'
import { HomePage } from '@/pages/home_page'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/config' element={<ConfigurationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
