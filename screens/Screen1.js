import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

const Screen1 = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Screen2");
    }, 2000);
  }, []);
  return (
    <View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        style={styles.container}
      >
        <Text>Up and down you go</Text>
        <Text>❤️</Text>

        <StatusBar style="auto" />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen1;
