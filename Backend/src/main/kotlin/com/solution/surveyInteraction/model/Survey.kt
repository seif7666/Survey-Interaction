package com.solution.surveyInteraction.model

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import org.springframework.boot.autoconfigure.web.WebProperties.Resources.Chain.Strategy

@Entity(name="SURVEY")
data class Survey(
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="ID")
    val ID:Long=0,
    @Column(name="SURVEY_NAME")
    val name: String="",
    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "survey")
    var questions:List<Question>?= ArrayList()
)
