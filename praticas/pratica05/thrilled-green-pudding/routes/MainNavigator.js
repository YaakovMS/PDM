import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home'
import Perfil from '../screens/Perfil'


const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />

    </Stack.Navigator>
  );
}
export default MainNavigator