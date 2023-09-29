import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';


import MainNavigation from './routes/MainNavigator';


export default function App() {
  return (
    <NavigationContainer>
<MainNavigation/>
    </NavigationContainer>
);
}