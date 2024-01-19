import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    text: string;
    color: string;
    darkMode: boolean;
    onPress: () => void;
}

export function Button({ text, color, darkMode, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: '80%' }} activeOpacity={0.9}>
            <Text
                style={[
                    styles.button,
                    { backgroundColor: color },
                    {
                        borderColor: darkMode ? 'white' : 'black',
                        shadowColor: darkMode ? 'white' : 'black'
                    }
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}