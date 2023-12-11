package com.solution.surveyInteraction.model
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity(name = "QUESTION")
data class Question(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ID")
    val id: Long= 0,
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    var survey: Survey?=null,
    @Column(name="HEADER",nullable = false)
    val header:String="",
    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "question")
    var choices:List<Choice>?=null
)