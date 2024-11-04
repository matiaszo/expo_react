import { FIREBASE_AUTH } from "@/firebaseConfig";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import React from "react";

export default function Register(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() =>{
        console.log(auth.currentUser)
    }, [auth.currentUser]);
    useEffect(() => {
        console.log(email, pass)
    }, [email, pass]);

    const register = () => {
        if(pass === confirmPass){
            createUserWithEmailAndPassword(auth, email, pass)
            .then((dadosUsuario) =>{
                console.log(dadosUsuario);
                Alert.alert("Usuario cadastrado!");
            }).catch((error) =>{
                alert(error.message);
            })
        }else{
            Alert.alert("Digite a mesma senha");
        }
    }
    return(
        <>
            <Link href="/">Voltar</Link>
            <View>
                <Text>Usuario registrado</Text>
            </View>
        </>
    )
}