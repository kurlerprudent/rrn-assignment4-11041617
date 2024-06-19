
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

   
    
  );
}

const styles = StyleSheet.create({
  container:{}
});
