import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Bem vindo ao meu App</Text>
      <Text style={styles.appText}>Desenvolvido por Guilherme</Text>
      <Text style={styles.appText}>Em parceria com a estacio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 30, 
    color: 'red', 
    textAlign: 'center',
  },
  appText: {
    fontSize: 20, 
    color: 'green', 
    textAlign: 'center',
  },
});
