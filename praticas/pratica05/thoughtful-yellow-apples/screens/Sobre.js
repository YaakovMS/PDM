import{View,Text, Button } from 'react-native'

const Sobre =( {navigation}) => {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <Text>
     Sobre
     </Text> 

     <Button title='ir para Home' onPress={()=>navigation.navigate('Home')} />
     </View>

  )
}
export default Sobre