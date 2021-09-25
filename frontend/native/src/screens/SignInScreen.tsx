import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";

import { View, Text, TextInput } from "../components/Themed";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signInAccount() {
    alert("Sign in account");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Username"
        textContentType="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
      />
      <Button
        onPress={signInAccount}
        title="Sign In"
        accessibilityLabel="Create an account with this button."
        disabled={!username || !password}
      />
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
