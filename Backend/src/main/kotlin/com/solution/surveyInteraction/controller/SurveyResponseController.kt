package com.solution.surveyInteraction.controller

import com.solution.surveyInteraction.service.JSONSurveyResponse
import com.solution.surveyInteraction.service.SurveyResponseService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class SurveyResponseController(val surveyResponseService: SurveyResponseService){

    @PostMapping("/survey_response/{surveyID}")
    fun saveSurveyResponse(@PathVariable surveyID:Long,@RequestBody response:JSONSurveyResponse):String{
        surveyResponseService.saveResponse(response,surveyID);
        return "Done!";
    }
}