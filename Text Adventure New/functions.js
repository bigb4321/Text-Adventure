//Runs while playing is true
var playing = true;
var playerHealth = 20;
var playerDamage = 0;
var enemyHealth = 20;
var enemyDamage = 0;
function clear() {
    document.getElementById("qO").innerHTML = "";
    document.getElementById("tFo").innerHTML = "";
    document.getElementById("bFo").innerHTML = "";
    document.getElementById("alertDiv").innerHTML = "";
}
function silent() {
    clear();
    document.getElementById("qO").innerHTML = "You chose not to talk, but this is a work in progress.";
}
function talk() {
    clear();
    document.getElementById("qO").innerHTML = "You chose to talk, but this is a work in progress.";
}
function speakQ() {
    clear();
    document.getElementById("qO").innerHTML = "Would you like to say something to whatever is following you?";
    var silentBut = document.createElement("input");
    
    silentBut.setAttribute("type", "button");
    silentBut.setAttribute("value", "No");
    silentBut.addEventListener("click", silent);
    
    document.getElementById("tFo").appendChild(silentBut);
    
    var talkBut = document.createElement("input");
    
    talkBut.setAttribute("type", "button");
    talkBut.setAttribute("value", "Yes");
    talkBut.addEventListener("click", talk);
    
    document.getElementById("tFo").appendChild(talkBut);
}
function mtnPath() {
    clear();
    function text3() {
        document.getElementById("qO").innerHTML = "The further you go, the more certain you are something is following you.";
        var nextBut = document.createElement("input");
    
        nextBut.setAttribute("type", "button");
        nextBut.setAttribute("value", ">>>>>>>>>>>>>>>");
        nextBut.addEventListener("click", speakQ);
        document.getElementById("tFo").innerHTML = "";
        document.getElementById("tFo").appendChild(nextBut);
    }
    function text2() {
        document.getElementById("qO").innerHTML = "As you climb, you hear footsteps behind you. When you turn to look, nothing is there.";
        var nextBut = document.createElement("input");
        nextBut.setAttribute("type", "button");
        nextBut.setAttribute("value", ">>>>>>>>>>>>>>>");
        nextBut.addEventListener("click", text3);
        document.getElementById("tFo").innerHTML = "";
        document.getElementById("tFo").appendChild(nextBut);
    }
    function text1() {
        document.getElementById("qO").innerHTML = "You take the path, and soon find yourself in the thin air of the mountains.";
        var nextBut = document.createElement("input");
        nextBut.setAttribute("type", "button");
        nextBut.setAttribute("value", ">>>>>>>>>>>>>>>");
        nextBut.addEventListener("click", text2);
        document.getElementById("tFo").innerHTML = "";
        document.getElementById("tFo").appendChild(nextBut);
    }
    document.getElementById("qO").innerHTML = "You walk to the base of the mountain. In front of you is a path.";
    var nextBut = document.createElement("input");
    nextBut.setAttribute("type", "button");
    nextBut.setAttribute("value", ">>>>>>>>>>>>>>>");
    nextBut.addEventListener("click", text1);
    document.getElementById("tFo").innerHTML = "";
    document.getElementById("tFo").appendChild(nextBut);
}
    
function cityPath() {
    clear();
    
}
function mountainQ() {
    clear();
    document.getElementById("qO").innerHTML = "To your left, you see a towering mountain. On your right is a giant city. </br> which way do you go?";
    var leftBut = document.createElement("input");
    
    leftBut.setAttribute("type", "button");
    leftBut.setAttribute("value", "Left, to the mountain");
    leftBut.addEventListener("click", mtnPath);
    
    document.getElementById("tFo").appendChild(leftBut);
    
    var rightBut = document.createElement("input");
    
    rightBut.setAttribute("type", "button");
    rightBut.setAttribute("value", "right, to the city");
    rightBut.addEventListener("click", cityPath);
    
    document.getElementById("tFo").appendChild(rightBut);
}

function recordNameText() {
    var userName = document.getElementById("nameTB").value;
    if (userName.length > 0) {
        var greetLine = document.createElement("p");
        greetLine.innerHTML = "Welcome, " + userName + "! Let us begin!";
        clear();
        document.getElementById("qO").appendChild(greetLine);
        setTimeout(mountainQ, 1500);
    } else {
        document.getElementById("alertDiv").innerHTML = "Type your name!";
        
    }
}
function nameDFu() {
    
    document.getElementById("qO").innerHTML = "What is your adventurer's name?";
    
    var nameBox = document.createElement("input");
    
    nameBox.setAttribute("type", "text");
    nameBox.setAttribute("id", "nameTB");
    nameBox.setAttribute("placeholder", "Type your name here!");
    
    document.getElementById("tFo").appendChild(nameBox);
    
    
    var nameBut = document.createElement("input");
    nameBut.setAttribute("type", "button");
    nameBut.setAttribute("value", "Start your adventure!");
    nameBut.addEventListener("click", recordNameText);
    
    document.getElementById("bFo").appendChild(nameBut);
}

