import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function SayHello() {
  const [name, setName] = useState('');

  const handleSayHello = () => {
    Alert.alert('Alert', `Hello, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name ?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Say Hello !" onPress={handleSayHello} color="#007BFF" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 18,
    marginBottom: 10, 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});