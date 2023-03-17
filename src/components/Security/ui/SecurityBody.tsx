import React from 'react'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'
import { BaseInput } from '../../base/base-input'
import { useForm } from 'react-hook-form'
import { BodyContainer, ButtonContainer, Container, Header, ShowButton } from '../style/style'

export const SecurityBody = () => {
  const {
    control,
    formState: { errors },
  } = useForm()

  const { user } = useTypeSelector(store => store.auth)

  return (
    <BodyContainer>
      <Header>Защита</Header>
      <Container>
        <BaseInput
          required
          label='Имя'
          error={errors.lastName ? true : false}
          defaultValue={user.user.lastName}
          name='lastName'
          control={control}
          rules={{ required: 'Имя не может быть пустым' }}
          helperText={errors.lastName?.message as string}
        />
        <BaseInput
          required
          label='Фамилия'
          error={errors.firstName ? true : false}
          name='firstName'
          control={control}
          defaultValue={user.user.firstName}
          rules={{ required: 'Фамилия не может быть пустым' }}
          helperText={errors.firstName?.message as string}
        />

      </Container>
      <ButtonContainer>
        <ShowButton
          color='success'
          variant='contained'
          size='large'
        >
          Сменить пароль
        </ShowButton>
        <ShowButton
          color='success'
          variant='contained'
          size='large'
        >
          Показать все авторизованные устройства
        </ShowButton>
      </ButtonContainer>
    </BodyContainer>
  )
}