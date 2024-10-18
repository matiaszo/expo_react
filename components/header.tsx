import { View, Text, Image, ImageSourcePropType, StyleSheet } from "react-native";

export const Header = ({image}: {image: ImageSourcePropType | undefined}) =>{
    return(
        <>
            <View style={styles.header}>
                <Text style={styles.text}>Componente header</Text>
                <Text style={styles.robotoFont}>Texto</Text>
                <Image style={styles.image} source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        backgroundColor: "#FFFFFFFF",
        borderRadius: 10,
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#09AF40FF",
        gap: 10,
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