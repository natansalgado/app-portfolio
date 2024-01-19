import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './src/routes/stack.routes';
import { DarkModeProvider, useDarkMode } from './src/providers/DarkModeProvider';


export default function App() {
  return (
    <NavigationContainer>
      <DarkModeProvider>
        <Stack />
      </DarkModeProvider>
    </NavigationContainer>
  );
}
