import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginFirstSection = () => {
  const [loaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf')

  })

  if(!loaded){
    return undefined
  }

  return (
    <View style={styles.container}>
      <Text style={styles.firstText} >Jobizz</Text>
      <View style={styles.secondSectionEdit}>
      <Text style={styles.secondText} >Welcome back</Text>
      <MaterialCommunityIcons name="hand-wave" size={24} color="gold" />
      </View>
      
      <Text style={styles.thirdText}>Let's log in. Apply to jobs!</Text>
    </View>
  )
}

export default LoginFirstSection

const styles = StyleSheet.create({

  container:{
    marginTop:50
  },
  firstText :{
    fontFamily:'Poppins-SemiBold',
    fontSize:22,
    lineHeight:33,
    color:'#356899'

  },

  secondSectionEdit:{
    flexDirection:'row'
  },
  secondText:{
    fontFamily:'Poppins-Bold',
    fontSize:24,
    lineHeight:33,
    marginRight:5
  },
  thirdText:{
    fontSize:14,
    lineHeight:22,
    fontFamily:'Poppins-Regular',
    color:'#0D0D26'
  }
})