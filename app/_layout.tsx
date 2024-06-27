// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="pages/Login" />
      <Stack.Screen name="pages/Register" />
      <Stack.Screen name="pages/Perfil" />
      <Stack.Screen name="pages/TreinosCadastrados" />
    </Stack>
  );
}
