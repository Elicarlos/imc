import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity    } from 'react-native';

export default function App() {
  const [idade, setIdade ] = useState('')
  const [altura, setAltura ] = useState('')
  const [peso, setPeso ] = useState('')
  const [imc, setImc ] = useState('')

  function calcular() {
    setImc((peso / (altura * altura )).toFixed(2))
  }
  
  function exibirMensagem() {
    return 'ola'
  }
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>IMC</Text>
      {/* <TextInput style={ styles.input} onChangeText={ setIdade }/> */}
      <TextInput style={ styles.input} placeholder="Altura..." onChangeText={ setAltura }/>
      <TextInput style={ styles.input} placeholder="Peso..."onChangeText={ setPeso }/>


      <TouchableOpacity style={ styles.button }>
        <Text style={ styles.buttonText }>Calcular</Text>
      </TouchableOpacity>

      <Text style={ styles.imc }>{ imc }</Text>
      <Text style={ styles.mensagem }>{ exibirMensagem() }</Text>

     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    
  },
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  imc: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  mensagem: {

  },
  button: {
    
    backgroundColor: 'blue',
    padding: 10,
    elevation: 8,
    width: '50%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 5

  },
  buttonText: {
    alignSelf: 'center',
    color: "#fff",
  }

});
