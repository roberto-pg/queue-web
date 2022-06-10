import { TicketType } from '@/helpers'
import { api } from '@/services/api'
import Cookies from 'js-cookie'

export async function handleServiceBeginning(id: string) {
  let counter: number
  let counterSequenceCookie: string

  const response = await api.get<TicketType>(`/ticket-by-id/${id}`)
  const ticketById = response.data
  if (ticketById.status === 'beingAttended') {
    window.alert('Operação não permitida')
  } else {
    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''

    if (counterSequenceCookie === '') {
      counter = 1
      Cookies.set('counterSequenceCookie', String(counter))
    } else {
      counter = parseInt(Cookies.get('counterSequenceCookie') ?? '')
    }

    counterSequenceCookie = Cookies.get('counterSequenceCookie') ?? ''

    await api.patch('/update-status', { id, status: 'beingAttended' })
    await api.patch('/update-call-sequence', {
      id,
      callSequence: parseInt(counterSequenceCookie)
    })
    counter++
    Cookies.set('counterSequenceCookie', String(counter))
  }
}
