import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import ScreenLayout from "../../Components/ScreenLayout";
import AppForm from "../../Components/Form/AppForm";
import FormField from "../../Components/Form/FormField";
import FormButton from "../../Components/Form/FormButton";
import Picker from "../../Components/Picker";
import PickerDisplay from "../../Components/Picker/PickerDisplay";
import ImageInput from "../../Components/ImageInput/ImageInput";

const pickerItems = [
  {
    icon: "lamp",
    label: "Furniture",
    backgroundColor: "pink",
  },
  {
    icon: "car",
    label: "Cars",
    backgroundColor: "orange",
  },
  {
    icon: "camera",
    label: "Cameras",
    backgroundColor: "cyan",
  },
  {
    icon: "cards",
    label: "Games",
    backgroundColor: "teal",
  },
  {
    icon: "glasses",
    label: "Fashion",
    backgroundColor: "gold",
  },
  {
    icon: "map",
    label: "lands",
    backgroundColor: "green",
  },
  {
    icon: "doctor",
    label: "Medical",
    backgroundColor: "red",
  },
  {
    icon: "dog",
    label: "Animals",
    backgroundColor: "brown",
  },
  {
    icon: "knife",
    label: "weapons",
    backgroundColor: "black",
  },
  {
    icon: "phone",
    label: "Mobile",
    backgroundColor: "grey",
  },
  {
    icon: "piano",
    label: "Musical",
    backgroundColor: "violet",
  },
  {
    icon: "bed",
    label: "Apartments",
    backgroundColor: "tan",
  },
];

const validation = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .trim()
    .email("Invalid email address")
    .label("Email"),
  password: Yup.string().required("Required").trim().min(6).label("Password"),
  name: Yup.string().required("Required").trim().label("name"),
});

const ListingEditScreen = () => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
console.log('did location come')
const location = await Location.getCurrentPositionAsync();
console.log(location)

    if (location?.coords) {
      const { latitude, longitude } = location.coords;
      console.log(location.coords)
      setLocation({ latitude, longitude });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
console.log({location})
  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <View style={{ width: "100%", height: "auto", paddingVertical: 10 }}>
          <ImageInput />
        </View>
        <View style={styles.form}>
          <AppForm
            initialValues={{ title: "", price: "", category: "description" }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <FormField
              name="title"
              placeholder="Title"
              keyboardType="default"
            />
            <FormField
              name="price"
              placeholder="Price"
              keyboardType="default"
              width="30%"
            />
            <Picker
              visible={visible}
              setVisible={setVisible}
              value={category}
              placeholder="Category"
              width="50%"
            >
              <FlatList
                data={pickerItems}
                keyExtractor={(item) => item.label}
                numColumns={3}
                renderItem={({ item }) => (
                  <PickerDisplay
                    icon={item.icon}
                    label={item.label}
                    backgroundColor={item.backgroundColor}
                    onPress={() => {
                      setVisible(false);
                      setCategory(item.label);
                    }}
                  />
                )}
              />
            </Picker>
            <FormField name="description" placeholder="description" />
            <FormButton title="Post" />
          </AppForm>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  form: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
});
