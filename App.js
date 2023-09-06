import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddItem  from "./src/AddItem";
import ListItem from "./src/ListItem";
import CustomModal from './src/CustomModal';

const initialState = [
  {id: 1, text: "Harina"},
  {id: 2, text: "Azucar"},
  {id: 3, text: "Cereales"},
];

export default function App() {
  const [text, setText] = useState("");

  const [list, setList] = useState(initialState);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem =() => {
    list.push({
      id: Math.random(),
      text: text,
    });
    setList(list);
    setText("");
  };

  const clearList =() => {
    setList([]);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <CustomModal isModalVisible = {isModalVisible} setIsModalVisible = {setIsModalVisible}  clearList = {clearList}/>

      <Image style={styles.image} source={{uri: "https://www.clipartkey.com/mpngs/m/15-151105_checklist-png-image-checklist-black-and-white.png"}}/>
      
      <Text style={styles.titulo}>LISTA DE COMPRAS</Text>

      <AddItem text={text} setText= {setText} addItem= {addItem}/>
    <FlatList 
    data={list}
    keyExtractor={item => item.id}
    renderItem={({ item }) => ( <ListItem item = {item}/> )}/>

    <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
      <Ionicons name="trash" size={40} color="red" />
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    marginTop:20,
    fontSize: 30,
    borderBottomColor: "blue",
    borderBottomWidth:5,
  },
  image:{
    height:100,
    width:100,
    marginTop:40,
  }  
});
