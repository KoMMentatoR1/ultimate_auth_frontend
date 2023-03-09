import { useForm } from 'react-hook-form'
import { useTypeSelector } from '../../../../shared/hooks/useTypeSelector'
import { BaseInput } from '../../../base/base-input'
import { BodyContainer, Container, Header } from '../style/style'

export const ProfileBody = () => {
  const {
    control,
    formState: { errors },
  } = useForm()

  const { user } = useTypeSelector(store => store.auth)

  return (
    <BodyContainer>
      <Header>Профиль</Header>
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
    </BodyContainer>
  )
}
