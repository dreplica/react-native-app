import { useFormikContext } from "formik";

import Button from "../Button/Button";
import Colors from "../../config/colors";
import { GestureResponderEvent } from "react-native";

type SubmitPress = (event: GestureResponderEvent) => void;

const FormButton = (props: { title: string }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button title={props.title} color={Colors.primary} onPress={handleSubmit as unknown as SubmitPress} />
  );
};

export default FormButton;
