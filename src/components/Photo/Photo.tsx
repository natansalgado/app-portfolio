import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

const imageUrl = 'https://github.com/natansalgado.png';

export function Photo() {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.image}
    />
  );
}