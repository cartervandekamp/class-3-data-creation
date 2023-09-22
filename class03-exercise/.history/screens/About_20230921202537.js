import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Text } from "@rneui/themed";
import { bookStore } from "../data/books";
import { Rating } from "@react-native-elements/airbnb-rating"; // Import the Airbnb rating component

export default function About({ navigation }) {
  const [data, setData] = useState();

  const addingData = () => {
    console.log("started");
    setData(bookStore);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.header}>
        Welcome to the dashboard
      </Text>
      <View style={styles.buttonContainer}>
        <Button primary title="Show data" onPress={() => addingData()} />
      </View>
      {data &&
        data.books.map((b, index) => {
          if (b.category.toLowerCase() == "java") {
            return (
              <View key={index} style={styles.bookContainer}>
                <Text h2>{b.title}</Text>
                {b.authors &&
                  b.authors.map((a, ind) => {
                    return (
                      <Text key={ind} style={styles.author}>
                        {a}
                      </Text>
                    );
                  })}
              </View>
            );
          }
        })}
      {/* Add Airbnb rating component here */}
      <Rating
        showRating
        onFinishRating={(rating) => console.log("Rated: " + rating)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  bookContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  author: {
    color: "gray",
  },
});