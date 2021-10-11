import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../helpers/Firebase/database';

export const useGetPreferences = () => {
  const { auth } = useSelector((state) => state);
  const [userPreferences, setUserPreferences] = useState([]);
  const [preferencesLoading, setPreferencesLoading] = useState(false);
  useEffect(() => {
    if (auth.loged) {
      const GetUser = async () => {
        setPreferencesLoading(true);
        await getUser(auth.uid).then(async (data) => {
          setUserPreferences([
            data.configuration.preferences[0],
            data.configuration.preferences[1],
          ]);
        });
        setPreferencesLoading(false);
      };
      GetUser();
    }
  }, [auth.uid, auth.loged]);

  return [userPreferences, preferencesLoading];
};
