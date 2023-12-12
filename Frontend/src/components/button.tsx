import React, { ReactNode } from "react";
import { Button, GestureResponderEvent, View } from "react-native";


type CustomizedButtonType={
    title:string;
    onPress:(event:GestureResponderEvent)=>void;
    styles?:any    
}
const CustomizedButton= (props:CustomizedButtonType):ReactNode=>{
    return <View style={props.styles}><Button onPress={props.onPress} title={props.title}/></View>
}

export default CustomizedButton;