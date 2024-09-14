import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFormik } from "formik";

interface PickerDisplay {
  icon: typeof MaterialCommunityIcons.glyphMap;
  backgroundColor: string;
  label: string;
  onPress(): void;
}

const PickerDisplay = ({ label, backgroundColor, icon, onPress }: PickerDisplay) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ padding: 20, borderRadius: "100%", backgroundColor }}>
        <MaterialCommunityIcons name={icon} size={40} color="#fff" />
      </View>
      <Text style={{ marginTop: 8, textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerDisplay;

const styles = StyleSheet.create({
  container: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});
