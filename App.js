import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.screen}>
      <View style={styles.inpuContainer}>
        <TextInput
          placeholder="Course Gol"
          style={styles.input} />
        <Button title="ADD" />
      </View>
      <View>
        <Text>Here secund part</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inpuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: '80%',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    padding:10
  }
});
