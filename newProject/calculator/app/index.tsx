import Button  from "@/components/button"
import { View, StyleSheet, Text, ViewComponent, ViewStyle } from "react-native"
import { useState } from "react"

export default function HomeScreen(){
    const [firstNumber, setfirstNumber] = useState<string | null>(null);
    const [secondNumber, setsecondNumber] = useState<string | null>(null);

    const handleOp = (value: string) => {
        setfirstNumber(value)
    }
    return(
        <>

            <View style={styles.headerCalculator}>
                <Text>{firstNumber === null ? 'No value set' : `The number is: ${firstNumber}`}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View style={styles.buttonsLayout}>
                <View style={styles.buttonView}>
                    <Button onPress={handleOp} value="1" />
                    <Button onPress={handleOp}  value="2" />
                    <Button onPress={handleOp}  value="3" />
                    <Button onPress={handleOp}  value="4" />
                </View>
                <View style={styles.buttonView}>
                    <Button onPress={handleOp}  value="1" />
                    <Button onPress={handleOp}  value="2" />
                    <Button onPress={handleOp}  value="3" />
                    <Button onPress={handleOp}  value="4" />
                </View>
            </View>
        </>
    )
}

const flexJustifyAlign: ViewStyle = {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center"

}

const styles = StyleSheet.create ({

    headerCalculator: {
        width: "100%",
        height: 200,
        backgroundColor: "#FFF0D2"
    },

    buttonsLayout: {
        ...flexJustifyAlign,
        height: "100%",
        width: "100%",
        marginTop: 10,
        gap: 5
    },

    buttonView: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 15
    }
})