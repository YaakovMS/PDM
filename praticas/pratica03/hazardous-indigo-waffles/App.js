import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Login from './screens/Login'
import Home from './screens/Home'
import New from './screens/New'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <New />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
