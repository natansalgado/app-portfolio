import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home/Home';
import { Skills } from '../screens/Skills/Skills';

const { Navigator, Screen } = createStackNavigator();

export function Stack() {
  return (
    <Navigator>

      <Screen
        name='home'
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Screen
        name='skills'
        component={Skills}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  );
}