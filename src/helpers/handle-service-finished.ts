import { TicketType } from '@/helpers'
import { api } from '@/services/api'

export async function handleServiceFinished(id: string) {
  const response = await api.get<TicketType>(`/ticket-by-id/${id}`)
  const ticketById = response.data
  if (ticketById.status === 'called') {
    window.alert('Operação não permitida')
  } else {
    await api.patch('/update-status', { id, status: 'finished' })
  }
}
