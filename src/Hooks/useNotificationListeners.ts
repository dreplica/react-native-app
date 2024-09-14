import { useContext, useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import { getNotificationToken } from "../Components/PushNotification/PushNotification";
import rootNavigator, { RootNavigatorContext } from "../Navigation/rootNavigator";

const useNotificationListeners = () => {
  const [notification, _setNotification] = useState();
  const rootNavigator = useContext(RootNavigatorContext);

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    getNotificationToken();
    notificationListener.current =
      Notifications.addNotificationReceivedListener((event) => {
        // setNotification(event);
        console.log({ event });
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // setNotification(event);
        console.log({ response });
        rootNavigator?.navigate('messages')
      });

    return () => {
      notificationListener?.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener?.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return {
    notification,
  };
};

export default useNotificationListeners;
