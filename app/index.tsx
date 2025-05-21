import {
  Text,
  SafeAreaView,
} from "react-native"
import { StatusBar } from "expo-status-bar"


export default function RootLayout() {
  return (
    <SafeAreaView>
      <Text>
        Expo
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
