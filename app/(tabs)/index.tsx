import React, { useEffect, useState, useRef } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, TextStyle, Button, ViewStyle } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "@rneui/themed";
import { router } from "expo-router";

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

    const leave = () =>{
      router.push('../')
    }
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

  const separator = () => {
    return <Divider width={1} color="blue"  />;
  };

  const handleEmpty = () => {
    return <Text style={[styles.textButton, {margin: 10}]}> No user registered!</Text>;
  };


const list = useRef<FlatList<any>>(null);

const press = () => {
  if (list.current)
    list.current.scrollToEnd({ animated: true });
};
const header = () => {
  return<>
  <View style={[styles.view, {backgroundColor: "#DAA520", borderRadius: 15, marginBottom: 10}]}>
    <Text style={styles.textButton}>Begin of the list</Text>
  </View>
        <View style={styles.view}> 
          <TouchableOpacity style={styles.goToEndButton} onPress={press}>
            <Text style={[roboto, buttonText, {fontWeight: 500}]}>Go to end</Text>
          </TouchableOpacity>
        </View> 
</>
};

const footer = () => {
  return (
    <View style={[styles.view, {backgroundColor: "#DAA520", borderRadius: 15}]}>
      <Text style={styles.textButton}> End of the list</Text>
    </View>
  );
};

    return (
          <LinearGradient style={{height: "100%"}} start={{x: 0, y: 0.6}} colors={[ "#7AE2E6FF", "#40A7AAFF"]}>

            <View style={{display: "flex", margin: 7}}>
            <TouchableOpacity style={styles.buttonDelete} onPress={leave}>
                  <Text style={[roboto, buttonText]}>leave</Text>
              </TouchableOpacity>
            </View>
              <View style= {[styles.view, {marginTop: 10}, {marginBottom: 20}]}>
                <Text style={[roboto, {fontSize: 50}]}>Users</Text>
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
              <TouchableOpacity style={[styles.buttonAdd, {height: 40}]} onPress={addUser}>
                  <Text style={[roboto, buttonText, {fontWeight: 500}]}>add</Text>
              </TouchableOpacity>
            </View>
            <FlatList
                style={{marginTop: 20}}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                ItemSeparatorComponent={separator}
                ListEmptyComponent={handleEmpty}
                data={users}
                renderItem={({ item }) => (
                  <View style={styles.userItem}>
                      <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <TouchableOpacity style={styles.buttonDelete} onPress={() => deleteUser(item.id)}>
                            <Text style={[styles.textButton, {fontSize: 15}]}>remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonUpdate} onPress={() => updateUser(item.id)}>
                            <Text style={[styles.textButton, {fontSize: 15}]}>update</Text>
                        </TouchableOpacity>
                    </View>
                )}
                onRefresh={() => console.log("refreshing")}
                refreshing = {false}
                keyExtractor={(item) => item.id}
            />
          </LinearGradient>
    );
}

const roboto: TextStyle = {
  fontFamily: "Roboto",
  fontWeight: "700",
  color: "#FFFFFFFF",
};

const button: TouchableOpacity | TextStyle =  {
  width: "20%",
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
}
const buttonText: TextStyle = {
  fontSize: 20,
  fontWeight: 400,
  textAlign: "center"
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  goToEndButton: {
    ...button,
    width: "50%",
    backgroundColor: "violet"
  },

  textButton: {
  ...roboto,
  ...buttonText,
  },
  buttonAdd: {
    ...button,
      backgroundColor: '#09AF40FF',
  },
  buttonDelete: {
    ...button,
    backgroundColor: '#D42424FF'
  },
  buttonUpdate: {
    ...button,
    backgroundColor: "#2C6DC2FF"
  },
  gradient: {
    marginTop: 5,
    marginBottom: 20
  },
  input: {
      opacity:0.8,
      borderWidth: 2,
      borderColor: '#ffffff',
      borderRadius: 4,
      height: 40,
      width: "80%",
      paddingHorizontal: 10,
      marginBottom: 10,
  },
  userItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  }
});
