import { DimensionValue, StyleSheet, Text, TextInputProps, View } from "react-native";
import {useFormikContext} from "formik";
import AppTextInput from "../AppTextInput";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ErrorMessage from "./ErrorMessage";

interface FormFieldProps extends TextInputProps{
    name: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    width?: DimensionValue;
}

const FormField = (props: FormFieldProps) => {
    const {icon, name, ...rest} = props;
    const {handleBlur, errors, setFieldValue, values} = useFormikContext();
  return (
    <>
    <AppTextInput
      autoCapitalize="none"
      autoCorrect={false}
      icon={icon}
      onBlur={handleBlur(name)}
      onChangeText={(value) => setFieldValue(name, value)}
      value={(values as any)[name]}
      {...rest}
    />
    <ErrorMessage error={(errors as any)[name] as string}/>
    </>
  );
};

export default FormField;
