import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Image style={styles.tinyLogo} source={
        {uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Bem vindo ao meu App</Text>
        <Text style={styles.appText}>Desenvolvido por Guilherme</Text>
        <Text style={styles.appText}>Em parceria com a estacio</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center',
  },
  appText: {
    fontSize: 20, 
    color: '#40918f', 
    textAlign: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
