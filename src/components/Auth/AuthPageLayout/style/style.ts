import { styled } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface Props {
  simpleAuth: boolean
}

export const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.background.main,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '30px 0',
  margin: '0 auto',
  transition: 'background 0.1s linear',
}))

export const Container = styled('div')((props: Props & { theme: Theme }) => ({
  width: props.simpleAuth ? '60%' : '40%',
  marginRight: 'auto',
  marginLeft: 'auto',
  position: 'relative',

  '@media (max-width: 1200px)': {
    width: '60%',
  },
  '@media (max-width: 930px)': {
    width: '70%',
  },
  '@media (max-width: 600px)': {
    width: '90%',
  },

  '&:after': props.simpleAuth
    ? {
        content: "''",
        position: 'absolute',
        top: '2px',
        left: '50%',
        height: '99%',
        width: '3px',
        background: props.theme.primary.main,
        boxShadow: props.theme.shadow.dashboard,
      }
    : {},
}))

export const DashboardContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  border: `3px solid ${theme.primary.main}`,
  borderRadius: `24px`,
  boxShadow: theme.shadow.dashboard,
  transition:
    'background 0.1s linear, border 0.1s linear, boxShadow 0.1s linear',
}))

export const Dashboard = styled('div')((props: Props) => ({
  width: props.simpleAuth ? '50%' : '100%',
}))

export const Title = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '50px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.primary.main,
  textShadow: theme.mode === 'dark' ? `${theme.primary} 0 0 8px` : 'none',
  marginBottom: '15px',
  paddingTop: '45px',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, tcolor 0.1s linear',
}))

export const SubTitle = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '32px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.primary.main,
  textShadow: theme.mode === 'dark' ? `${theme.primary} 0 0 8px` : 'none',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, color 0.1s linear',
}))

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  padding: 30px;
`
export const ThemButtonContainer = styled('div')`
  position: absolute;
  right: 10px;
  top: 10px;
`
