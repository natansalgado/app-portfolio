import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
    darkMode: boolean;
}

export function Subtitle({ darkMode }: Props) {
    return (
        <Text style={[styles.subtitle, { color: darkMode ? 'white' : 'black' }]}>
            dev fullstack
        </Text>
    );
}