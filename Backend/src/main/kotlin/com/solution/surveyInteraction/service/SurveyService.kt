package com.solution.surveyInteraction.service

import com.solution.surveyInteraction.model.Choice
import com.solution.surveyInteraction.model.Question
import com.solution.surveyInteraction.model.Survey
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Service


class SurveyHeader(val ID:Long,val header:String);
interface SurveyRepository: CrudRepository<Survey,Long>;
@Service
class SurveyService(private val surveyRepo:SurveyRepository){
    fun getSurveyHeaders():List<SurveyHeader>?{
        val surveyHeaders= ArrayList<SurveyHeader>();
        val surveys= surveyRepo.findAll();
        surveys.forEach { s -> surveyHeaders.add(SurveyHeader(s.ID, s.name)) };
        return surveyHeaders;
    }

    fun getSurvey(ID: Long):Survey?{
        if(surveyRepo.count()>=ID)
            return null;
        return surveyRepo.findById(ID).get();
    }



    public fun addSurveys(){
        surveyRepo.deleteAll();
        gen1();
        gen2();

    }
    private fun gen1(){
        val s= Survey(name = "Education", );
        val questions= ArrayList<Question>();
        val q1= Question(header = "What is your high school grade?", survey = s);
        questions.add(q1);
        val q2= Question(header = "What is your highest degree?", survey = s, choices = ArrayList<Choice>());
        questions.add(q2);
        val choices= listOf("High-school", "Bachelors","Master","Doctorate");
        addChoices(choices,q2);
        s.questions=questions;
        surveyRepo.save(s);
    }
    private fun gen2(){
        val s= Survey(name = "Demographic Info");
        val questions= ArrayList<Question>();
        var q1= Question(survey = s, header = "Gender", choices = ArrayList<Choice>());
        addChoices(listOf("Male","Female","Prefer not to tell"),q1);
        questions.add(q1);
        q1=Question(survey = s, header = "How old are you?");
        questions.add(q1);
        q1= Question(survey = s, header = "Are you married?");
        addChoices(listOf("Yes","No"),q1);
        questions.add(q1);
        s.questions=questions;
        surveyRepo.save(s);
    }

    fun gen3(){
        val s= Survey(name = "Experience")

    }


    private fun addChoices(choices:List<String>,q:Question){
        val cList =ArrayList<Choice>();
        choices.forEach { c-> cList.add(Choice(answer = c, question = q))};
        q.choices=cList;
    }
}