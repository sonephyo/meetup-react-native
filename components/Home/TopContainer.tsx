import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TopContainer = () => {
  return (
    <View style={styles.top_container}>
      <View>
        <Text style={{ fontSize: 42, fontWeight: "800" }}>Hello Sri</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Today, Aug 13, 2024
        </Text>
        <Text>Current Location</Text>
      </View>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 60, height: 60, borderRadius: 100 }}
      />
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  top_container: {
    paddingTop: 60,
    padding: 24,
    display: "flex",
    flexDirection: "row",
    gap: 96,
    marginHorizontal: "auto",
    alignItems: "center",
  },
});
