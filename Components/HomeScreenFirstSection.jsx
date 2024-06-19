import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useFonts } from 'expo-font'

const HomeScreenFirstSection = (props) => {

 
const profilePic = require('../assets/images/profilePic.png')

const [loaded] = useFonts({
  'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
})
  if(!loaded){
    return undefined
  }
  return (
    
    <View style={styles.maniContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.firstTextEdit}>{props.name}</Text>
          <Text style={styles.secondTextEdit}>{props.email}</Text>
        </View>
        <View style={styles.thirdContainer}>
          <Image source={profilePic}/>
        </View>
    </View>
  )
}

export default HomeScreenFirstSection

const styles = StyleSheet.create({
  maniContainer:{
    flexDirection:'row'
  },
  subContainer:{
    width:250,
  },
  thirdContainer:{
    width:54,
    height:54
  },
  firstTextEdit:{
    fontSize:24,
    lineHeight:36,
    letterSpacing:-1,
    color:'#0D0D26',
    fontFamily:'Poppins-ExtraBold'
  },
  secondTextEdit:{
      color:'#95969D',
      fontSize:20,
      letterSpacing:-1.5,
      lineHeight:24,
      fontFamily:'Poppins-Regular'

  }
})