function Question1(){
    var question1 = createElement("h2","What is your hobby ?");
    question1.position(width/2+290,200);

    var answerBar1 = createInput("Enter Your Answer Here");
    answerBar1.position(width/2+300,300);

    var submit1 = createButton("Submit Your Answer");
    submit1.position(width/2+350,350);

    submit1.mousePressed(()=>{
        var answer1 = answerBar1.value();
        arr.push(answer1);
        question1.hide();
        answerBar1.hide();
        submit1.hide();
        Question2();      
    })
    
}

function Question2(){
    var question2 = createElement("h2","What did you wanted to be when you where a kid ?");
    question2.position(width/2+150,200); 

    var answerBar2 = createInput("Enter Your Answer Here");
    answerBar2.position(width/2+300,300);

    var submit2 = createButton("Submit Your Answer");
    submit2.position(width/2+350,350);

    submit2.mousePressed(()=>{
        var answer2 = answerBar2.value();
        arr.push(answer2);
        question2.hide();
        answerBar2.hide();
        submit2.hide();
        Question3();
    });
    
}

function Question3(){
    var question3 = createElement("h2","What is your favourite sport ?");
    question3.position(width/2+150,200); 

    var option31 = createButton("Badminton");

    option31.position(width/2+300,300);
    var option32 = createButton("Cricket");

    option32.position(width/2+300,350);
    var option33 = createButton("Football");

    option33.position(width/2+300,400);
    var option34 = createButton("Boxing");

    option34.position(width/2+300,450);

    option31.mousePressed(()=>{
        arr.push("Badmintion");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option32.mousePressed(()=>{
        arr.push("Cricket");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option33.mousePressed(()=>{
        arr.push("Football");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option34.mousePressed(()=>{
        arr.push("Boxing");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

} 

function Question4(){
    var question4 = createElement("h2","Which is your favorite cold drink ?");
    question4.position(width/2+150,200);

    var option41 = createButton("Fanta");
    option41.position(width/2+300,300);

    var option42 = createButton("Pepsi");
    option42.position(width/2+300,350);

    var option43 = createButton("Sprite");
    option43.position(width/2+300,400);

    var option44 = createButton("Mountain Dew");
    option44.position(width/2+300,450);


    option41.mousePressed(()=>{
        arr.push("Fanta");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option42.mousePressed(()=>{
        arr.push("Pepsi");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option43.mousePressed(()=>{
        arr.push("Sprite");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option44.mousePressed(()=>{
        arr.push("Mountain Dew");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });
}

function Question5(){
    var question5 = createElement("h2","Which smartphone brand do you like the most ?");
    question5.position(width/2+150,100); 

    var option51 = createButton("Samsung");
    option51.position(width/2+250,200);

    var option52 = createButton("Oppo");
    option52.position(width/2+250,250);

    var option53 = createButton("Vivo");
    option53.position(width/2+250,300);

    var option54 = createButton("Apple");
    option54.position(width/2+250,350);

    var option55 = createButton("Xiaomi");
    option55.position(width/2+250,400);

    var option56 = createButton("Nokia");
    option56.position(width/2+450,200);

    var option57 = createButton("Lenovo");
    option57.position(width/2+450,250);

    var option58 = createButton("Sony");
    option58.position(width/2+450,300);

    var option59 = createButton("Realme");
    option59.position(width/2+450,350); 

    var option510 = createButton("Huawei");
    option510.position(width/2+450,400);



    option51.mousePressed(()=>{
        arr.push("Samsung");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option52.mousePressed(()=>{
        arr.push("Oppo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option53.mousePressed(()=>{
        arr.push("Vivo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option54.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option55.mousePressed(()=>{
        arr.push("Xiaomi");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option56.mousePressed(()=>{
        arr.push("Nokia");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option57.mousePressed(()=>{
        arr.push("Lenovo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option58.mousePressed(()=>{
        arr.push("Sony");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option59.mousePressed(()=>{
        arr.push("Realme");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option510.mousePressed(()=>{
        arr.push("Huawei");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });
}

function endQuestion(){
    var feedBackDir = createElement("h1","Please enter your feedback below. :)");
    feedBackDir.position(width/2+150,150);

    var feedBack = createInput();
    feedBack.position(700,250);

    endButton = createButton("End The Survey");
    endButton.position(700,300);

    endButton.mousePressed(()=>{
      var feedBackAnswer = feedBack.value();
      arr.push(feedBackAnswer);
      name = nameBar.value();
      emailID = emailIDBar.value();
  
      voterCount+=1;
      updateCount(voterCount);
  
      voterRef = "voters/voter" + voterCount;
      DB.ref(voterRef).set({
        name:name,
        emailID:emailID,
        vote:vote
      });
      feedBackDir.hide();
      feedBack.hide();
      endButton.hide();
      var thank = createElement("h1","Thank you for attending my survey")
      thank.position(350,100);
    });  
  
}