import * as SecureStore from "expo-secure-store";

const prefix = "auth-";

const getItem = async <T>(key: string) => {
  try {
    return SecureStore.getItemAsync(prefix + key);
  } catch (error) {
    console.error(error);
  }
};

const setItem = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(prefix + key, value);
  } catch (error) {
    console.error(error);
  }
};

const removeItem = (key: string) => {
  try {
    return SecureStore.deleteItemAsync(prefix + key);
  } catch (error) {
    console.error(error);
  }
};

export default {
  getItem,
  setItem,
  removeItem,
};
