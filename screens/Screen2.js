import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen2</Text>
      <Button title="Press" onPress={() => navigation.navigate("Screen3")} />
    </View>
  );
};

export default Screen2;
