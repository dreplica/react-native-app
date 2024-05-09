import { Platform, SafeAreaView,StyleSheet, ViewProps } from "react-native";

const ScreenLayout = (props: ViewProps) => {
  const { children, style,  } = props;
  return <SafeAreaView style={[ styles.container, style]}>{children}</SafeAreaView>;
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0, 
  }
});
