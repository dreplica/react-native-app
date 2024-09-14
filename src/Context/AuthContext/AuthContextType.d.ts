export type UserType = {
  email: string;
  iat: string;
  name: string;
  userId: string;
};

export interface AuthContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export interface AuthContextProps {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}
