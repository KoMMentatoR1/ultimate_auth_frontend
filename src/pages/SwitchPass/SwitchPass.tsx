import { useEffect } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import {
  AuthButtonContainer,
  AuthButton,
} from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInput } from '../../components/base/base-input'
import { useAction } from '../../shared/hooks/useAction'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'

const SwitchPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>()

  const navigator = useNavigate()
  const { switchForgotPass } = useAction()

  const { code } = useParams()
  const { snack } = useTypeSelector(state => state.snackbar)

  const onSubmit: SubmitHandler<FieldValues> = data =>
    switchForgotPass(code!, data.password)

  useEffect(() => {
    if (snack && snack.message === 'Пароль успешно изменен') {
      navigator(`/login}`)
    }
  }, [snack])

  return (
    <AuthPageLayout title='ua' subTitle='Switch password' simpleAuth={false}>
      <FormContainer>
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
            onClick={() => navigator('/login')}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            return to login
          </AuthButton>
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
            size='large'
          >
            Switch password
          </AuthButton>
        </AuthButtonContainer>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default SwitchPass
