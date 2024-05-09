import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
} from "react-native";
import SubDetail from "../SubDetail";

interface CardProps {
  imgSource: ImageSourcePropType;
  title: string;
  subtitle: string;
}

const Card = (props: CardProps) => {
  const { imgSource, title, subtitle } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={imgSource} style={styles.image} resizeMode="cover" />
        <SubDetail title={title} subtitle={subtitle} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 310,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 30,
    backgroundColor: "white",
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
});
