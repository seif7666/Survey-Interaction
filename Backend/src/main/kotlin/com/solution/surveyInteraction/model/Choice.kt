package com.solution.surveyInteraction.model

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity(name="CHOICE")
data class Choice(
//    @EmbeddedId
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ID")
    val ID:Long=0,
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    var question: Question? =null,
    @Column(name = "ANSWER")
    val answer:String=""
)
