import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { jwtDecode } from "jwt-decode";
import * as Yup from "yup";
import { useContext, useState } from "react";

import ScreenLayout from "../../Components/ScreenLayout";
import FormField from "../../Components/Form/FormField";
import FormButton from "../../Components/Form/FormButton";
import AppForm from "../../Components/Form/AppForm";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../Navigation/Routes";
import { loginUser } from "../../API/ApiLayers";
import { FormikValues } from "formik";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { UserType } from "../../Context/AuthContext/AuthContextType";
import SecureStore from "../../Store/SecureStore";

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
  const UserDataContext = useContext(AuthContext);
  const [apiError, setApiError] = useState(false);

  const handleSubmit = async ({ email, password }: FormikValues) => {
    setApiError(false);
    const { data, problem, ok, originalError } = await loginUser(
      email,
      password
    );
    if (!ok) {
      console.error(originalError, problem);
      return setApiError(true);
    }
    console.log({data})
    const user = jwtDecode(data as string) as UserType;
    console.log({user})
    UserDataContext?.setUser(user);
    SecureStore.setItem('token', data as string)
  };

  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-red.png")}
        />
        <View style={styles.form}>
          {apiError && (
            <Text style={{ color: "red" }}>Invalid username/password</Text>
          )}
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validation}
            onSubmit={handleSubmit}
          >
            <FormField
              icon="email"
              name="email"
              placeholder="Email"
              keyboardType="default"
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
                  navigator.navigate(Routes.SIGN_UP as unknown as never);
                }}
              >
                <Text style={{ color: "red" }}>Forgot password?</Text>
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
