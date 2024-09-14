import * as Device from "expo-device";
import Constants from "expo-constants";
import * as Notification from "expo-notifications";
import { Platform } from "react-native";
import { updatePushNotificationToken } from "../../API/ApiLayers";

export const setNotificationHandler = () => {
  Notification.setNotificationHandler({
    async handleNotification() {
      return {
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge: false,
      };
    },
  });
};

const configureAndroidNotification = async () => {
  if (Platform.OS !== "android") return;
  await Notification.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notification.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: "#ff231f7c",
  });
};

const requestPermission = async () => {
  if (Device.isDevice) {
    const permission = await Notification.requestPermissionsAsync();
    return !permission.granted ? false : true;
  }
  throw new Error("Please use physical device");
};

const registerPhoneNotification = async () => {
  const { granted } = await Notification.getPermissionsAsync();
  if (granted) return;
  if (!requestPermission()) {
    console.warn("Permission not granted to get push notification");
  }

  const projectId =
    Constants?.expoConfig?.extra?.eas?.projectId ||
    Constants?.easConfig?.projectId;

  if (!projectId) {
    throw new Error("Cant get project id");
  }

  const { data: token } = await Notification.getExpoPushTokenAsync({
    projectId,
  });
  if (token) {
    console.log({ token });
    await updatePushNotificationToken(token);
  }
};

export const getNotificationToken = async () => {
  try {
    await configureAndroidNotification();
    await registerPhoneNotification();
    setNotificationHandler();
  } catch (error) {
    console.error(error);
  }
};
