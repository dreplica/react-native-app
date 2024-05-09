import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

interface UserListingProps {
  imgSource: ImageSourcePropType;
  title: string;
  subtitle: string;
}

const UserListing = (props: UserListingProps) => {
  const { imgSource, title, subtitle } = props;
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{title}</Text>
        <Text style={[styles.text, styles.subtext]}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default UserListing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  details: {
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  subtext: {
    marginTop: 5,
    opacity: 0.4,
  },
});
