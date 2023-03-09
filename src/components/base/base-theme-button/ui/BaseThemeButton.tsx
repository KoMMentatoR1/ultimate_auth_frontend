import { IconButton } from '@mui/material'
import { useTypeSelector } from '../../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../../shared/hooks/useAction'
import {
  CustomDarkModeIcon,
  CustomLightModeIcon,
  ThemeButton,
} from '../style/style'
import { FC } from 'react'

interface BaseThemeButtonProps {
  fontSize?: string
}

export const BaseThemeButton: FC<BaseThemeButtonProps> = ({ fontSize }) => {
  const { mode } = useTypeSelector(state => state.theme)
  const { switchTheme } = useAction()

  return (
    <ThemeButton>
      <IconButton
        size='large'
        color='inherit'
        onClick={() => {
          mode === 'light' ? switchTheme('dark') : switchTheme('light')
        }}
      >
        {mode === 'light' ? (
          <CustomDarkModeIcon sx={{ fontSize: fontSize }} />
        ) : (
          <CustomLightModeIcon sx={{ fontSize: fontSize }} />
        )}
      </IconButton>
    </ThemeButton>
  )
}
