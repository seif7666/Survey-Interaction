import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getSurvey } from '../service/Requests';
import { Survey } from '../model/Survey';
import { SurveyHeader } from '../model/SurveyHeader';

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#B6BBC4',
    }
})
const SingleSurvey = () => {
    const surveyId=useRoute().params?.survey_id;
    const [survey,setSurvey]=useState(new Survey(new SurveyHeader(0,'')));
    console.log(survey.getHeader());
    const setTheSurvey= async()=>{
        setSurvey(await getSurvey(surveyId));
    }
    useEffect(()=>{
        setTheSurvey();
    },[])
    if(survey == null)
  return (
    <View>
      
    </View>
  );
  return <survey.render />;
}

export default SingleSurvey
