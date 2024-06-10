import { Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Login from "@/components/navigation/Login";
import TreinosCadastrados from "@/components/navigation/TreinosCadastrados";

export default function Index() {
  return (
    <View>
      <Login/>
    </View>
  );
}
