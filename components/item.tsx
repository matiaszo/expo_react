import { View, StyleSheet, Text } from "react-native"

export const Item = ({title, color}: {title: string, color: string}) =>{
    return(

        <>
            <View style={styles.box}>
                <View style={styles.itemList}>
                    <View style={styles.color}>45</View>
                    <Text>{title}</Text>
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
        height: 80,
        paddingHorizontal: 5
    },
    color: {
        height: 70,
        width: 100,
        backgroundColor: "#000000"
    },
    box: {
        backgroundColor: "#8c8c8c",
        margin: 10,
        
    }
})