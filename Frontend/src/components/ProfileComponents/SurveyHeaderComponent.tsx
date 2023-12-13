import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SurveyHeader } from '../../model/SurveyHeader'

const styles=StyleSheet.create({
    pressable:{
        backgroundColor:'#161A30',
        padding:40,
        margin:10,
        borderRadius:60,
        alignItems:'center',
        // textAlign:'center'
        shadowColor:'white',
        
    },
    text:{
        fontSize:24   ,
        color:'#B6BBC4',
        fontWeight:'bold',
         
    }
})
type surveyHeaderType={
    surveyHeader:SurveyHeader
};
const SurveyHeaderComponent = (props:surveyHeaderType) => {
  return (
    <Pressable style={styles.pressable}>
        <Text style={styles.text}>Survey: {props.surveyHeader.getTitle()}</Text>

    </Pressable>
  )
}

export default SurveyHeaderComponent
