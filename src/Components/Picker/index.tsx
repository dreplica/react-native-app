import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";
import { ReactNode } from "react";

type PickerItemType = { value: string; label: string };

interface PickerProps {
  placeholder?: string;
  value: string;
  onChange(text: string): void;
  items: PickerItemType[];
  visible: boolean;
  setVisible(value: boolean): void;
  children: ReactNode;
}

const Picker = (props: PickerProps) => {
  const { placeholder, value, onChange, items, visible, setVisible, children } = props;

  const valueStyleName = !value ? 'placeholder' : 'value';
  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.container}>
          <Text style={styles[valueStyleName]}>{!value ? placeholder : value}</Text>
          <MaterialIcons name="arrow-down" color={colors.dark} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} transparent animationType="slide" style={styles.modal}>
        {children}
      </Modal>
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "auto",
  },
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 20,
    backgroundColor: colors.light,
    borderRadius: 20,
  },
  placeholder: {
    color: colors.medium
  },
  value: {
    color: colors.dark,
    fontSize: 16,
    flex: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  modal: {
    marginTop: "50%"
  },
});
