import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import ImageInputRender from "./ImageInputRender";

type ImagePickerType = typeof ImagePicker;

const requestImagePermission = async (ImagePicker: ImagePickerType) => {
  const { granted } = await ImagePicker.getCameraPermissionsAsync();
  if (granted) return;
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  console.log("request", { permission });
  if (!permission.granted) {
    alert("You need to provide permission access to access Camera");
  }
};

const processImageSelected = async (ImagePicker: ImagePickerType) => {
  const { granted } = await ImagePicker.getCameraPermissionsAsync();
  if (!granted) return;
  const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
    allowsMultipleSelection: true,
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.5,
  });
  console.log({ assets, canceled });

  if (canceled) return;
  console.log({ assets, canceled });
  return assets.map((asset) => asset.uri);
};

const ImageInput = () => {
  const [imagesUri, setImagesUri] = useState<string[]>([]);

  const onChangeImage = (assets: string[]) => {
    const newImagesUr = [...imagesUri, ...assets];
    setImagesUri(newImagesUr);
  };

  const onDeleteImage = (index: number) => {
    Alert.alert("Delete Image?", "Are you sure you want to delete this image", [
      {
        text: "Delete",
        onPress() {
          const newImagesUri = imagesUri.filter((_, ind) => ind !== index);
          setImagesUri(newImagesUri);
        },
      },
      {
        text: "Keep",
        onPress() {
          return;
        },
      },
    ]);
  };

  const handleImageChnage = async () => {
    const assets = await processImageSelected(ImagePicker);
    if (assets?.length) {
      onChangeImage(assets);
    }
  };

  useEffect(() => {
    requestImagePermission(ImagePicker);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={imagesUri}
        scrollToOverflowEnabled
        horizontal
        keyExtractor={(item, ind) => item + ind}
        renderItem={({ item, index }) => (
          <ImageInputRender
            uri={item}
            handleImageDelete={() => {
              onDeleteImage(index);
            }}
          />
        )}
        ListHeaderComponent={() => (
          <TouchableWithoutFeedback onPress={handleImageChnage}>
            <View style={styles.uploadContainer}>
              <MaterialCommunityIcons name="camera" size={50} color="#d2d2d2" />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: 100,
    width: "auto",
  },
  uploadContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
});

export default ImageInput;
