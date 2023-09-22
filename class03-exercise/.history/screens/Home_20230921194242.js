import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Badge } from "@rneui/core";

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
      {number === 1 && (
        <Button
          onPress={() => check()}
          style={styles.btnBlue}
          title="Click Me"
        />
      )}
      {number === 2 && (
        <Button
          onPress={() => check()}
          style={styles.btnRed}
          title="Click Me"
        />
      )}
      {number >= 3 && (
        <Button
          onPress={() => check()}
          style={styles.btnGreen}
          title="Click Me"
        />
      )}
      <Icon name="star" />
      <Badge value="3" status="error" />
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
    padding: 10,
  },
  btnRed: {
    backgroundColor: "#800000",
    borderRadius: 10,
    padding: 10,
  },
  btnGreen: {
    backgroundColor: "#00563B",
    borderRadius: 10,
    padding: 10,
  },
};
