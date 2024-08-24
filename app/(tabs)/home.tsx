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
  top_container: {
    paddingTop: 60,
    padding: 24,
    display: "flex",
    flexDirection: "row",
    gap: 96,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
  shadowBox: {
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    gap: 20,
    padding: 5,
    elevation: 2
  },
});

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        {/* Header */}
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

        <Text
          style={{
            marginLeft: "auto",
            paddingRight: 24,
            fontWeight: "bold",
            letterSpacing: 1,
            color: "#F0635A",
            textDecorationLine: "underline",
          }}
        >
          Filter
        </Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <TouchableOpacity style={styles.shadowBox} key={i}>
              <Text style={{fontSize: 16}}>Hello World</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
        <TouchableOpacity onPress={() => {}}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
