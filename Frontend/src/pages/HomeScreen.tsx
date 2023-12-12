import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import CustomizedButton from "../components/button"
import { useNavigation } from "@react-navigation/native"
const styles= StyleSheet.create({
    screen:{
        backgroundColor:'#B6BBC4',
        flex:1,
        alignItems:'center',
    },
    title:{
        marginTop:200,
        color:'#161A30',
        fontSize:36,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonStyle:{
        margin:40,
        backgroundColor:'#31304D',
        width:'45%',
        padding:20,
        borderRadius:20,
        alignItems:'center',

    },
    buttonText: {
        color:'#F0ECE5',
        fontSize:18,
        fontWeight:'700'
    },
    buttonHover:{
        backgroundColor:'#B6BBC4'
    }
})
const HomeScreen=()=>{
    const navigation=useNavigation();
    const onPress=(e:any)=>{
        navigation.navigate('profile',{})
    };
    return (
        <View style={styles.screen} >
            <View>
            <Text style={styles.title}>Survey Interaction Program!</Text>
            </View>
            <CustomizedButton onPress={onPress} title="Solve Survey" onHoverStyle={styles.buttonHover.backgroundColor} buttonStyle={styles.buttonStyle} textStyle={styles.buttonText}/>
            <CustomizedButton onPress={()=>{}} title="See All Responses" onHoverStyle={styles.buttonHover.backgroundColor} buttonStyle={styles.buttonStyle} textStyle={styles.buttonText}/>
        </View>
    )
}
export default HomeScreen;