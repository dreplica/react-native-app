import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";

import ScreenLayout from "../../Components/ScreenLayout";
import FormField from "../../Components/Form/FormField";
import FormButton from "../../Components/Form/FormButton";
import AppForm from "../../Components/Form/AppForm";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";

const validation = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .trim()
    .email("Invalid email address")
    .label("Email"),
  password: Yup.string().required("Required").trim().min(6).label("Password"),
});

const LoginScreen = () => {
  const navigator = useNavigation();
  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-red.png")}
        />
        <View style={styles.form}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
              navigator.navigate("mainscreen");
            }}
          >
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
            <View style={{ width: "100%", marginBottom: 10 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigator.navigate(Routes.SIGN_UP);
                }}
              >
                <Text style={{ color: "red" }}>Forgot password?</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigator.navigate(Routes.SIGN_UP);
                }}
              >
                <Text>Signup</Text>
              </TouchableWithoutFeedback>
            </View>
            <FormButton title="Submit" />
          </AppForm>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
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
    marginTop: 80,
  },
});
