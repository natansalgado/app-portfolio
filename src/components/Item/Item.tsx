import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
    item: string;
    darkMode: boolean;
}

export function Item({ item, darkMode }: Props) {
    return (
        <Text style={[styles.text, { color: darkMode ? 'white' : 'black' }]}>
            • {item}
        </Text>
    );
}