import { PopularEvent } from "@/components/events/PopularEvent";
import { Link, router } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});

const Home = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

const EventForYou = () => {
  return (
    <View>
      <View>
        <View>
          <Text>Events For you</Text>
          <Text>These events are customized as per your preference</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("./sign_in");
          }}
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
