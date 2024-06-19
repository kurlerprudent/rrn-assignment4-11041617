import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';

const HomeScreenSecondSection = () => {

    const filterMenu = require('../assets/images/filterMenu.png')

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
      <AntDesign style={styles.searchIcon} name="search1" size={20} color=" #95969D" />
        <TextInput style={styles.searchBoxEdit} placeholder='Search a job or position'/>
      </View>
      <View style={styles.mneu}><Image source={filterMenu}/></View>
    </View>
  )
}

export default HomeScreenSecondSection

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:40
    },
    searchBar:{
        height:48,
        flexDirection:'row',
        position:'relative',
        borderRadius:20,
        backgroundColor:'#F2F2F3',
       

        
    },
    searchBoxEdit:{
        height:'100%',
        width:233,
        paddingLeft:50
    },
    searchIcon:{
        position:'absolute',
        left:22,
        top:13,
        color:' #95969D'
    }
})