import {
  OAuthLink,
  SimpleAuthButton,
  SimpleAuthButtonContainer,
  SimpleAuthLayout,
  Title,
} from '../style/style'
import GoogleIcon from '@mui/icons-material/Google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYandex } from '@fortawesome/free-brands-svg-icons'
import { FC } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { useAction } from '../../../../shared/hooks/useAction'

interface SimpleAuthProps {
  authMode?: 'registration' | 'login'
}

export const SimpleAuth: FC<SimpleAuthProps> = ({ authMode = 'login' }) => {
  const { oauthGoogleLogin } = useAction()

  const login = useGoogleLogin({
    onSuccess: tokenResponse => oauthGoogleLogin(tokenResponse.access_token),
    scope: 'profile email',
    flow: 'implicit',
  })

  return (
    <SimpleAuthLayout>
      <SimpleAuthButtonContainer>
        <Title>
          Simple {authMode === 'login' ? 'authorization' : 'registration'}
        </Title>
        <SimpleAuthButton
          variant='contained'
          onClick={() => login()}
          startIcon={<GoogleIcon />}
        >
          {authMode === 'login' ? 'Authorization' : 'Registration'} using google
        </SimpleAuthButton>

        <OAuthLink
          to={
            'https://oauth.yandex.ru/authorize?response_type=code&client_id=bcdec515185c4acfb70bff5585278224'
          }
        >
          <SimpleAuthButton
            variant='contained'
            startIcon={<FontAwesomeIcon icon={faYandex} />}
          >
            {authMode === 'login' ? 'Authorization' : 'Registration'} using
            yandex
          </SimpleAuthButton>
        </OAuthLink>
      </SimpleAuthButtonContainer>
    </SimpleAuthLayout>
  )
}
