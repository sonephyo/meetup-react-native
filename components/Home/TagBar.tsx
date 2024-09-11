import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const TagBar = () => {
  return (
    <View>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: 24,
          fontWeight: "bold",
          letterSpacing: 1,
          color: "#F0635A",
          borderBottomWidth: 1,
          borderColor: "#F2583E",
        }}
      >
        Filter
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginHorizontal: 10,
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <TouchableOpacity style={styles.shadowBox} key={i}>
            <Text style={{ fontSize: 16 }}>Hello World</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TagBar;

const styles = StyleSheet.create({
  shadowBox: {
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 7,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    gap: 20,
    padding: 5,
    elevation: 2,
  },
});
