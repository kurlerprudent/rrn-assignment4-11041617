import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginButton from '../Components/LoginButton'
import LoginFirstSection from '../Components/LoginFirstSection'
import LoginSecondSection from '../Components/LoginSecondSection'
import LoginFourthSection from '../Components/LoginFourthSection'
import LoginFifthSection from '../Components/LoginFifthSection'
import LoginSixthSection from '../Components/LoginSixthSection'


const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
        <LoginFirstSection/>
      <LoginSecondSection name1='Name' name2='Email' />
    
      <LoginFourthSection/>
      <LoginFifthSection/>
      <LoginSixthSection/>
        </ScrollView>
      
     
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        width:'80%',
        marginHorizontal:'8%',
        marginTop:'10%',
    }
})