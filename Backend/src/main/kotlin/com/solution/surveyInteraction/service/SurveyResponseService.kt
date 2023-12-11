package com.solution.surveyInteraction.service

import com.solution.surveyInteraction.model.Question
import com.solution.surveyInteraction.model.QuestionAnswer
import com.solution.surveyInteraction.model.SurveyResponse
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Service
interface SurveyResponseRepository:CrudRepository<SurveyResponse,Long>

data class JSONAnswerResponse(val questionID:Long,val answer:String);
data class JSONSurveyResponse(val solver:String?, val answers:List<JSONAnswerResponse>);

@Service
class SurveyResponseService (
    val surveyResponseRepository:  SurveyResponseRepository,
    val surveyRepository: SurveyRepository
    ){

    fun saveResponse(response:JSONSurveyResponse, surveyId:Long){
        val survey=surveyRepository.findById(surveyId).get();
        val surveyResponse=SurveyResponse(solverName = response.solver, survey = survey);
        val surveyQuestions= survey.questions;
        val answers=response.answers.map { answerResponse -> createQuestionAnswer(getQuestion(surveyQuestions,answerResponse.questionID),answerResponse.answer);}
        surveyResponse.answers=answers;
        surveyResponseRepository.save(surveyResponse);
    }
    private fun getQuestion(questions:List<Question>?,id:Long):Question{
        return questions?.find { q -> q.id ==id}!!;
    }
    private fun createQuestionAnswer(question:Question,answer:String):QuestionAnswer{
        val questionAnswer:QuestionAnswer= QuestionAnswer(answer=answer, targetQuestion = question);
        return questionAnswer;
    }

}