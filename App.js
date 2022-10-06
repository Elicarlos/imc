import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

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


      <View style={ styles.button }>
        <Button title='Calcular' onPress={ calcular }/>
      </View>

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

  }

});
