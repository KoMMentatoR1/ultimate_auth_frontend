import { useEffect } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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

const ForgotPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>()

  const navigator = useNavigate()
  const { forgotPass, validateCode } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    snack && snack.variant !== 'success' && !watch('code')
      ? forgotPass(data.email)
      : validateCode(data.code)

  const { snack } = useTypeSelector(state => state.snackbar)

  useEffect(() => {
    if (snack && snack.message === 'Код принят') {
      navigator(`/forgotPass/${watch('code')}`)
    }
  }, [snack])

  return (
    <AuthPageLayout title='ua' subTitle='Forgot password' simpleAuth={false}>
      <FormContainer>
        <BaseInput
          rules={{
            required: 'Email address is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Email is not valid',
            },
          }}
          required
          error={errors.email ? true : false}
          label='Email'
          name='email'
          helperText={errors.email?.message as string}
          control={control}
        />
        <BaseInput
          rules={{
            required: 'Code is required',
          }}
          required
          password
          disabled={
            snack &&
            snack.message !== 'Код отправлен на почту' &&
            !watch('code')
          }
          error={errors.code ? true : false}
          label='Code'
          name='code'
          helperText={errors.code?.message as string}
          control={control}
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
            {!(snack && snack.message === 'Код отправлен на почту') &&
            !watch('code')
              ? 'send code'
              : 'verify code'}
          </AuthButton>
        </AuthButtonContainer>
      </FormContainer>
    </AuthPageLayout>
  )
}

export default ForgotPass
