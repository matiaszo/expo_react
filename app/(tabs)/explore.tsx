import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { Text } from 'react-native';

export default function TabTwoScreen() {
  return (
   <>
    <View>
      <Text style = {styles.white}>Texto de explore do tabs</Text>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  white:{
    color: "#000000"
  }
});
