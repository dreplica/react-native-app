import { createRef, createContext } from "react";

export const RootNavigatorContext = createContext<any>(null)

const navigator = createRef<any>();
export default {
  navigator,
};
