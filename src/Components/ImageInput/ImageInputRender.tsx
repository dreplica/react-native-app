import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";

const ImageInputRender = ({
  uri,
  handleImageDelete,
}: {
  uri: string;
  handleImageDelete(): void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={handleImageDelete}>
      <Image source={{ uri }} style={styles.images} />
    </TouchableWithoutFeedback>
  );
};

export default ImageInputRender;

const styles = StyleSheet.create({
  images: {
    height: 100,
    width: 100,
    borderRadius: 6,
    marginRight: 8,
  },
});
