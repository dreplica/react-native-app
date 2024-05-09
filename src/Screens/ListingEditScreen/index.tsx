import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import ScreenLayout from "../../Components/ScreenLayout";
import AppForm from "../../Components/Form/AppForm";
import FormField from "../../Components/Form/FormField";
import FormButton from "../../Components/Form/FormButton";
import Picker from "../../Components/Picker";
import { useState } from "react";
import PickerDisplay from "../../Components/Picker/PickerDisplay";

const validation = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .trim()
    .email("Invalid email address")
    .label("Email"),
  password: Yup.string().required("Required").trim().min(6).label("Password"),
  name: Yup.string().required("Required").trim().label("name"),
});

const index = () => {

  const [visible, setVisible] = useState(false);

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <AppForm
            initialValues={{ email: "", password: "", name: "" }}
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
            />
            <Picker
              visible={visible}
              setVisible={setVisible}
              items={[]}
              onChange={() => {}}
              value=""
              placeholder="Category"
            >
              <PickerDisplay />
            </Picker>
            <FormField name="description" placeholder="description" />
            <FormButton title="Post" />
          </AppForm>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default index;

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
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
});
