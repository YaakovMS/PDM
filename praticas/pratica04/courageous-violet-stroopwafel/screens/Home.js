import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon={() => <Ionicons name='exit-outline' size={24} color='white' />} onPress={props.onLogout} />
      </Appbar.Header>
      {/* Restante do conteúdo */}
    </View>
  );
}
