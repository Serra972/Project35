var DB, greeting, nameBar, emailIDBar, startButton, endButton;
var voterRef, voterCountRef;
var voterCount=0, name = null, emailID = null, vote = null;
var name, emailID, arr = [];
var gameState = 1;

function updateCount(count){
  DB.ref('/').update({
    voterCount : count
  });
}

function setup() {
  DB = firebase.database();
  createCanvas(800,800);

  greeting = createElement('h1',"Welcome To My Survey");
  greeting.position(width/2+230,100);
  nameBar = createInput("Name");
  nameBar.position(width/2+290,250);
  emailIDBar = createInput("email ID");
  emailIDBar.position(width/2+290,300);
  startButton = createButton("Start the survey");
  startButton.position(700,350);

  

  startButton.mousePressed(()=>{
    greeting.hide();
    nameBar.hide();
    emailIDBar.hide();
    startButton.hide();

    Question1();
    gameState = 2;
  })
  
    
}

function draw() {
  background("yellow");
  voterCountRef = DB.ref('voterCount');
  voterCountRef.on("value",(data)=>{
    voterCount = data.val();
  });
  vote = arr;
}