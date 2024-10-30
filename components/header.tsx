import { View, Text, Image, ImageSourcePropType, StyleSheet } from "react-native";

export const Header = ({image}: {image: ImageSourcePropType | undefined}) =>{
    return(
        <>
            <View style={styles.header}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.robotoFont}></Text>
                <Image style={styles.image} source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 40,
        backgroundColor: "#FFFFFFFF",
        borderRadius: 10,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 1,
        backgroundColor: "#09AF40FF",
        borderBottomEndRadius: 5,   
        borderBottomStartRadius: 5   
    },
    text: {
        fontSize: 30,
        color: "#ffffff",
        fontFamily: "inter"
    },
    robotoFont: {
        fontSize: 50,
        fontFamily: "Roboto",
        fontWeight: "700"
    }
})