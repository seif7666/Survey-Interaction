import { SurveyHeader } from "../model/SurveyHeader";
import axiosInstance from "./axios"

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

