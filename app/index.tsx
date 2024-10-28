import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import React, { useState, useEffect } from "react";
import { Link, router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH } from "@/firebaseConfig"

import { Image } from "expo-image"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onPress = () => {
        router.push("/(tabs)")

    }
    const auth = FIREBASE_AUTH;

    useEffect(() =>{
        console.log(auth.currentUser)
    }, [auth.currentUser]);
    useEffect(() => {
        console.log(email, pass)
    }, [email, pass]);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            router.push('/(tabs)')
        }).catch((error) =>{
            alert(error.message); 
        })
    }

    return(
        <>
            <SafeAreaView style={styles.screen}>
                <LinearGradient style={{height: "100%"}} colors={["#586dd7", "#576cd6"]}>

                {/* <View style={styles.images}>

                    {/* <Image style={styles.images} source={"../assets/images/plants.jpg"}/> */}
                {/* </View> */}

                    <View style={styles.viewLoginTexts}>
                        <Text style={styles.welcomeText}>Welcome Back</Text>
                        <Text style={styles.loginText}>Login to your account</Text>
                    </View>

                    <View style={styles.inputBoxes}>
                        <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#7789dd", "#c7cef1"]}>
                            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="   👤   Username" keyboardType="email-address"/>
                        </LinearGradient>
                    </View>
                    <View style={styles.inputBoxes}>
                        <LinearGradient style={styles.gradientBoxes} start={{x: 0.1, y: 0.2}} colors={[ "#7789dd", "#c7cef1"]}>
                            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="   🔒   Password" keyboardType="default"/>
                        </LinearGradient>
                    </View>
                    <View style={styles.viewRememberMe}>
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Text>Remember me</Text>
                        </View>
                    </View>
               
                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={{fontFamily: "inter", fontSize: 20}} >Entrar</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/register"} style={styles.smallButton}>Log new user</Link>
                </View>
                </LinearGradient>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: "flex",
        height: "100%"
    },
    images: {
        backgroundColor: "#000000",
        width: 300,
        height: 200,
        borderRadius: 100
        // borderBottomLeftRadius: 100,
        // borderBottomEndRadius: 100,
    },
    viewLoginTexts:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },

    welcomeText: {
        fontFamily: "Roboto",
        fontSize: 40,
        color: "#f7f7f7"
    },
    loginText: {
        fontFamily: "Roboto",
        fontSize: 15,
        opacity: 0.8,
        color: "#f7f7f7",
        marginBottom: 20
    },
    inputBoxes: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    gradientBoxes: {
        width: 350,
        borderRadius: 10
    },
    input: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        opacity: 0.8
    },
    viewRememberMe: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#56EBFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 5,
        height: 35
    },
    smallButton: {
        backgroundColor: ""
    }
})