import { Modal, View } from "react-native";
import React, { Component } from "react";
import LottieView from "lottie-react-native";

const UploadSuccess = ({ onFinish, visible }) => {
  return (
    <Modal visible={visible} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onFinish}
          source={require("../../assets/animations/loader.json")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </Modal>
  );
};

export default UploadSuccess;
