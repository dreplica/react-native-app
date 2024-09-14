import { useEffect, useState } from "react";
import SecureStore from "../Store/SecureStore";
import { UserType } from "../Context/AuthContext/AuthContextType";
import { jwtDecode } from "jwt-decode";

export function useAuthToken(setAppIsReady: any) {
  const [user, setUser] = useState<UserType | null>(null);

  const waitForReadiness = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        setAppIsReady(true);
        resolve;
      }, 2000)
    );
  };

  const getSecureToken = async (key: string) => {
    try {
      const tokenValue = await SecureStore.getItem(key);
      if (!tokenValue) {
        setUser(null);
        return;
      }
      const userData = jwtDecode(tokenValue) as UserType;
      setUser(userData);
    } catch (error) {
      console.warn(error);
    } finally {
      await waitForReadiness();
    }
  };

  useEffect(() => {
    getSecureToken("token");
  }, []);

  return {
    user,
    setUser,
  };
}
