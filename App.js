import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6){
      alert('Você está abaixo do peso! ' + imc.toFixed(2))
    } else if(imc >= 18.6 && imc<24.9){
      alert('Peso ideal! ' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! ' + imc.toFixed(2))
    }

  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Desenvolvido por Victor Munhoz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eeeeee'
  },
  title:{
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100,
    fontSize: 40,
    color: '#393e46',
    fontFamily: 'sans-serif-condensed'
  },
  input:{
    backgroundColor: '#393e46',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4fb6d',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    
  },
  buttonText:{
    color: '#393e46',
    fontSize: 25,
    fontFamily: 'sans-serif-condensed',
  },
  footer:{
    color: '#393e49',
    fontFamily: 'sans-serif-condensed',
    alignItems: 'stretch',
    marginTop: 320,
    marginHorizontal: 100
  }

});