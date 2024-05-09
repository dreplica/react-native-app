import { StyleSheet, View } from "react-native";
import * as Yup from 'yup';

import ScreenLayout from "../../Components/ScreenLayout";
import AppForm from "../../Components/Form/AppForm";
import FormField from "../../Components/Form/FormField";
import FormButton from "../../Components/Form/FormButton";

const validation = Yup.object().shape({
    email: Yup.string()
      .required("Required")
      .trim()
      .email("Invalid email address")
      .label("Email"),
    password: Yup.string().required("Required").trim().min(6).label("Password"),
    name: Yup.string().required("Required").trim().label("name"),
  });

const RegisterScreen = () => {
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
              icon="account"
              name="name"
              placeholder="Name"
              keyboardType="default"
              textContentType="name"
            />
            <FormField
              icon="email"
              name="email"
              placeholder="Email"
              keyboardType="decimal-pad"
              textContentType="emailAddress"
            />
            <FormField
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              autoComplete="off"
              textContentType="password"
            />
            <FormButton title="Register" />
          </AppForm>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default RegisterScreen;

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