import { View, StyleSheet, Text } from "react-native"
import { Image } from "expo-image"

export const Item = ({title, color, image}: {title: string, color: string, image: string}) =>{
    return(

        <>
            <View style={styles.box}>
                <View style={styles.itemList}>
                    <View style={styles.color}>45</View>
                    <View style={styles.titleImage}>
                        <Text>{title}</Text>
                        <Image style={styles.imageStyle} source={image}/>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        height: 220,
        width: 205,
        paddingHorizontal: 5
    },
    color: {
        height: 200,
        width: 200,
        backgroundColor: "#000000",
        color: "#ffffff"
    },
    box: {
        backgroundColor: "#8c8c8c",
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    titleImage: {
        display: "flex",
        width: 200,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})