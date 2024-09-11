import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const EventForYou = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            width: width / 2 + 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Events For you
          </Text>
          <Text
            style={{
              fontSize: 10,
            }}
          >
            These events are customized as per your preference
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              color: "#F2583E",
              fontWeight: "bold",
              fontSize: 12,
              borderBottomWidth: 1,
              borderColor: "#F2583E",
            }}
          >
            VIEW ALL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventForYou;

const styles = StyleSheet.create({});
