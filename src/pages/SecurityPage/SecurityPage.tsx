import React from 'react'
import { BaseContainer } from '../../components/base/base-container'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'
import { SecurityBody } from '../../components/Security/ui/SecurityBody'

const SecurityPage = () => {
  return (
    <BaseContainer>
      <ProfileLayout>
        <SecurityBody />
      </ProfileLayout>
    </BaseContainer>
  )
}

export default SecurityPage