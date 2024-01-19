import React from 'react';
import { View, Linking } from 'react-native';

import { styles } from './styles';
import { Photo } from '../../components/Photo/Photo';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Bulb } from '../../components/Bulb/Bulb';
import { useDarkMode } from '../../providers/DarkModeProvider';
import { StatusBar } from 'expo-status-bar';


interface Props {
    navigation: {
        navigate: (page: 'skills' | 'home') => void
    };
}

export function Home({ navigation }: Props) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const goToSkills = () => {
        navigation.navigate('skills');
    };

    const openLinkedin = () => {
        Linking.openURL('https://www.linkedin.com/in/natan-salgado/');
    };

    const openGithub = () => {
        Linking.openURL('https://github.com/natansalgado');
    };

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
            <StatusBar style={darkMode ? 'light' : 'dark'} />
            
            <Photo />

            <Title title='Natan Salgado' darkMode={darkMode} />

            <Subtitle darkMode={darkMode} />

            <Button
                text='Habilidades'
                color='#00BFFF'
                onPress={goToSkills}
                darkMode={darkMode}
            />

            <Button
                text='linkedin'
                color='#0A66C2'
                onPress={openLinkedin}
                darkMode={darkMode}
            />

            <Button
                text='github'
                color='#303030'
                onPress={openGithub}
                darkMode={darkMode}
            />

            <Bulb onPress={toggleDarkMode} darkMode={darkMode} />
        </View>
    );
}