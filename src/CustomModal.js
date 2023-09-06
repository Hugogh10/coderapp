import { View, Text, Modal, Pressable, StyleSheet, } from 'react-native'
import React from 'react'

const CustomModal = ({setIsModalVisible, isModalVisible, clearList}) => {
  return (
    <View>
      <Modal transparent={true} visible={isModalVisible} >
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}> ¿Estas seguro de eliminar la lista?</Text>
          <View style={styles.buttonContainer}>
          <Pressable onPress={() => clearList()}>
            <Text style={styles.buttonText}>SI</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonText}>NO</Text>
          </Pressable>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      button: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 80,
        alignItems: 'center',
      },
      yesButton: {
        backgroundColor: 'green',
      },
      noButton: {
        backgroundColor: 'red',
      },
      buttonText: {
        color: 'red',
        fontSize: 16,
        padding: 10,
      },
   });

export default CustomModal