import { View, Text } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import {
  addEventListener as netInfoAddEventListener,
  NetInfoSubscription,
} from "@react-native-community/netinfo";

const useNetInfoCustom = () => {
  const [hasInternet, setHasInternet] = useState(false);
  let unsubscribe: NetInfoSubscription; // = useRef<NetInfoSubscription>(null);

  useEffect(() => {
    unsubscribe = netInfoAddEventListener((state) => {
      setHasInternet(state.type !== 'unknown' && !!state.isConnected && !!state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    hasInternet,
  };
};

export default useNetInfoCustom;
