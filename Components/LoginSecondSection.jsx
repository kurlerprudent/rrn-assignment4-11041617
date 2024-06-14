import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const LoginSecondSection = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInputEdit} placeholder= {props.name1}/>
      <TextInput style={styles.textInputEdit} placeholder={props.name2}/>
    </View>
  )
}

export default LoginSecondSection

const styles = StyleSheet.create({
    textInputEdit:{
        borderWidth:1,
        borderColor:'#AFB0B6',
        marginBottom:20,
        height:52,
        borderRadius:10,
        borderColor:'#AFB0B6',
        paddingLeft:10
    },
    container:{
        width:'100%',
        justifyContent:'center',
        marginTop:35
    }
})