import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface SubDetailProps {
  title: string;
  subtitle: string;
}

const SubDetail = (props: SubDetailProps) => {
  const { title, subtitle } = props;
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default SubDetail;

const styles = StyleSheet.create({
  textWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 90,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7fc9aa",
  },
});
