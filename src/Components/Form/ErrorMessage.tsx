import { StyleSheet, Text, View } from "react-native";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = props;
  if (!error) return null;

  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({});
