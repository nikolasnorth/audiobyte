import { Text, View } from "@components/Themed";
import React from "react";
import { StyleSheet } from "react-native";

export default function CreateAudioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Audio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
