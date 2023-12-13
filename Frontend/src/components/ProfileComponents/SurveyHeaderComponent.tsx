import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SurveyHeader } from '../../model/SurveyHeader'
import { useNavigation } from '@react-navigation/native';
import CustomizedButton from '../button';

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
    const navigator=useNavigation();

    const onPress=()=>{
        navigator.navigate('Survey',{survey_id:props.surveyHeader.getID()});
    }
  return (
    <CustomizedButton title={`Survey: ${props.surveyHeader.getTitle()}`} onPress={onPress} textStyle={styles.text} buttonStyle={Pressable}/>
  )
}

export default SurveyHeaderComponent
