import { StyleSheet, Text, View } from "react-native";
import { Question } from "./Question";
import { SurveyHeader } from "./SurveyHeader";
import { ReactNode } from "react";

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#CCCCCC',
        flex:1
    },
    title:{
        margin:10,
        fontSize:25,
        fontWeight:'bold',
        fontStyle:'italic',
        fontFamily:'monospace',
        textDecorationLine:'underline'
    },
    questions:{
        padding:10,
        margin:10,
        backgroundColor:'#B6BBC4',
        flex:1,
        borderRadius:30
    }
})
export class Survey{
    private header:SurveyHeader;
    private questions: Array<Question>= new Array();

    constructor(header:SurveyHeader){
        this.header=header;
    }
    public getHeader():string{return this.header.getTitle();}
    public addQuestion(q:Question){this.questions.push(q);}

    public render=():ReactNode=>{
        console.log(`${this.header.getTitle()}`)
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.header.getTitle()}</Text>
                <View style={styles.questions}>
                    {this.questions.map((q)=><q.render/>)}
                </View>
             </View>
        )
    }
}