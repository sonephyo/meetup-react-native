import { PopularEvents } from "@/components/Home/PopularEvents";
import EventForYou from "@/components/Home/EventForYou";
import TopContainer from "@/components/Home/TopContainer";
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
  Dimensions,
} from "react-native";

const styles = StyleSheet.create({

});

const width = Dimensions.get("window").width;

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        {/* The section that relates to your personal information */}
        <TopContainer />
        {/* The project that are popular based as of now */}
        <PopularEvents />
        {/* The Events that are selected based on your personal preferences */}
        <EventForYou />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
