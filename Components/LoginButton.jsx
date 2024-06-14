import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginButton = () => {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>{alert('Hello there!')}}>
        <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
      
    </View>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:56,
        marginTop:30,
        borderRadius:5,
        backgroundColor: '#356899', 

    },
    loginButtonText:{
        color:'white',
        paddingVertical:16,
       textAlign:'center'
    }

})