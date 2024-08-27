import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Location from "@/assets/svgs/location.svg";

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
        width: screenWidth - 50,
        paddingHorizontal: 10,
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

      <View>
        <ImageBackground
          source={require("@/assets/images/dummy_landscape.jpg")}
          resizeMode="cover"
          style={{
            height: 200,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View>
            <Location width={120} height={40} />
            <View>
              <Text>MCC Building</Text>
              <Text>Tue, Apr 28, 4-6pm</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text>View</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
