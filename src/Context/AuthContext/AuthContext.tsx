import {
  createContext,
} from "react";
import { AuthContextProps } from "./AuthContextType";

export const AuthContext = createContext<AuthContextProps | null>(null);

