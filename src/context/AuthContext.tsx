import React, {
  FC,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from 'react';
import {User} from 'types/index';
import {useQuery} from 'react-query';
import {API_URL, get} from '@api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Auth = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
  user: null,
  setUser() {
    // do nothing
  },
});

export const useAuth = () => {
  const context = useContext(Auth);

  return context;
};

const AuthContext: FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  useQuery(
    'profile',
    async () =>
      await get(API_URL + '/profile_details', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      }),
    {
      onSuccess(data) {
        setUser(data.data);
      },
      onError(err: Error) {
        if (err.message.includes('Unauthorized')) {
        }
      },
    },
  );

  return (
    <Auth.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
