import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Card from "../../Components/Card/Card";

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
  return (
    <View style={styles.container}>
      <FlatList
        data={dataItems}
        keyExtractor={(item) => item.title}
        refreshing={refreshing}
        onRefresh={() => {
          setDataItems([ListItems[0]]);
        }}
        renderItem={({ item }) => (
          <Card
            imgSource={item.image}
            title={item.title}
            subtitle={item.price}
          />
        )}
      />
    </View>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 60,
  },
});
