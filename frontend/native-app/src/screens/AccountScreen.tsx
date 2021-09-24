import * as React from "react";
import { useState } from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { AccountTabStackScreenProps } from "../types";

export default function AccountScreen({ navigation }: AccountTabStackScreenProps<"AccountScreen">) {
  const [isSignedIn] = useState(true);

  function goToSignUpScreen() {
    navigation.navigate("SignUpScreen")
  }

  function goToSignInScreen() {
    navigation.push("SignInScreen")
  }

  if (isSignedIn) {
    return (
      <View style={styles.container}>
        <Button
          onPress={goToSignUpScreen}
          title="Create Account"
          accessibilityLabel="Create an account with this button."
        />
        <Text>Already have an account? <Text onPress={goToSignInScreen}>Sign in.</Text></Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        <EditScreenInfo path="/screens/TabTwoScreen.tsx"/>
      </View>
    );
  }
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
