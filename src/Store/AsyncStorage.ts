import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const ExpiredTokenInDays = 100;
const ExpiredAPIInMinutes = 5;

export const isExpired = (
  timeStamp: Date,
  unit: moment.unitOfTime.Diff,
  check: number
) => {
  const now = moment(Date.now());
  const time = moment(timeStamp);
  return now.diff(time, unit, true) > check;
};

export const storeItem = async <T>(name: string, value: T) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(`${prefix}-${name}`, JSON.stringify(item));
  } catch (error) {
    console.error;
  }
};

export const getItem = async <T>(name: string) => {
  try {
    const item = await AsyncStorage.getItem(`${prefix}-${name}`);
    if (!item) {
      return null;
    }

    const { value, timeStamp } = JSON.parse(item);
    if (isExpired(timeStamp, "minute", ExpiredAPIInMinutes)) {
      await AsyncStorage.removeItem(`${prefix}-${name}`);
      return null;
    }

    return (JSON.parse(item) as { value: T }).value;
  } catch (error) {
    console.error(error);
  }
};