/*
		while(playing){
			//Asks and saves user's name
            let userName;
            //creates the name choice question
            function nameDFu() {
                document.getElementById("StartO").innerHTML = "";
                document.getElementById("nameT").innerHTML = "What is your adventurer's name?";
                var nameBox = document.createElement("input");
                nameBox.setAttribute("type", "text");
                nameBox.setAttribute("id", "nameD");
                nameBox.setAttribute("placeholder", "Type your name here!");
                var nameForm = document.getElementById("nameFo");
                
                nameForm.appendChild(nameBox);
            }
         function pathChoicePFu() {
             
         }
               
			//Prints end of program
			alert("Welcome, " + userName + ".");
			alert("To your left, you see a towering mountain. On your right is a giant city.");
			
			//Asks and saves user's location
			var direction = prompt("Would you like to go to the mountain or the city?");
			direction = direction.toLowerCase();
			
			if(direction == "left" || direction == "mountain"){
				alert("You walk to the base of the mountain. In front of you is a path.");
				alert("You take the path, and soon find yourself in the thin air of the mountains.");
				alert("As you climb, you hear footsteps behind you. When you turn to look, nothing is there.");
				alert("The further you go, the more certain you are something is following you.");
				var speakChoice = prompt("Would you like to say something to whatever is following you?");
				speakChoice = speakChoice.toLowerCase();
				if(speakChoice == "no"){
					alert("You remain silent. Hoping whatever it is will leave you alone.");
				}
				else{
					var say = prompt("What would you like to say?");
					alert("You call out to the thing following you. \"" + say + "\"");
					alert("You pause, waiting for a response.");
				}
				
				alert("You hear a loud buzzing behind you.");
				alert("You whip around to see a  bumblebee buzzing at you.");
				
				var fight = prompt("Would you like to fight or calm the bumblebee?");
				fight = fight.toLowerCase();
				
				if(fight == "fight"){

					while(true){
						playerDamage = makeRandomNumber(1,10);
						enemyDamage = makeRandomNumber(2,11);
						enemyHealth -= playerDamage;
						if(enemyHealth <= 0){
							alert("The bumblebee turns and buzzes away! You have won!");
							alert("You have faced the mighty bumblebee. You decide to go home, satisfied with your journey.");
							playing = false;
							break;
						}
						playerHealth -= enemyDamage;
						if(playerHealth <= 0){
							alert("You have been defeated.");
							alert("You have faced the mighty bumblebee. You decide to go home, satisfied with your journey.");
							playing = false;
							break;
						}
						
						if(enemyHealth > 15){
							alert("You stand tall, hoping to intimidate the bumblebee.");
						}
						else if(enemyHealth > 10 && enemyHealth <= 15){
							alert("You wave your arms above your head, to appear taller than the bumblebee.");
						}
						else if(enemyHealth > 5 && enemyHealth <= 10){
							alert("You begin to shout at the bumblebee, and it starts buzzing away.");
						}
						else if(enemyHealth > 0 && enemyHealth <= 5){
							alert("You wave your arms, shout, and jump up and down. The bee is hurriedly buzzing away.");
						}
						alert("Your health is " + playerHealth);
						alert("The bumblebee's health is " + enemyHealth);
					}
				}
				else if(fight == "calm"){
					alert("You compliment the bumblebee on its magnificent colors.");
					alert("The angry buzzing slows to a soft hum.");
					alert("You start singing the bumblebee's favorite tunes.");
					alert("The bee buzzes along with your song.");
					alert("The bee happily buzzes away, great job!");
					alert("You have faced the mighty bumblebee. You decide to go home, satisfied with your journey.");
					playing = false;
				}
				else{
					var check = prompt("Sorry, that is not an option. Would you like to play again?");
					check = check.toLowerCase();
				
					if(check == "no"){
						playing = false;
					}
				}
			}
			else if(direction == "right" || direction == "city"){
				alert("You decide to see what is going on in the city.");
				alert("Once in the city, you see a market to your left, and suburbs to your right.");
				var nextDirection = prompt("Would you like to go to the market, or the suburbs?");
				nextDirection = nextDirection.toLowerCase();
				
				if(nextDirection == "left" || nextDirection == "market"){
					alert("You journey in to the market, excited to see what is for sale.");
					alert("What luck! Today happens to be bean day. Hundreds of beans are for sale.");
					var shop = prompt("Would you like to shop?");
					shop = shop.toLowerCase();
					
					if(shop == "no"){
						var check = prompt("Sorry, that is not an option. Would you like to play again?");
						check = check.toLowerCase();
					
						if(check == "no"){
							playing = false;
						}
					}
					else{
						alert("You sprint into the market, excited to get your hands on some beans.");
						var beans = prompt("You see red beans, blue beans, green beans, and magic beans. Which do you throw your money at?");
						beans = beans.toLowerCase();
						
						if(beans == "red beans" || beans == "red"){
							alert("You throw your money at some red beans. What a great choice!");
						}
						else if(beans == "blue beans" || beans == "blue"){
							alert("You throw your money at blue beans. They are as blue as the sky!");
						}
						else if(beans == "green beans" || beans == "green"){
							alert("You throw your money at the green beans. They are green like the grass beneath your feet!");
						}
						else if(beans == "magic beans" || beans == "magic"){
							alert("You throw your money at the magic beans. They get up and follow you out of the market!");
						}
						else{
							alert("You can't decide, so you throw money at every bean you see!");
						}
					}
					
					alert("You return home, satisfied with your amazing trip to the market.");
				}
				else if(nextDirection == "right" || nextDirection == "suburbs"){
					alert("You sprint to the suburbs, eager to see who is there.");
					alert("Arriving at the rows of houses, you see all of your friends!");
					alert("Jill!");
					alert("Douglas!");
					alert("Stevia!");
					alert("Janice!");
					alert("Mort!");
					alert("Stew!");
					alert("Hilda!");
					alert(userName + "!");
					alert("Wow, the whole crew is here. You wave at them, deciding it is time to go.");
					alert("You return home, happy to have seen your friends in the burbs.");
				}
				else{
					var check = prompt("Sorry, that is not an option. Would you like to play again?");
					check = check.toLowerCase();
				
					if(check == "no"){
						playing = false;
					}
				}
			}
			else{
				var check = prompt("Sorry, that is not an option. Would you like to play again?");
				check = check.toLowerCase();
				
				if(check == "no"){
					playing = false;
				}
			}
		}
		
		function makeRandomNumber(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
        */