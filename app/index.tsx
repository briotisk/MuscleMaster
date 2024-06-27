import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="pages/Login">
        Login
      </Link>
      <Link href="pages/Register">
        Register
      </Link>
    </View>
  );
}

