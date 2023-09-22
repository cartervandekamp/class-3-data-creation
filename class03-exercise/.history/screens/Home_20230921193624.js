import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Button, ThemeProvider } from "@rneui/base";

import React, { useState } from "react";

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
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Button
          onPress={() => check()}
          buttonStyle={getButtonStyle()}
          title="Click Me"
        />
      </View>
    </ThemeProvider>
  );
}

const theme = {
  colors: {
    background: "#fff", // You can set your desired background color here
  },
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "transparent", // Make sure the container background is transparent
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
