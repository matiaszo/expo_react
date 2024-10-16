import { Image, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
   <>
    <Text>Texto do index do tabs</Text>
   </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
    white:{
      color: "#2c2c2c"
    }
});
