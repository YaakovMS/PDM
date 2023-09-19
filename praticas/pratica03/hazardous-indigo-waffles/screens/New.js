import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

export default function New() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(false);

  const handleSave = () => {
    // Lógica para salvar os dados (nome e status)
    console.log('Nome:', name);
    console.log('Status:', status);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>New</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Nome"
          keyboardType="default"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.switchContainer}>
          <Text>Status</Text>
          <Switch
            value={status}
            onValueChange={(value) => setStatus(value)}
          />
        </View>
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});

