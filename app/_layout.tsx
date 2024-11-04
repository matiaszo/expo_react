
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useEffect } from 'react';
import React from "react";




// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    inter: Inter_600SemiBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
  <Stack>
    <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
  </Stack>
  );


  const styles =  StyleSheet.create({
    white:{
      color: "#2c2c2c"
    }
  })

}