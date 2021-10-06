import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileSocials from '../components/Profile/ProfileSocials';

import '../sass/pages/profile.scss';

const UserProfile = () => {
  return (
    <div className='profile'>
      <ProfileSocials />
    </div>
  );
};

export default UserProfile;
