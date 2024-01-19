import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
    title: string;
    darkMode: boolean;
}

export function Title({ title, darkMode }: Props) {
    return (
        <Text style={[styles.title, { color: darkMode ? 'white' : 'black' }]}>
            {title}
        </Text>
    );
}