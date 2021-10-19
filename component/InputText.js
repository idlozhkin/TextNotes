import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';

export default function InputText({addHandler, setModalWindow}) {
  const [text, setText] = useState('');

  const onChange = (text) =>{
    setText(text);
  };

  const closeButton = (text) => {
    addHandler(text)
    setModalWindow(false)
  }

  return (
    <SafeAreaView style={styles.main}>
        <TextInput maxLength={300} multiline = {true} placeholder={'Текст заметки...'} onChangeText = {onChange}></TextInput> 
        <SafeAreaView style = {styles.buton}>
            <Button title='+' color='#FE6E00' onPress = {()=>closeButton(text) }/>
        </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
    width: '92%',
    marginLeft: '4%',
    height: '92%',
    marginTop: '4%',
    backgroundColor: '#202124',
    borderColor: '#e8eaed',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: '#e8eaed',
    padding: 10
  },
  buton: {
    position: 'absolute',
    right: 40,
    bottom: 30,
    width: 25,
    height: 16,
  }
});
