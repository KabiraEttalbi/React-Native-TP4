import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function DisplayInputContent() {
  const [name, setName] = useState('');
  const handleSayHello = () => {
    Alert.alert('Alert', `Hello, ${name} !`);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.label}>What is your name ?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="SAY HELLO" onPress={handleSayHello} color="#007BFF" />
      <View style={styles.outputContainer}>
        <Text style={styles.outputLabel}>You have wrote :</Text>
        <Text style={styles.outputText}>{name || 'Nothing yet...'}</Text>
      </View>
    </View>
  )

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
  outputContainer: {
    marginTop: 20,
  },
  outputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  outputText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight:'bold',
    color: 'green',
  },
});