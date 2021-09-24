import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";

import { View, Text, TextInput } from "../components/Themed";
import { AccountTabStackScreenProps } from "../types";

export default function ({ navigation }: AccountTabStackScreenProps<"SignUpScreen">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function goToSignInScreen() {
    navigation.navigate("SignInScreen");
  }

  function createAccount() {
    alert("Create account");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="newPassword"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm password"
        secureTextEntry={true}
        textContentType="newPassword"
      />
      <Button
        onPress={createAccount}
        title="Create Account"
        accessibilityLabel="Create an account with this button."
        disabled={!username || !password || password != confirmPassword}
      />
      <Text>Already have an account? <Text onPress={goToSignInScreen}>Sign in.</Text></Text>
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
  input: {
    height: 40,
    width: "80%",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
  },
});
