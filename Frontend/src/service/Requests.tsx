import axios from "axios";
import { Survey } from "../model/Survey";
import { SurveyHeader } from "../model/SurveyHeader";
import axiosInstance from "./axios"
import { QuestionFactory } from "../model/Question";

export async function getSurveyHeaders():Promise<SurveyHeader[]>{

    const headers:SurveyHeader[]= new Array();
    const response=await axiosInstance.get('surveys');
    // console.log(response.data);
    for(let i = 0;i<response.data.length;i++){
        // console.log(response.data[i]);
        headers.push(new SurveyHeader(response.data[i].id,response.data[i].header));
    }
    console.log(`Headers are ${headers[0].getTitle()}`);
    return headers;
}

export async function getSurvey(id:number):Promise<Survey>{
    const response= await axiosInstance.get(`survey/${id}`);
    const data=response.data;
    const survey= new Survey(new SurveyHeader(data.id,data.name));
    for(let i=0;i<data.questions.length;i++){
        survey.addQuestion(QuestionFactory.getQuestion(data.questions[i]));
    }
    console.log(`Survey is ${survey.getHeader()}`);
    return survey;

}
