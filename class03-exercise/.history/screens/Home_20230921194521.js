import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button, ThemeProvider } from "@rneui/themed";

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

  const getButtonPreset = () => {
    if (number === 1) {
      return "primary";
    } else if (number === 2) {
      return "danger";
    } else {
      return "success";
    }
  };

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button
          onPress={() => check()}
          preset={getButtonPreset()}
          text="Click Me"
        />
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
