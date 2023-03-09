import { FC } from 'react'
import { Container } from '../style/style'

interface BaseContainerProps {
  children?: React.ReactNode
}

export const BaseContainer: FC<BaseContainerProps> = ({ children }) => {
  return <Container>{children}</Container>
}
