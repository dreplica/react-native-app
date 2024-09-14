import { KeyboardAvoidingView, Platform, Text, View, ScrollView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Image } from "expo-image";
import styles from "./styles";
import UserListing from "../../Components/UserListing";
import { useRoute } from "@react-navigation/native";
import AppTextInput from "../../Components/AppTextInput";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import * as Notifications from "expo-notifications";

type ImageType = { url: string; thumbnailUrl: string };
type RouteParams = {
  params: { images: ImageType[]; title: string; price: string };
};

const ItemListingScreen = () => {
  const { params } = useRoute() as RouteParams;
  const [message, setMessage] = useState('');

  const onHandleChange = (value: string) => {
    console.log(value)
    setMessage(value);
  }

  const sendLocalNotification = () => {
    Notifications?.scheduleNotificationAsync({
      content: {
        title: 'mee',
        body: message
      },
      trigger: {
        seconds: 2
      }
    })
  }

  console.log({ params: params.images });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.wrapper}>
            <Image
              source={{ uri: params.images[0].url }}
              placeholder={{ uri: params.images[0].thumbnailUrl }}
              placeholderContentFit="cover"
              style={styles.imageItem}
              transition={500}
              priority="high"
              contentFit="cover"
            />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{params.title}</Text>
              <Text style={styles.subtitle}>{params.price}</Text>
            </View>
          </View>
        </View>
        <UserListing
          title="Mosh Hamedini"
          subtitle="5 listings"
          imgSource={require("../../assets/mosh.jpg")}
        />
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <AppTextInput
            placeholder="Message"
            keyboardType="default"
            value={message}
            onChangeText={onHandleChange}
            textContentType="none"
          />
          <Button title="Contact Seller" color="red" onPress={sendLocalNotification} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ItemListingScreen;
