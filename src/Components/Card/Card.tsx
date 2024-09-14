import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import SubDetail from "../SubDetail";

interface CardProps {
  imgSource: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  onPress(): void;
}

const Card = (props: CardProps) => {
  const { imgSource, title, subtitle, thumbnail, onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={{ uri: imgSource }}
            style={styles.image}
            contentFit="cover"
            cachePolicy='memory'
            placeholder={{uri: thumbnail}}
            placeholderContentFit="cover"
            transition={500}
          />
          <SubDetail title={title} subtitle={subtitle} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 310,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 20,
  },
  wrapper: {
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
});
