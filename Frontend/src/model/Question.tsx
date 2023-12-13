import { ReactNode, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {RadioInputComponent, TextInputComponent} from "../components/TextInputComponent";

const styles=StyleSheet.create({view:{backgroundColor:'#F0ECE5',margin:10, borderColor:'rgb(125,125,125)',borderStyle:'solid',borderWidth:1, borderRadius:20, padding:30}});
export class Question {
  protected ID: number;
  protected header: string;

  constructor(ID: number, header: string) {
    this.ID = ID;
    this.header = header;
  }

  render=():ReactNode=>{
    const [answer,setAnswer]=useState('');
    return (
      <View style={styles.view}>
        <TextInputComponent setter={setAnswer} label={this.header}/>
        <Text style={{color:'red'}}>This is field is required!</Text>
      </View>
    )
  }
}

export class Choice {
  private answer: string;
  constructor(answer: string) {
    this.answer = answer;
  }
  getAnswer = () => this.answer;
}
export class MCQ extends Question {
  private choices: Array<Choice> = new Array();
  constructor(ID: number, header: string) {
    super(ID, header);
  }
  public addChoice(choice: string): void {
    this.choices.push(new Choice(choice));
  }
  public getChoice(index: number): string {
    if (index < this.choices.length && index >= 0) {
      let choice = this.choices[index];
      if (typeof choice === undefined) throw new Error("choice is undefined!");
      return choice.getAnswer();
    }
    throw new Error("Index out of bounds!");
  }

  render=()=>{
    const [answer,setAnswer]=useState('');
    return (
      <View style={styles.view}>
        <RadioInputComponent setter={setAnswer} label={this.header} choices={this.choices.map((c)=>c.getAnswer())}/>
      </View>
      );
  }
}

export class QuestionFactory {
  public static getQuestion(object: any): Question {
    let q;
    console.log(`Question: ${object.id}: ${object.header}`)
    if (object.choices.length != 0) {
      q = new MCQ(object.id, object.header);
      for (let i = 0; i < object.choices.length; i++)
        q.addChoice(object.choices[i].answer);
    } else q = new Question(object.id, object.header);
    return q;
  }
}
