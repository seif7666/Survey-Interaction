import { Question } from "./Question";
import { SurveyHeader } from "./SurveyHeader";

export class Survey{
    private header:SurveyHeader;
    private questions: Array<Question>= new Array();

    constructor(header:SurveyHeader){
        this.header=header;
    }
    public addQuestion(q:Question){this.questions.push(q);}
}