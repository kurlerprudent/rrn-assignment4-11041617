import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const HomeSceenThirdSection = (props) => {

  const [loaded] = useFonts({
    'Poppins-SemiBold' : require('../assets/fonts/Poppins-SemiBold.ttf')
  })

  if(!loaded){
    return undefined
  }

  return (
    <View >
      <View style={styles.TextContainer}>
        <Text style={styles.firstTextEdit}>{props.name}</Text>
        <Text style={styles.secondTextEdit}>See all</Text>
      </View>
    </View>
  )
}

export default HomeSceenThirdSection

const styles = StyleSheet.create({
  TextContainer:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  firstTextEdit:{
    color: '#0D0D26',
    letterSpacing: -1,
    fontSize:16,
    fontFamily:'Poppins-SemiBold',
    lineHeight:21
  },
  secondTextEdit:{
    lineHeight:16,
    fontSize:14,
    color:'#95969D'
  }
})