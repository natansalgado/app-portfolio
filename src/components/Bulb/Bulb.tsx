import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

interface Props {
    onPress: () => void;
    darkMode: boolean
}

export function Bulb({ onPress, darkMode }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons
                    name="bulb"
                    style={styles.bulb}
                    color={darkMode ? 'white' : 'black'} />
            </TouchableOpacity>
        </View>
    );
}