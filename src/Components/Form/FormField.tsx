import { StyleSheet, Text, TextInputProps, View } from "react-native";
import {useFormikContext} from "formik";
import AppTextInput from "../AppTextInput";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ErrorMessage from "./ErrorMessage";

interface FormFieldProps extends TextInputProps{
    name: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const FormField = (props: FormFieldProps) => {
    const {icon, name, placeholder, ...rest} = props;
    const {handleBlur, handleChange, errors} = useFormikContext();
    console.log({errors})
  return (
    <>
    <AppTextInput
      autoCapitalize="none"
      autoCorrect={false}
      icon={icon}
      placeholder={placeholder}
      onBlur={handleBlur(name)}
      onChangeText={handleChange(name)}
      {...rest}
    />
    <ErrorMessage error={(errors as any)[name] as string}/>
    </>
  );
};

export default FormField;
