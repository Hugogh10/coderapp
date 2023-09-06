import { View, Text, StyleSheet, TextInput, Pressable, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({ text, setText, addItem }) => {
  return (
    <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>  
            <TextInput placeholder="escriba aqui un item.." style={styles.input} value={text} onChangeText={(value) => setText(value)}/>
        </View>
      
          <Pressable 
          style={styles.button} 
          onPress={() => addItem()}>
          <Ionicons name="add-outline" size={40} color="red" />
          </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
    input: {
        width:180,
        padding:5,
        fontSize:18,
      },
      inputContainer:{
        borderColor:"red",
        borderWidth: 1,
        marginTop: 20,
      },
      buttonContainer:{
        flexDirection:"row",
        alignItems: "center",
         marginBottom: 15,
      },
      button:{
        marginTop:15,
        marginLeft:15,
      }
})

export default AddItem;