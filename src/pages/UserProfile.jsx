import React from 'react';
import ProfileSocials from '../components/Profile/ProfileSocials';

import GoToTop from '../components/GoToTop/GoToTop';

import '../sass/pages/profile.scss';

const UserProfile = () => {
  return (
    <>
      <GoToTop />
      <div className='profile --mt-large --mb-large'>
        <ProfileSocials />
      </div>
    </>
  );
};

export default UserProfile;
