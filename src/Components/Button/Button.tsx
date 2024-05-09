import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface ButtonProps {
  title: string;
  color?: string;
  onPress(event: GestureResponderEvent): void;
  titleStyles?: Record<string, any>[];
}

const Button = (props: ButtonProps) => {
  const { title, onPress, color } = props;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height: 50,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
