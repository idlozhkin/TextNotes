import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button, FlatList, Modal, TouchableHighlight} from 'react-native';
import Notes from './component/Notes';
import InputText from './component/InputText'
import TextViewer from './component/TextViewer'

export default function App() {
  const [modalWindow, setModalWindow] = useState(false);
  const [modalWindow2, setModalWindow2] = useState(false);
  const [list, setList] = useState([
    {text:"Удаление заметки - долгое нажатие", key: '1'},
  ])

  const [textOfNote, setTextOfNote] = useState('');
  const [keyOfNote, setKeyOfNote] = useState('');

  const edit = (textOfNote, keyOfNote) =>{
    setModalWindow2(true)
    setTextOfNote(textOfNote)
    setKeyOfNote(keyOfNote)
  }
 const deleteHadler = (key) =>{
  setList((list)=>{
    return list.filter(list => list.key != key)
  })
 }

  const edtitHandler = (text, key) =>{
      list.map(x =>
         {if (x.key==key)
          x.text = text
      })
  } 

  const addHandler = (text) => {
    setList((list)=>{
      return [
        {text: text, key: Math.random().toString(36).substr(2, 5)},
        ...list
      ]
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modalWindow} transparent={false} >
        <InputText addHandler = {addHandler} setModalWindow ={setModalWindow}/>
      </Modal>
      <Modal visible={modalWindow2} transparent={false} >
        <TextViewer setModalWindow2 ={setModalWindow2} textOfNote={textOfNote} editHandler={edtitHandler} keyOfNote={keyOfNote}/>
      </Modal>
      <SafeAreaView>
        <FlatList data={list} renderItem ={({ item } ) => (
          <TouchableHighlight underlayColor={'#202124'} onPress= {()=>edit(item.text, item.key)} onLongPress ={()=> deleteHadler(item.key)}>
          <Notes  textNote = {item.text} />
          </TouchableHighlight>
        )} />
      </SafeAreaView>
      <SafeAreaView style = {styles.buton}>
        <Button title='+' color='#FE6E00' onPress = {()=>setModalWindow(true)}/>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:'10%',
    flex: 1,
    backgroundColor: '#202124'
  },
  buton: {
    position: 'absolute',
    right: 40,
    bottom: 30,
    width: 25,
    height: 16,
  }
});
