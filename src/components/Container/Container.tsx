import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
    children: ReactNode,
    darkMode: boolean
}

export function Container({ children, darkMode }: Props) {
    return (
        <View style={[
            styles.container,
            {
                borderColor: darkMode ? 'white' : 'black',
                backgroundColor: darkMode ? 'black' : 'white',
                shadowColor: darkMode ? 'white' : 'black'
            }]}>
            {children}
        </View>
    );
}