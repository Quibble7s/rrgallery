import React from 'react';
import ProfileSocials from '../components/Profile/ProfileSocials';

import '../sass/pages/profile.scss';

const UserProfile = () => {
  return (
    <div className='profile --mt-large --mb-large'>
      <ProfileSocials />
    </div>
  );
};

export default UserProfile;
