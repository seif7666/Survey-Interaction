package com.solution.surveyInteraction.model

import jakarta.persistence.*

@Entity(name="QUESTION_ANSWER")
data class QuestionAnswer(
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    val ID:Long=0,
    @Column(nullable = false, name = "ANSWER")
    val answer:String="",
    @ManyToOne(fetch=FetchType.LAZY)
    val response: SurveyResponse?=null,
    @ManyToOne(fetch = FetchType.LAZY)
    val targetQuestion: Question?= null,
)
