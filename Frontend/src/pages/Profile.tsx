import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getSurveyHeaders } from "../service/Requests";
import { SurveyHeader } from "../model/SurveyHeader";
import SurveyHeaderComponent from "../components/ProfileComponents/SurveyHeaderComponent";

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#F0ECE5'
    }
})

const Profile=()=>{

    const[headers,setHeaders]=useState(new Array<SurveyHeader>());
    
    const  setSurveyHeaders=async()=>{
        setHeaders(await getSurveyHeaders());
        console.log(headers);
    }
    useEffect(()=>{
        // console.log('In UseEffect!');
        setSurveyHeaders();
    },[])

    return <View style={styles.container}>{headers.map((header:SurveyHeader)=> <SurveyHeaderComponent surveyHeader={header}/>)}</View>
}

export default Profile;