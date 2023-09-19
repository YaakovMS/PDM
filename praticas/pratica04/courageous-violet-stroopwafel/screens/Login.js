import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação (se necessário)
    // Depois de autenticar com sucesso, chame a função de callback onLogin
    props.onLogin();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        mode="outlined"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
    </View>
  );
}
