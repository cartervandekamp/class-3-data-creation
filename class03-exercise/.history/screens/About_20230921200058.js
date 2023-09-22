import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { bookStore } from "../data/books";

export default function About({ navigation }) {
  const [data, setData] = useState();

  const addingData = () => {
    console.log("started");
    setData(bookStore);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the dashboard</Text>
      <Button primary title="Show data" onPress={() => addingData()} />
      {data &&
        data.books.map((b, index) => {
          if (b.category.toLowerCase() == "java") {
            return (
              <View key={index}>
                <Text h2>{b.title}</Text> {/* Using h2 for a larger title */}
                {b.authors &&
                  b.authors.map((a, ind) => {
                    return (
                      <Text key={ind} style={styles.author}>
                        {a}
                      </Text>
                    );
                    {
                      /* Adding custom author styling */
                    }
                  })}
              </View>
            );
          }
        })}
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
  author: {
    color: "gray", // Custom author text color
  },
};
