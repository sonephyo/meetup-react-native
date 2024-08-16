import { Link } from "expo-router"
import { Image, Text, View } from "react-native"



export const ForYouEvent = () => {
    return <View>
        <Image />
        <View>
            <Text>Event Name line1</Text>
            <View>
                <Image />
                <View>
                    <Text>MCC Building</Text>
                    <Text>Tue, Apr 28, 4-6pm</Text>
                </View>
            </View>
        </View>
        <Link href={"/"}>VIEW</Link>
    </View>
}