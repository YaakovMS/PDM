import { View, Text , Button} from 'react-native';


const Home =({navigation}) =>{
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: "center"}}>
    <Text>Home </Text>

    <Button title='Perfil' onPress={() => navigation.navigate('Perfil')} /> 
    </View>
  )
}

export default Home