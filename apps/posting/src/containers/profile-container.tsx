import React, { useEffect, useState } from 'react';
import { getUser } from '../apis';
import { type UserType } from '../types';
import { useAuth0Client } from '@mono/shell-router';
import { Profile } from '@mono/ui-kit';

const ProfileContainer = () => {
  const auth0Client = useAuth0Client();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const user = await getUser(token);
        setUser(user);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  return <Profile user={user} />;
};

export default ProfileContainer;
