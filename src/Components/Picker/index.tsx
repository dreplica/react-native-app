import {
  DimensionValue,
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
import Button from "../Button/Button";
import ScreenLayout from "../ScreenLayout";

type PickerItemType = { value: string; label: string };

interface PickerProps {
  placeholder?: string;
  value: string;
  items: PickerItemType[];
  visible: boolean;
  children: ReactNode;
  width?: DimensionValue;
  onChange(text: string): void;
  setVisible(value: boolean): void;
}

const Picker = (props: PickerProps) => {
  const {
    children,
    placeholder,
    value,
    visible,
    width = "100%",
    setVisible,
  } = props;

  const valueStyleName = !value ? "placeholder" : "value";
  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={[styles.container, { width }]}>
          <Text style={styles[valueStyleName]}>
            {!value ? placeholder : value}
          </Text>
          <MaterialIcons name="arrow-down" color={colors.dark} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide" style={styles.modal}>
        <ScreenLayout>
          <Button
            title="close"
            color="red"
            onPress={() => {
              setVisible(false);
            }}
          />
          {children}
        </ScreenLayout>
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
    color: colors.medium,
  },
  value: {
    color: colors.dark,
    fontSize: 16,
    flex: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  modal: {
    marginTop: "50%",
  },
});
