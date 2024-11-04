import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function TabLayout() {



  return (
   <>
   <Header image={require("../../assets/images/biGenderImg.png")}/>
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () =>(<Text>🏡</Text>)}}></Tabs.Screen>
      <Tabs.Screen name="explore" options={{headerShown: false, tabBarIcon: () =>(<Text>🔎</Text>) }}></Tabs.Screen>
      <Tabs.Screen name="list" options={{headerShown: false, tabBarIcon: () =>(<Text>📖</Text>) }}></Tabs.Screen>
      <Tabs.Screen name="asdasd" options={{headerShown: false, tabBarIcon: () =>(<Text>🎶</Text>) }}></Tabs.Screen>
    </Tabs>
   </>
  );
}
