package com.solution.surveyInteraction.model

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity(name="SURVEY_RESPONSE")
data class SurveyResponse(
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.AUTO)
    val ID:Long=0,
    @Column(name="SOLVER_NAME")
    val solverName:String?="",
    @ManyToOne(fetch = FetchType.LAZY)
    val survey: Survey?=null,

    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "response")
    @JsonIgnore
    var answers:List<QuestionAnswer>?=null
    )
