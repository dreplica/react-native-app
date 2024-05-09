import { Text, View, Image } from "react-native";
import styles from "./styles";
import UserListing from "../../Components/UserListing";

const ItemListingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../assets/jacket.jpg")}
            style={styles.imageItem}
            resizeMode="cover"
          />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Red jacket for sale!!</Text>
            <Text style={styles.subtitle}>$100</Text>
          </View>
        </View>
      </View>
      <UserListing
        title="Mosh Hamedini"
        subtitle="5 listings"
        imgSource={require("../../assets/mosh.jpg")}
      />
    </View>
  );
};

export default ItemListingScreen;
