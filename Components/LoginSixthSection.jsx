import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const LoginSixthSection = () => {
    const [loaded] = useFonts({
        'Poppins-Thin' : require('../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf')
    })

    if(!loaded){
        return undefined
    }
  return (
    <View style={styles.container}>
        <TouchableHighlight>
        <Text style={styles.firstTextEdit}>Haven't got an account? 
        <Text style={styles.secondTextEdit}>Register</Text>
        </Text>
        </TouchableHighlight>
      
    </View>
  )
}

export default LoginSixthSection

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    firstTextEdit:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color:'#BDBEC2'


    },
    secondTextEdit:{
        fontFamily:'Poppins-Regular',
        color: '#356899'


    }
})