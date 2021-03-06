import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import {font_styles,color_scheme} from '../assets/general_styles/general_style.js';

const MainNavCard = ({Title, Description, Color, Navigate,iconName,iconColor="#333", GuideID}) => {
    /*Just return the style for the NavCard with a specified Color in props
    no need to get into this, just know that its used to style the cards color */
    const NavColor = (color) =>{
        if(color == null){
            return styles.NavCardStyle
        }
        else{
            return {
                ...styles.NavCardStyle, backgroundColor: color,
              };
        }
    }
    /*We use TouchableHighlight which is a react-native component to make the cards pressable,
    onPress uses the function passed down from homeScreenComponent, the rest are styles
    also needs a little bit of working on the styles since it highlights the whole section not just the card*/
    return (
        <TouchableHighlight underlayColor="white" activeOpacity={0.5} onPress={()=>{Navigate(GuideID)}}>
            <View style={NavColor(Color)}>
                
                <View style={styles.flex_spacing}>
                  <Text style={styles.Title}>{Title}</Text>
                  <Text style={styles.text}>{Description}</Text>
                </View>
                
                <View style={styles.fa_icon_container}>
                <Ionicons name={iconName} size={40} color={iconColor} />
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    NavCardStyle: {
      flexDirection:"row",
      borderRadius: 0,
      paddingHorizontal:20,
      paddingVertical:25,
      marginLeft:0,
      marginRight:0,
      marginTop:0,
      marginBottom: 10,
      backgroundColor:"#fefefe",

      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    },
    Title:{
        fontSize:font_styles.home_header_size,
        fontWeight:font_styles.home_header_weight,
        marginBottom: 2,
    },
    flex_spacing:{
      flex:9
  
  },
    text:{
      fontSize:font_styles.home_text_size,
      fontWeight:font_styles.home_text_weight
    },

    fa_icon_container:{

      fontWeight:'normal',
      flex:1.3,
      alignSelf:'center',
      alignItems:'center'
    
  },
  });

export default MainNavCard
