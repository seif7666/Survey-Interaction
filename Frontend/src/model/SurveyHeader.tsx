import React from "react";

export class SurveyHeader{
    private ID:number;
    private title:string;

    constructor(ID:number, title:string){
        this.ID= ID;
        this.title=title;
    }

    public   getTitle():string{return this.title};
    public  getID():number  {return this.ID;}
}