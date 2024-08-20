import { Text, View, Image, ImageSourcePropType } from "react-native";
import styles from "./styles";
import UserListing from "../../Components/UserListing";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  params: { image: ImageSourcePropType; title: string; price: string };
};

const ItemListingScreen = () => {
  const { params } = useRoute() as RouteParams;
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.wrapper}>
          <Image
            source={params.image}
            style={styles.imageItem}
            resizeMode="cover"
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
    </View>
  );
};

export default ItemListingScreen;
