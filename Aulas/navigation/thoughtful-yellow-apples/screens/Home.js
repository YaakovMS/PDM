import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  const irParaSobre = () => {
    navigation.navigate('Sobre');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title="Ir para Sobre" onPress={irParaSobre} />
    </View>
  );
};

export default Home;
