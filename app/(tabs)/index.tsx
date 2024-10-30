import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";

interface User {
    id: string;
    name: string;
}

export default function HomeScreen() {
    const [users, setUsers] = useState<User[]>([]); 
    const [newUser, setNewUser] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "users"), (snapshot) => {
            const userList: User[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
            setUsers(userList);
        });

        return () => unsubscribe();
    }, []);

    const addUser = async () => {
        if (newUser === "") {
            Alert.alert("Por favor, insira um nome.");
            return;
        }
        await addDoc(collection(FIRESTORE_DB, "users"), { name: newUser });
        setNewUser('');
    };

    const deleteUser = async (id: string) => {
        await deleteDoc(doc(FIRESTORE_DB, "users", id));
    };

    const updateUser = async (id: string) => {
      if (newUser === "") {
          Alert.alert("Por favor, insira um novo nome para o usuário.");
          return;
      }
  
      const userRef = doc(FIRESTORE_DB, "users", id);
  
      await updateDoc(userRef, {
          name: newUser,
      });
  
      setNewUser('');
  };

    return (
        <View style={styles.container}> 

          <LinearGradient style={{height: "100%"}} start={{x: 0, y: 0.6}} colors={[ "#7AE2E6FF", "#40A7AAFF"]}>

            <View style={styles.buttonLeaveView}>
            <TouchableOpacity style={styles.button}>
                  <Text style={[styles.text, styles.buttonText]}>leave</Text>
              </TouchableOpacity>
            </View>
              <View style= {styles.usersText}>
                <Text style={[styles.text, {fontSize: 50}]}>Users</Text>
              </View>

          <View style={styles.view}>
            <TextInput
                style={styles.input}
                placeholder="New user"
                value={newUser}
                onChangeText={setNewUser}
            />
            </View>

            <View style={styles.view}>
              <TouchableOpacity style={[styles.button, styles.buttonAdd]} onPress={addUser}>
                  <Text style={[styles.text, styles.buttonText, {fontWeight: 500}]}>add</Text>
              </TouchableOpacity>
            </View>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                      <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#D42424FF'}]} onPress={() => deleteUser(item.id)}>
                            <Text style={[styles.text, styles.buttonText, {fontSize: 15}]}>remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: "#2C6DC2FF"}]} onPress={() => updateUser(item.id)}>
                            <Text style={[styles.text ,styles.buttonText, {fontSize: 15}]}>update</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
          </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({

  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#FFFFFFFF",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
    container: {
        height: "100%",
        backgroundColor: '#f5f5f5',
    },
    buttonLeaveView: {
      display:"flex",
      margin: 7
    },
    button: {
      width: "20%",
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    gradient: {
      marginTop: 5,
      marginBottom: 20
    },
    input: {
        opacity:0.8,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 4,
        height: 40,
        width: "80%",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    buttonAdd: {
        backgroundColor: '#09AF40FF',
        height: 40,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 400,
      textAlign: "center"
    },
    userItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    usersText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20
    },
});
