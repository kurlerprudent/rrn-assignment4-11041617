
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (

    <SafeAreaView>
      <View style={styles.container}>
        <LoginScreen/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    
  }
});
