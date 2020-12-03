import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from 'utils/initFirebase';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from 'utils/userCookies';
import { mapUserData } from 'utils/mapUserData';

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/login')
      })
      .catch((e) => {
        console.error(e)
      })
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const userData = await mapUserData(user)
          setUserCookie(userData)
          setUser(userData)
        } else {
          removeUserCookie()
          setUser()
        }
      })

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      router.push('/')
      return
    }
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    }
  }, []);

  return { user, logout }
};

export { useUser };