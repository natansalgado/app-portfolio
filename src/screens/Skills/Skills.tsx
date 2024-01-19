import React from 'react';
import { View, ScrollView } from 'react-native';

import { styles } from './styles';

import { Bulb } from '../../components/Bulb/Bulb';
import { Photo } from '../../components/Photo/Photo';
import { Title } from '../../components/Title/Title';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Container } from '../../components/Container/Container';
import { Item } from '../../components/Item/Item';
import { Button } from '../../components/Button/Button';
import { useDarkMode } from '../../providers/DarkModeProvider';
import { StatusBar } from 'expo-status-bar';

interface Props {
    navigation: any
}

export function Skills({ navigation }: Props) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const goBack = () => {
        navigation.goBack()
    };

    return (
        <ScrollView style={styles.scroll}>
            <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
                <StatusBar style={darkMode ? 'light' : 'dark'} />

                <Bulb darkMode={darkMode} onPress={toggleDarkMode} />

                <Photo />

                <Title title='Natan Salgado' darkMode={darkMode} />

                <Subtitle darkMode={darkMode} />

                <Container darkMode={darkMode} >
                    <Title title='Linguagens' darkMode={darkMode} />

                    <Item item='C#' darkMode={darkMode} />
                    <Item item='Javascript' darkMode={darkMode} />
                    <Item item='Typescript' darkMode={darkMode} />
                    <Item item='Java (básico)' darkMode={darkMode} />
                    <Item item='SQL' darkMode={darkMode} />
                    <Item item='HTML' darkMode={darkMode} />
                    <Item item='CSS' darkMode={darkMode} />
                </Container>

                <Container darkMode={darkMode} >
                    <Title title='Frontend' darkMode={darkMode} />

                    <Item item='Angular' darkMode={darkMode} />
                    <Item item='AngularJS' darkMode={darkMode} />
                    <Item item='React' darkMode={darkMode} />
                    <Item item='React Native' darkMode={darkMode} />
                    <Item item='MVC' darkMode={darkMode} />
                    <Item item='Redux' darkMode={darkMode} />
                    <Item item='Tailwind' darkMode={darkMode} />
                    <Item item='Bootstrap' darkMode={darkMode} />
                </Container>

                <Container darkMode={darkMode} >
                    <Title title='Backend' darkMode={darkMode} />

                    <Item item='.NET' darkMode={darkMode} />
                    <Item item='ASP.NET' darkMode={darkMode} />
                    <Item item='Node' darkMode={darkMode} />
                    <Item item='Nest' darkMode={darkMode} />
                    <Item item='Express' darkMode={darkMode} />
                    <Item item='Spring Boot' darkMode={darkMode} />
                    <Item item='Entity' darkMode={darkMode} />
                    <Item item='Prisma' darkMode={darkMode} />
                    <Item item='JWT' darkMode={darkMode} />
                </Container>

                <Container darkMode={darkMode} >
                    <Title title='Banco de Dados' darkMode={darkMode} />

                    <Item item='MySQL' darkMode={darkMode} />
                    <Item item='PostgreSQL' darkMode={darkMode} />
                    <Item item='SQL Server' darkMode={darkMode} />
                    <Item item='SQLite' darkMode={darkMode} />
                    <Item item='MongoDB' darkMode={darkMode} />
                </Container>

                <Button
                    text='Voltar'
                    darkMode={darkMode}
                    color='#00BFFF'
                    onPress={goBack}
                />
            </View>
        </ScrollView>
    );
}