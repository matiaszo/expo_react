import { Text, FlatList, View, StyleSheet, StatusBar, SafeAreaView } from "react-native"
import DATA from "@/constants/data.json";
import { Item } from "@/components/item";
import React from "react";

export default function List(){

    return(
        <>

         <View style= {styles.page}>
            <Text style={styles.text}>
                List
            </Text>
          </View>
          
            <SafeAreaView style={styles.container}>
              <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} color={item.color} image={item.image} />} keyExtractor={item => item.id}/>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
        backgroundColor: "#FF0000A2",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        width: 100,
        textAlign: "center",
        fontSize: 40
    },
    item: {
      backgroundColor: "#6c6c6c",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10
    },
    title: {
      fontSize: 24,
    },
  });