import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/base";

import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function Home({ navigation }) {
  const [number, setNumber] = useState(1);

  const check = () => {
    if (number === 1) {
      console.log("ONE");
    } else if (number === 2) {
      console.log("TWO");
    } else if (number === 3) {
      navigation.push("About");
    }
    console.log(number);
    setNumber(number + 1);
  };

  const getButtonStyle = () => {
    if (number === 1) {
      return styles.btnBlue;
    } else if (number === 2) {
      return styles.btnRed;
    } else {
      return styles.btnGreen;
    }
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => check()}
        buttonStyle={getButtonStyle()}
        title="Click Me"
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnBlue: {
    backgroundColor: "#63C5DA",
    borderRadius: 10,
  },
  btnRed: {
    backgroundColor: "#800000",
    borderRadius: 10,
  },
  btnGreen: {
    backgroundColor: "#00563B",
    borderRadius: 10,
  },
};
