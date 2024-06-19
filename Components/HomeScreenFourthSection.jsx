import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const HomeScreenFourthSection = () => {
   const burgerKing = require('../assets/images/burgerKing.png')
   const bImage = require('../assets/images/bImage.png')
   const facebookLogo = require('../assets/images/facebookLogo.png')
   

  return (
    <View>

    
    <View style={styles.container}>
        <Image 
        source={burgerKing}
        />
        <View style={styles.miniContainer}>
          <View >
          <Text>Jr Executive</Text>
          <Text>Bueger King</Text>
          </View>
        
        <View>
          <Text>$90,000.00/yr</Text>
          <Text>Los Angelos, US</Text>
        </View>
        </View>
    </View>


    <View style={styles.container}>
        <Image 
        source={bImage}
        />
        <View style={styles.miniContainer}>
          <View >
          <Text>Product Manager</Text>
          <Text>Beats</Text>
          </View>
        
        <View>
          <Text>$84,000.00/yr</Text>
          <Text>Florida, US</Text>
        </View>
        </View>
    </View>




    <View style={styles.container}>
        <Image 
        source={facebookLogo}
        />
        <View style={styles.miniContainer}>
          <View >
          <Text>Jr Executive</Text>
          <Text>Bueger King</Text>
          </View>
        
        <View>
          <Text>$90,000.00/yr</Text>
          <Text>Los Angelos, US</Text>
        </View>
        </View>
    </View>

    </View>

  )
}

export default HomeScreenFourthSection

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'85%',
    marginTop:30
    
  },
  miniContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingLeft:14
    }
  
  
})