import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";

enum CAMERA_STATUS {
  UNDETERMINED = "undetermined",
  GRANTED = "granted",
}

const ImageSelector = () => {
  const [uploadedImage, setUploadedImage] = useState<string[]>([]);
  const handleCameraPermission = async () => {
    try {
      const permission = await ImagePicker.getCameraPermissionsAsync();
      console.log({ permission });

      if (permission.status !== ImagePicker.PermissionStatus.GRANTED) {
        ImagePicker.requestCameraPermissionsAsync();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadImage = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({allowsMultipleSelection: true});
      if (canceled) return;
      setUploadedImage(assets.map((item) => item.uri));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="UploadImage" onPress={handleUploadImage} />
      <FlatList
        data={uploadedImage}
        keyExtractor={(item, index) => item + index}
        numColumns={3}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} resizeMode="contain"/>}
      />
    </SafeAreaView>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  image: {
    width: '30%',
    height: 150,
    margin: 7
  }
});
