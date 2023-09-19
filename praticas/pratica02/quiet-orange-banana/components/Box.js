// components/Box.js

import React from 'react';
import { View } from 'react-native';

function Box(props) {
  // Crie um objeto de estilo com as propriedades fornecidas por props
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  };

  return <View style={boxStyle} />;
}

export default Box;
