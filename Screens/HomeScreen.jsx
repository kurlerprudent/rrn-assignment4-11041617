import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreenFirstSection from '../Components/HomeScreenFirstSection'
import HomeScreenSecondSection from '../Components/HomeScreenSecondSection'
import HomeSceenThirdSection from '../Components/HomeScreenThirdSection'
import Card from '../Components/Card'
import HomeScreenFourthSection from '../Components/HomeScreenFourthSection'


const HomeScreen = () => {
    return (
      <ScrollView>
          <View style={styles.container}>
     <HomeScreenFirstSection name='Obed Sarkodie' email='osarkodie@st.ug.edu.gh'/>
     <HomeScreenSecondSection/>
     <HomeSceenThirdSection name='Featured'/>
     <ScrollView horizontal={true} style={{flexDirection:'row'}}>
     <Card/>
     </ScrollView>
     <HomeSceenThirdSection name= 'Popular Jobs'/>
     <HomeScreenFourthSection/>

    </View>
      </ScrollView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    marginTop:'15%',
    marginHorizontal:'8%'
  }
})