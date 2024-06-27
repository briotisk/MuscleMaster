import { Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Login from "@/components/navigation/Login";
import Register from "@/components/navigation/Register";
import TreinosCadastrados from "@/components/navigation/TreinosCadastrados";
import Perfil from "@/components/navigation/Perfil";


export default function Index() {
  return (
    <View>
      <Register/> 
    </View>
  );
}
