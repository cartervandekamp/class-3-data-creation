import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

import { TouchableOpacity } from "@rneui/core";

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
      <TouchableOpacity
        onPress={() => check()}
        style={[styles.button, getButtonStyle()]}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  btnBlue: {
    backgroundColor: "#63C5DA",
    borderColor: "#63C5DA",
  },
  btnRed: {
    backgroundColor: "#800000",
    borderColor: "#800000",
  },
  btnGreen: {
    backgroundColor: "#00563B",
    borderColor: "#00563B",
  },
};
