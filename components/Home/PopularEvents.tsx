import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Location from "@/assets/svgs/location.svg";

const styles = StyleSheet.create({
  colorWhite: {
    color: "#FFFF",
  },
});

const screenWidth = Dimensions.get("window").width;
export const PopularEvents = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      snapToInterval={screenWidth - 50}
      snapToAlignment={"start"}
      style={{
        marginVertical: 25,
        paddingHorizontal: 10,
        marginRight: 10,
      }}
    >
      <Event />
      <Event />

      <Event />

      <Event />
    </ScrollView>
  );
};

const Event = () => {
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth - 70,
        marginRight: 20,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#F2583E",
        }}
      >
        Popular Events
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
        }}
      >
        Event Name
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#5C5C5C",
        }}
      >
        Short description about the project
      </Text>

      <View style={{}}>
        <ImageBackground
          source={require("@/assets/images/dummy_landscape.jpg")}
          imageStyle={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
          resizeMode="cover"
          style={{
            height: 200,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              height: 50,
              width: screenWidth - 100,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Location width={30} height={30} color={"#FFFFFF"} />
              <View>
                <Text style={[styles.colorWhite]}>MCC Building</Text>
                <Text style={[styles.colorWhite]}>Tue, Apr 28, 4-6pm</Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
