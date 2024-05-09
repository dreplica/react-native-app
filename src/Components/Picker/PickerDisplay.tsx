import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PickerDisplay = () => {
  return (
    <View style={styles.container}>
      <Text>PickerDisplay</Text>
    </View>
  );
};

export default PickerDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
  },
});
