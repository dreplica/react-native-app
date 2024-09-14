import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import {} from "lottie-react-native";

import Card from "../../Components/Card/Card";
import ScreenLayout from "../../Components/ScreenLayout";
import {} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";
import { getUserListing } from "../../API/ApiLayers";
import Button from "../../Components/Button/Button";
import colors from "../../config/colors";
import ActivityIndicator from "../../Components/ActivityIndicator";
import useFetch from "../../Hooks/useFetch";
import { ListingType } from "./types";

const ItemsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, error, loading, request } = useFetch<ListingType[]>(getUserListing);
  const navigator = useNavigation<{
    navigate<T, U>(val: T, option?: U): void;
  }>();

  useEffect(() => {
    request();
  }, [])

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {error && (
          <View style={{ width: "100%" }}>
            {!loading ? (
              <Text
                style={{ color: "red", textAlign: "center", marginBottom: 10 }}
              >
                An error occured while accessing data
              </Text>
            ) : (
              <ActivityIndicator visible={loading} />
            )}
            <Button title="Retry" onPress={() => {}} color={colors.danger} />
          </View>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList
          style={{ padding: 5 }}
          data={data}
          keyExtractor={(item) => item.title}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await request();
            setTimeout(() => setRefreshing(false), 3000);
          }}
          renderItem={({ item }) => (
            <Card
              imgSource={item.images[0].url}
              thumbnail={item.images[0].thumbnailUrl}
              title={item.title}
              subtitle={`#${item.price}`}
              onPress={() => {
                navigator.navigate(Routes.LISTING_DETAILS, item);
              }}
            />
          )}
        />
      </View>
    </ScreenLayout>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
