import React, { useState } from "react";
import { View } from "react-native";
import { Button, ThemeProvider } from "@rneui/base";

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

  const getButtonTheme = () => {
    if (number === 1) {
      return { colors: { primary: "#63C5DA" } };
    } else if (number === 2) {
      return { colors: { primary: "#800000" } };
    } else {
      return { colors: { primary: "#00563B" } };
    }
  };

  return (
    <ThemeProvider theme={getButtonTheme()}>
      <View style={styles.container}>
        <Button onPress={() => check()} title="Click Me" />
      </View>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
