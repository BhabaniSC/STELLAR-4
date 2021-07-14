import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,StatusBar,Platform,SafeAreaView,ImageBackground,Image}
 from 'react-native';
import { color } from 'react-native-reanimated';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droid}/>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>

                <View style={styles.titleBar}>
                <Text style={styles.titleText}>STELLAR APP</Text>
                <Image source={require("../assets/main-icon.png")} style={styles.iconImage}>
               </Image>
            </View>
            <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("SpaceCraft") }> 
            <Text style={styles.routeText}>SpaceCrafts</Text>
              <Text style={styles.bgDigit}>1</Text>
               <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}>
               </Image>
             </TouchableOpacity>
             <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("StarMap") }> 
             <Text style={styles.routeText}>StarMap</Text>
              <Text style={styles.bgDigit}>2</Text> 
              <Image source={require("../assets/star_map.png")} style={styles.iconImage}>
                  </Image>
                   </TouchableOpacity> 
                   <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("DailyPicture") }> 
            <Text style={styles.routeText}>DailyPicture</Text>
              <Text style={styles.bgDigit}>1</Text>
               <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}>
               </Image>
             </TouchableOpacity>
             </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
container:{
    flex:1
},
droid:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0,
    
},
titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignitems:"center",
},
routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:"white",
},
titleText:{
fontSize:40,
fontWeight:"italics",
color:"white",
},
routeText:{
    fontSize:35,
fontWeight:"italics",
color:"black",
marginTop:75,
marginLeft:30,
},
backgroundImage: { 
    flex: 1,
     resizeMode: 'cover',
     },
     knowMore: { 
         paddingLeft: 30, 
         color: "red",
         fontSize: 15 }, 
     bgDigit: { position: "absolute",
      color: "rgba(183, 183, 183, 0.5)",
     fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1 }, 
     iconImage: { position: "absolute", 
     height: 200,
      width: 200, 
     resizeMode: "contain", 
     right: 20,
      top: -80 }
})