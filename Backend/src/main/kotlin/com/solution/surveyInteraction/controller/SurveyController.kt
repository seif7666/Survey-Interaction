package com.solution.surveyInteraction.controller

import com.solution.surveyInteraction.model.Survey
import com.solution.surveyInteraction.service.SurveyHeader
import com.solution.surveyInteraction.service.SurveyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import java.util.*


@RestController
class SurveyController(
    val surveyService:SurveyService
) {

    @GetMapping("/")
    fun set(): String {
        surveyService.addSurveys();
        return "Success!";
    }

    @GetMapping("/surveys")
    fun getSurveys(): List<SurveyHeader>? {
        return surveyService.getSurveyHeaders();
    }
    @GetMapping("/survey/{surveyId}")
    fun getSurveyByID(@PathVariable  surveyId:Long):Survey?{
        return surveyService.getSurvey(surveyId);
    }
}