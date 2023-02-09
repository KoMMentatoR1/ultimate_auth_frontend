import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  AuthButton,
  AuthButtonContainer,
} from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInput } from '../../components/base/base-input'
import { useAction } from '../../shared/hooks/useAction'

const RegisterPage = () => {
  const navigator = useNavigate()

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const { registration } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    registration(data.email, data.password, data.firstName, data.lastName)

  return (
    <AuthPageLayout authMode='registration' title='UA' subTitle='Register'>
      <FormContainer>
        <BaseInput
          required
          label='LastName'
          error={errors.lastName ? true : false}
          name='lastName'
          control={control}
          rules={{ required: 'LastName is required' }}
          helperText={errors.lastName?.message as string}
        />
        <BaseInput
          required
          label='FirstName'
          error={errors.firstName ? true : false}
          name='firstName'
          control={control}
          rules={{ required: 'FirstName is required' }}
          helperText={errors.firstName?.message as string}
        />
        <BaseInput
          required
          label='Email'
          error={errors.email ? true : false}
          name='email'
          control={control}
          helperText={errors.email?.message as string}
          rules={{
            required: 'Email Address is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`,{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Email is not valid',
            },
          }}
        />
        <BaseInput
          required
          label='Password'
          error={errors.password ? true : false}
          name='password'
          control={control}
          password
          helperText={errors.password?.message as string}
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Password very small' },
            maxLength: { value: 255, message: 'Repeat password very big' },
          }}
        />
        <BaseInput
          required
          label='Repeat password'
          error={errors.repeatPassword ? true : false}
          name='repeatPassword'
          control={control}
          password
          helperText={errors.repeatPassword?.message as string}
          rules={{
            required: 'Repeat password is required',
            minLength: { value: 8, message: 'Repeat password very small' },
            maxLength: { value: 255, message: 'Repeat password very big' },
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match'
              }
            },
          }}
        />
        <AuthButtonContainer>
          <AuthButton
            fullWidth
            onClick={() => navigator('/login')}
            color='success'
            variant='contained'
            size='large'
          >
            back to login
          </AuthButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            sign in
          </AuthButton>
        </AuthButtonContainer>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default RegisterPage
