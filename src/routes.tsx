import { CheckinPage } from '@/pages/checkin_page'
import { ConfigurationPage } from '@/pages/configuration_page'
import { HallPage } from '@/pages/hall_page'
import { HomePage } from '@/pages/home_page'
import { ReceptionPage } from '@/pages/reception_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/config" element={<ConfigurationPage />} />
        <Route path="/checkin" element={<CheckinPage />} />
        <Route path="/reception" element={<ReceptionPage />} />
        <Route path="/hall" element={<HallPage />} />
      </Routes>
    </BrowserRouter>
  )
}
