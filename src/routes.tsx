import { ConfigurationPage } from '@configuration-page'
import { HomePage } from '@homepage'
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
