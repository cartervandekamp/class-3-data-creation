import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";

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

  return (
    <View style={styles.container}>
      {number === 1 && <Button onPress={() => check()}>Click me</Button>}
      {number === 2 && (
        <Button onPress={() => check()} color="secondary">
          Click me
        </Button>
      )}
      {number >= 3 && (
        <Button onPress={() => check()} color="warning">
          Click me
        </Button>
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ffb6c1",
    alignItems: "center",
    justifyContent: "center",
  },
};
