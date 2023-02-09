import {
  SimpleAuthButton,
  SimpleAuthButtonContainer,
  SimpleAuthLayout,
  Title,
} from '../style/style'
import GoogleIcon from '@mui/icons-material/Google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faYandex } from '@fortawesome/free-brands-svg-icons'
import { FC } from 'react'

interface SimpleAuthProps {
  authMode?: 'registration' | 'login'
}

export const SimpleAuth: FC<SimpleAuthProps> = ({ authMode = 'login' }) => {
  return (
    <SimpleAuthLayout>
      <SimpleAuthButtonContainer>
        <Title>
          Simple {authMode === 'login' ? 'authorization' : 'registration'}
        </Title>
        <SimpleAuthButton variant='contained' startIcon={<GoogleIcon />}>
          {authMode === 'login' ? 'Authorization' : 'Registration'} using google
        </SimpleAuthButton>
        <SimpleAuthButton
          variant='contained'
          startIcon={<FontAwesomeIcon icon={faYandex} />}
        >
          {authMode === 'login' ? 'Authorization' : 'Registration'} using yandex
        </SimpleAuthButton>
        <SimpleAuthButton
          variant='contained'
          startIcon={<FontAwesomeIcon icon={faVk} />}
        >
          {authMode === 'login' ? 'Authorization' : 'Registration'} using VK
        </SimpleAuthButton>
      </SimpleAuthButtonContainer>
    </SimpleAuthLayout>
  )
}
