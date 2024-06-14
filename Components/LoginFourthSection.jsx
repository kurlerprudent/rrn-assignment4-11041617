import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const LoginFourthSection = () => {
const [loaded] = useFonts({
    'Poppins-Thin' : require('../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
})
    if(!loaded){
        return undefined
    }
  return (
    <View style={styles.container}>
        <View style={styles.firstLine}></View>
      <Text style={styles.textEdit}>Or continue with</Text>
      <View style={styles.firstLine}></View>
    </View>
  )
}

export default LoginFourthSection

const styles = StyleSheet.create({
    container:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    firstLine:{
        borderBottomWidth:0.5,
        width:90,
        marginBottom:10,
        borderColor:'#AFB0B6'
    },
    textEdit:{
        fontSize:13,
        fontFamily:'Poppins-Regular',
        color:'#AFB0B6'
    }
})