import { PopularEvent } from "@/components/events/PopularEvent";
import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});

const YourApp = () => {
  return (
    <ScrollView>
      {/* Header */}
      <View>
        <Text>Hello Sri</Text>
        <Text>Today, Aug 13, 2024</Text>
        <Text>Current Location</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>

      <Text>Filter</Text>

      {/* Popular Events */}
      <ScrollView>
        <PopularEvent />
      </ScrollView>

      <EventForYou />
    </ScrollView>
  );
};

const EventForYou = () => {
  return <View>
    <View>
        <View>
            <Text>Events For you</Text>
            <Text>These events are customized as per your preference</Text>
        </View>
        <Link href="/">VIEW ALL</Link>
    </View>
  </View>;
};

export default YourApp;
