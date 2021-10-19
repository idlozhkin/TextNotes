import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Notes({textNote}) {
  return (
    <View style={styles.note}>
        <Text style={styles.text}>{textNote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    width: '92%',
    marginLeft: '4%',
    minHeight: 100,
    backgroundColor: '#202124',
    borderColor: '#e8eaed',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 7,
    marginBottom: 7,
  },
  text: {
    color: '#e8eaed',
    padding: 10
  },
});
