
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}>
    </Stack.Screen>
  </Stack>
  );
}

const styles =  StyleSheet.create({
  white:{
    color: "#2c2c2c"
  }
})