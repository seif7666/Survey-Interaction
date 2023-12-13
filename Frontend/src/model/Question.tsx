export class Question{
    protected ID:number;
    protected header:string;

    constructor(ID:number, header:string){
        this.ID=ID;
        this.header= header;
    }
}

export class Choice{
    private answer:string;
    constructor(answer:string){this.answer=answer;}
    getAnswer=()=>this.answer;
}
export class MCQ extends Question{
    private choices:Array<Choice>=new Array();
    constructor(ID:number,header:string){
        super(ID,header);
    }
    public  addChoice(choice:string):void{
        this.choices.push(new Choice(choice));
    }
    public getChoice(index:number):string{
        if(index < this.choices.length && index >=0){
            let choice=  this.choices[index];
            if(typeof(choice) ===undefined)
                throw new Error('choice is undefined!');
            return choice.getAnswer()
        }
        throw new Error('Index out of bounds!');
    }
    
}

class QuestionFactory{

    public static getQuestion(object:any):any{
        return null;
    }
}