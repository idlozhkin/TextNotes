import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

export default function TextViewer({setModalWindow2, textOfNote, keyOfNote, editHandler}) {
  const [text, setText] = useState('');

  const onChange = (text) =>{
    setText(text);
  };

  const closeButton = (text) => {
    editHandler(text, keyOfNote)
    setModalWindow2(false)
  }
  return (

    <SafeAreaView style={styles.main}>
        <TextInput maxLength={300} placeholder={textOfNote} multiline = {true} onChangeText = {onChange}>{textOfNote}</TextInput> 
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
