import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountTabStackParamList } from "../types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator<AccountTabStackParamList>();

export default function () {
  return (
    <Stack.Navigator initialRouteName={"AccountScreen"} screenOptions={{title: "Account"}}>
      <Stack.Screen name={"AccountScreen"} component={AccountScreen}/>
      <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>
      <Stack.Screen name={"SignUpScreen"} component={SignUpScreen}/>
    </Stack.Navigator>
  );
}
