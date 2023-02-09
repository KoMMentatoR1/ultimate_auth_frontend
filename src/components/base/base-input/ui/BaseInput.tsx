import { IconButton } from '@mui/material'
import { FC, useState } from 'react'
import { Controller, UseControllerProps } from 'react-hook-form'
import { Input } from '../style/style'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

interface BaseInputProps {
  control: UseControllerProps['control']
  label: string
  name: string
  defaultValue?: string
  rules?: UseControllerProps['rules']
  required?: boolean
  error?: boolean
  helperText?: string
  password?: boolean
  disabled?: boolean
}

const BaseInput: FC<BaseInputProps> = ({
  control,
  label,
  name,
  defaultValue = '',
  rules,
  required = false,
  error,
  helperText,
  password = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          label={label}
          required={required}
          fullWidth
          disabled={disabled}
          error={error}
          type={password ? (showPassword ? 'text' : 'password') : 'text'}
          variant='standard'
          helperText={helperText}
          InputProps={{
            endAdornment: password && (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
      )}
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={disabled ? {} : rules}
    />
  )
}

export default BaseInput
