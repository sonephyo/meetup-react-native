import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign_in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="sign_up" />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
