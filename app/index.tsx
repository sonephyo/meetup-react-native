import CustomButton from "@/components/CustomButton";
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
  Dimensions,
  TouchableHighlight,
  TouchableHighlightBase,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      gap: 3,
    },
    text: {
      fontSize: 48,
      fontWeight: "bold",
    },
    caption: {
      fontSize: 16,
      fontWeight: "400",
    },
  });

  const handlePress = () => {
    router.push("/sign_in");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Meet<Text style={{ color: "#F2583E" }}>Up</Text>
      </Text>
      <Text style={styles.caption}>
        A place where all UI/UX designers gather
      </Text>
      <CustomButton handlePress={handlePress} text="Explore" />
    </SafeAreaView>
  );
};

export default Main;
