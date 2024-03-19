import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        <View style={styles.modalView}>
          <Text>Exemplo de Modal</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.button}>Clique para abrir o modal</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#333666',
    padding: 10,
    elevation: 2,
  },
  modalView: {
    backgroundColor: '#333666',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 5,
    width: '100vw',
    height: '100vh',

  },
});
