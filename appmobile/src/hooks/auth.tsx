import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  import api from '../services/api';
  
  interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }
  
  interface authState {
    token: string;
    user: User;
  }
  
  interface SignCredentials {
    email: string;
    password: string;
  }
  
  interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(credentials: SignCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): Promise<void>;
  }
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
  const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<authState>({} as authState);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function loadStorageData(): Promise<void> {
        const [token, user] = await AsyncStorage.multiGet([
          '@VerzelUser:token',
          '@VerzelUser:user',
        ]);
  
        if (token[1] && user[1]) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token[1]}`;
  
          setData({ token: token[1], user: JSON.parse(user[1]) });
        }
  
        setLoading(false);
      }
  
      loadStorageData();
    }, []);
  
    const signIn = useCallback(async ({ email, password }) => {
      const response = await api.post('/session', {
        email,
        password,
      });
  
      const { token, user } = response.data;
  
      await AsyncStorage.multiSet([
        ['@VerzelUser:token', token],
        ['@VerzelUser:user', JSON.stringify(user)],
      ]);
  
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      setData({ token, user });
    }, []);
  
    const signOut = useCallback(async () => {
      await AsyncStorage.multiRemove(['@VerzelUser:token', '@VerzelUser:user']);
  
      setData({} as authState);
    }, []);
  
    const updateUser = useCallback(
      async (user: User) => {
        await AsyncStorage.setItem('@VerzelUser:user', JSON.stringify(user));
  
        setData({
          token: data.token,
          user,
        });
      },
      [setData, data.token],
    );
  
    return (
      <AuthContext.Provider
        value={{ user: data.user, loading, signIn, signOut, updateUser }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };
  