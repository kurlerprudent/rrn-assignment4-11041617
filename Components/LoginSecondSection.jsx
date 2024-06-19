import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {useNavigation} from "@react-navigation/native"

const LoginSecondSection = (props) => {
const navigation = useNavigation()

const [name, setName] = useState('')
const [email, setEmail] = useState('')


  return (
    <View style={styles.container}>
      <TextInput style={styles.textInputEdit} placeholder= {props.name1} value={name} onChangeText={setName}/>
      <TextInput style={styles.textInputEdit} placeholder={props.name2} value={email} onChange={setEmail}/>

      <View style={styles.containerForButton}>
      <Pressable onPress={()=>{
          navigation.navigate("Home", {name, email})

          }
          }>
        <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default LoginSecondSection; 
 

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
    },
    containerForButton:{
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