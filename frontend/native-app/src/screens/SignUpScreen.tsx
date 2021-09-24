import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../components/Themed";
import { AccountTabStackScreenProps } from "../types";

export default function ({ navigation }: AccountTabStackScreenProps<"SignUpScreen">) {

  function goToSignInScreen() {
    if (navigation) {
      alert("navigation is ready");
    } else {
      alert("navigation was not found");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text>Already have an account? <Text onPress={goToSignInScreen}>Sign in.</Text>
      </Text>
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
