import { Button, Image, Text, View } from "react-native";

export const PopularEvent = () => {
  return (
    <View>
      <Text>Popular Events</Text>
      <Text>Event Name</Text>
      <Text>Short description about the project</Text>
      <View>
        <View>
          <Image />
          <View>
            <Text>MCC Building</Text>
            <Text>Tue, Apr 28, 4-6pm</Text>
          </View>
        </View>
        <Button
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};
