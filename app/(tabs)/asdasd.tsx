import React from "react"
import { TextStyle, View, Text, StyleSheet } from "react-native";

export default function Asdasd() {
    return(
        <>
            <View >
                <Text style={styles.roboto}>
                    hey
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    
    roboto: {
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "#000000",
      }
  })