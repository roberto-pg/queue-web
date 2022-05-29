import { color } from '@/helpers/colors'
import { api } from '@/services/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  AddQueueIcon,
  MainContainer,
  StyledModal,
  StyledText,
  TextContainer,
  TextField,
  Title
} from './styles'

type FormInput = {
  title: string
  abbreviation: string
  priority: string
}

export function ModalAddQueue() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField
  } = useForm<FormInput>()

  async function addQueue(data: FormInput) {
    const serializedData = {
      ...data,
      priority: parseInt(data.priority)
    }
    try {
      await api.post('/create-queue', serializedData)
      resetField('title')
      resetField('abbreviation')
      resetField('priority')
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  function toggleModal() {
    resetField('title')
    resetField('abbreviation')
    resetField('priority')
    setIsOpen(!isOpen)
  }

  return (
    <>
      <AddQueueIcon onClick={toggleModal} />
      <StyledModal isOpen={isOpen} onEscapeKeydown={toggleModal}>
        <MainContainer onSubmit={handleSubmit(addQueue)}>
          <Title>Nova fila</Title>
          <TextField
            placeholder="Título"
            {...register('title', { required: true, pattern: /^[A-Za-z]+$/i })}
            style={{ color: `${color.white}` }}
          />
          {errors.title && (
            <span
              style={{
                fontSize: '0.75rem',
                color: 'white',
                width: '15rem',
                margin: '0 auto'
              }}
            >
              Campo obrigatório - Somente letras
            </span>
          )}
          <TextField
            placeholder="Abreviação"
            {...register('abbreviation', {
              required: true,
              pattern: /^[A-Za-z]+$/i
            })}
            style={{ color: `${color.white}` }}
          />
          {errors.abbreviation && (
            <span
              style={{
                fontSize: '0.75rem',
                color: 'white',
                width: '15rem',
                margin: '0 auto'
              }}
            >
              Campo obrigatório - Somente letras
            </span>
          )}
          <TextField
            placeholder="Prioridade"
            {...register('priority', { required: true, pattern: /^[0-9]+$/ })}
            style={{ color: `${color.white}` }}
          />
          {errors.priority && (
            <span
              style={{
                fontSize: '0.75rem',
                color: 'white',
                width: '15rem',
                margin: '0 auto'
              }}
            >
              Campo obrigatório - Somente números
            </span>
          )}
          <TextContainer>
            <StyledText onClick={toggleModal} style={{ marginRight: '1.2rem' }}>
              Cancelar
            </StyledText>
            <StyledText type="submit">Adicionar</StyledText>
          </TextContainer>
        </MainContainer>
      </StyledModal>
    </>
  )
}
