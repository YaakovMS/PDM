import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
        <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Entrar" color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
