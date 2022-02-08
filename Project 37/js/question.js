class QUESTION{
   constructor(){
      this.title = createElement('h1')
      this.input1 = createInput("enter your name here")
      this.input2= createInput("enter the correct option")
      this.button = createButton('Submit')
      this.question = createElement('h3')
      this.option1 = createElement('h5')
      this.option2 = createElement('h5')
      this.option3 = createElement('h5')
      this.option4 = createElement('h5')
}

hide(){
    this.title.hide()
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
}

display(){
     this.title.html("my quiz game")
     this.title.position(375,5)

     this.question.html("Question:- What starts and end with the letter 'E', but has only one letter?");
     this.position.position(150,80);
     this.option1.html("1: everyone");
     this.option1.position(150,100);
     this.option2.html("2: envelope");
     this.option2.position(150,120);
     this.option3.html("1: estimate");
     this.option3.position(150,140);
     this.option4.html("2: example");
     this.option4.position(150,160);
     
     this.input1.position(150,230);
     this.input2.position(300,230);
     this.button.position(280,300);

 this.button.mousePressed(()=>{

    this.title.hide()
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
 })

 contestant.name = this.input1.value();
 contestant.answer = this.input2.value();
 contestantCount += 1;
 contestant.index = contestantCount
 contestant.update();
 contestant.updateCount(contestantCount);

}
}