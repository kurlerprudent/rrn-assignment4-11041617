import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'




const LoginFifthSection = () => {
   const appleLogo = require('../assets/images/appleLogo.png')
   const googleLogo = require('../assets/images/googleLogo.png')
   const facebookLogo = require('../assets/images/facebookLogo.png')
  return (
    <View style={styles.container}>
        <Image source={appleLogo}/>
        <Image source={googleLogo}/>
        <Image source={facebookLogo}/>
      
  
    </View>
  )
}

export default LoginFifthSection

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:30
    }
})