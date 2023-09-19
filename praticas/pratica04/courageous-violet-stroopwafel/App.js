import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';

export default function App() {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {logado ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </View>
  );
}
