import React from "react"

import { TouchableOpacity, Text, StyleSheet } from "react-native"

type IButton = {
    value: string,
    onPress: (value: string) => void,
    color?: string
}

const Button: React.FC<IButton> = ({ value, onPress, color}) => {
    return(
        <>
            <TouchableOpacity style={styles(color).button} onPress={() => onPress(value)}>
                <Text style={{fontSize:20}}>{value}</Text>
            </TouchableOpacity>
        </>

    )
}

const styles = (bgColor?: string, ) => StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: bgColor ||  "#F5CE9F"
    },

})
export default Button;