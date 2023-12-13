import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RadioButton } from 'react-native-paper';

const styles=StyleSheet.create({
    text:{
        margin:10,
        fontSize:20
    },
    input:{
        backgroundColor:'white',
        borderColor:'black',
        marginTop:10,
        borderRadius:20,
        width:'auto',
        padding:10,
        borderWidth:2

    }
});
type TextInputComponentProps={
    setter:(e:string)=>void,
    label:string
}
export const TextInputComponent = (props:TextInputComponentProps) => {

  return (
    <>
     <Text style={styles.text}>{props.label}</Text> 
     <TextInput style={styles.input} onChangeText={props.setter}/>
    </>
  )
}

type RadioInputComponentProps={
    setter:(e:string)=>void,
    label:string,
    choices:string[]
}
export const RadioInputComponent = (props:RadioInputComponentProps) => {
    const [checkedIndex, setChecked] = React.useState(0);

    const check=(idx:number)=>{
        setChecked(idx);
        props.setter(props.choices[idx]);
    }
    return (
        <>
        <Text>{props.label}</Text>
        {
            props.choices.map((choice,idx)=>{
                return(
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <RadioButton 
                        value={choice}
                        status={checkedIndex==idx ? 'checked' :'unchecked'}
                        onPress={()=>check(idx)}   
                        />
                        <Text style={{display:'flex'}}>{choice}</Text>
                        </View>
                );
            })
        }
       </>
    )
  }
  