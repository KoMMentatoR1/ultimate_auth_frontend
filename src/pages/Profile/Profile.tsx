import { BaseContainer } from '../../components/base/base-container'
import { ProfileBody } from '../../components/Profile/ProfileBody'
import { ProfileLayout } from '../../components/Profile/ProfileLayout'

const Profile = () => {
  return (
    <BaseContainer>
      <ProfileLayout>
        <ProfileBody />
      </ProfileLayout>
    </BaseContainer>
  )
}

export default Profile
