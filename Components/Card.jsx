import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useFonts } from 'expo-font'

const Card = () => {

  const facebookLogo = require('../assets/images/facebookLogo.png')
  const googleLogo = require('../assets/images/googleLogo.png')

  const [loaded] = useFonts({
    'Poppins-SemiBold' : require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf')
  })

    if(!loaded){
      return undefined
    }
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.firstCardContainer}>
          <View style={styles.firstLine}>
            <View style={styles.whiteSpace} >
              <Image source={facebookLogo}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.fisrtTextEdit}>Software Engineer</Text>
              <Text style={styles.secondTextEdit}>Facebook</Text>
            </View>
          </View>
          <View style={styles.secondLineContainer}>
            <Text style={styles.secondLineTextEdit}>$180.00</Text>
            <Text style={styles.secondLineTextEdit}>Accra, Ghana</Text>
          </View>
      </View>


      
        <View style={styles.secondCardContainer}>
          <View style={styles.firstLine}>
            <View style={styles.whiteSpace} >
              <Image source={googleLogo}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.fisrtTextEdit}>System Admin</Text>
              <Text style={styles.secondTextEdit}>Google</Text>
            </View>
          </View>
          <View style={styles.secondLineContainer}>
            <Text style={styles.secondLineTextEdit}>$180.00</Text>
            <Text style={styles.secondLineTextEdit}>Accra, Ghana</Text>
          </View>
      </View>

      
      
      </View>
      
    </ScrollView>
    
  )
}

export default Card

const styles = StyleSheet.create({
    firstCardContainer:{
        flexDirection:'column',
        width:280,
        height:186,
        backgroundColor:'#2596be',
        borderRadius:24,
        marginRight:10,
        paddingLeft:30,
        justifyContent:'space-between',
        paddingBottom:20
    },
    secondCardContainer:{
      flexDirection:'column',
      width:290,
      height:186,
      backgroundColor:'darkblue',
      borderRadius:24,
      marginRight:10,
      paddingLeft:30,
      justifyContent:'space-between',
      paddingBottom:20
  },
  
    Container:{
      flexDirection:'row',
      marginTop:30,
      justifyContent:'center',
      alignItems:'center'
    },
    logoContainer:{
      width:100
    },
    firstLine:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'70%',
      alignItems:'center',
      marginTop:15,
    },
    fisrtTextEdit:{
      letterSpacing:-1,
      lineHeight:21,
      fontSize:16,
      fontFamily:'Poppins-SemiBold',
      color:'white',
      marginBottom:2

    },
    whiteSpace:{
      width:35,
      height:35,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8
    },
    secondTextEdit:{
      color:'white',
      fontFamily:'Poppins-Regular',
      letterSpacing:-1,
      fontSize:14
    },
    textContainer:{
      justifyContent:'center',
      
    },
    secondLineTextEdit:{
      color:'white',
      fontFamily:'Poppins-SemiBold',
      fontSize:15
    },
    secondLineContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'90%'
    }
})