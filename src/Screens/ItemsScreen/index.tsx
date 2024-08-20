import { FlatList, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import ScreenLayout from "../../Components/ScreenLayout";
import {} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";

const ListItems = [
  {
    image: require("../../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "$100",
  },
  {
    image: require("../../assets/couch.jpg"),
    title: "Living room couch",
    price: "$300",
  },
];

const ItemsScreen = () => {
  const [dataItems, setDataItems] = useState(ListItems);
  const [refreshing, _setRefreshing] = useState(false);
  const navigator = useNavigation();
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <FlatList
          style={{ padding: 5 }}
          data={dataItems}
          keyExtractor={(item) => item.title}
          refreshing={refreshing}
          onRefresh={() => {
            _setRefreshing(true);
            setDataItems([ListItems[0]]);
            setTimeout(() => {
              _setRefreshing(false);
            }, 7000);
          }}
          renderItem={({ item }) => (
            <Card
              imgSource={item.image}
              title={item.title}
              subtitle={item.price}
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
