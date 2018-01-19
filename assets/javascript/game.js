//possible answers
var films=["Fast Times at Ridgemont High","Valley Girl", "Rumble Fish", "Racing with the Moon","The Cotton Club","Birdy","The Boy in Blue","Peggy Sue Got Married",
"Raising Arizona","Moonstruck","Never on Tuesday","Vampire's Kiss","Time to Kill","Fire Birds","Wild at Heart","Zandalee","Honeymoon in Vegas","Amos and Andrew",
"Deadfall","Red Rock West","Guarding Tess","It Could Happen to You","Trapped in Paradise","Kiss of Death","Leaving Las Vegas","The Rock","Con Air",
"Face-Off","City of Angels","Snake Eyes","Bringing Out the Dead","The Family Man","Captain Corelli's Mandolin",
"Christmas Carol","Windtalkers","Adaptation","Sonny","Matchstick Men","National Treasure","Lord of War","The Weather Man","The Ant Bully","The Wicker Man",
"World Trade Center","Ghost Rider","Grindhouse","Next","National Treasure: Book of Secrets","Bangkok Dangerous","Knowing","G-Force","Astro Boy",
"Bad Lieutenant: Port of Call New Orleans","Kick-Ass","The Sorcerer's Apprentice","Season of the Witch","Drive Angry","Trespass","Seeking Justice",
"Ghost Rider: Spirit of Vengeance","Stolen","The Croods","The Frozen Ground","Joe","Rage","Outcast","Left Behind","Dying of the Light","The Runner",
"Pay the Ghost","The Trust","Snowden","USS Indianapolis: Men of Courage","Dog Eat Dog","Army of One","Arsenal","Vengeance: A Love Story","Inconceivable",
"Mom and Dad","The Humanity Bureau"];


//alphabet
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//variables and empty arrays
var toOutput= [];
var toOutput2= [];
var toOutput3= [];
var partialClue= [];
var badLetters=[];
var guesses=6;
var wins=0;
//picks a clue
var currentClue= films[Math.floor(Math.random() * films.length)];
//get all lower cases
var lowerClue=currentClue.toLowerCase();
//splits clue
var parsedClue = lowerClue.split("");

//after pressing a key
document.onkeyup = function(event) {
   //start the look
    chances.textContent=guesses;
    document.querySelector(".badBoxContent").innerHTML = "Ready! Guess a letter.";
    boxLabel.textContent="Letters that should be left behind:";

    //creates board with spaces and grammar marks

    for (var i = 0; i < parsedClue.length; i++) {
        if (parsedClue[i] === " "){
        toOutput.push("\u00A0");
    }
    else if ((parsedClue[i] === ":")||(parsedClue[i] === "-")||(parsedClue[i] === "'")){
        toOutput.push(parsedClue[i]);
    }
    else {
        toOutput.push("_");
    }

    }

    //Output2 is clean output
    toOutput2=toOutput.join(" ");
    answer.textContent=toOutput2;

//actual game, should only loop when no blanks are left OR loser hasn't lost

document.onkeyup = function(event) {
    var userGuess=event.key.toLowerCase();
    if ((parsedClue.indexOf(userGuess) !== -1)&&(guesses>0)&&(toOutput.indexOf("_") !== -1)) {
            for (var j = 0; j < parsedClue.length; j++) {
                if (parsedClue[j] === userGuess){
                    //replacing blanks with letters
                    toOutput.splice(j,1,parsedClue[j]);
                    toOutput3=toOutput.join(" ");
                    answer.textContent=toOutput3;
                }
            }
        }
        //this makes sure letters are going in and game is still in progress
        else if ((letters.indexOf(userGuess)>-1)&&(guesses>0)&&(toOutput.indexOf("_") !== -1)){
            badLetters.push(userGuess);
            document.querySelector(".badBoxContent").innerHTML = badLetters;
            guesses--;
            chances.textContent=guesses;

        }
        //this is for non letters
        else if ((letters.indexOf(userGuess) === -1)&&(guesses>0)&&(toOutput.indexOf("_") !== -1)){
            alert("Please choose a letter.");
        }       

    //when player loses    
    if (guesses === 0){
            boxLabel.textContent="As feared but expected";
            document.querySelector(".badBoxContent").innerHTML="You lose....";
            setTimeout(function() {
                reset();
            }, 2000);
        }
    //when players wins
    if (toOutput.indexOf("_") === -1) {
            answer.textContent=toOutput3;
            wins++;
            winCounter.textContent=wins;
            boxLabel.textContent="The Gods Rejoice because";
            document.querySelector(".badBoxContent").innerHTML="You win!";
            setTimeout(function() {
                reset();
            }, 2000);
            
        }

};
};

//reset function;
var reset=function (){
    toOutput= [];
    toOutput2= [];
    partialClue= [];
    badLetters=[];
    guesses=6;
    winCounter.textContent=wins;
    chances.textContent=guesses;
    boxLabel.textContent="Letters that should be left behind:";
    document.querySelector(".badBoxContent").innerHTML = "Ready! Guess a letter.";
    currentClue= films[Math.floor(Math.random() * films.length)];


   lowerClue=currentClue.toLowerCase();

    parsedClue = lowerClue.split("");

    for (var i = 0; i < parsedClue.length; i++) {
        if (parsedClue[i] === " "){
            toOutput.push("\u00A0");
        }
        else if ((parsedClue[i] === ":")||(parsedClue[i] === "-")||(parsedClue[i] === "'")){
            toOutput.push(parsedClue[i]);
        }
        else {
            toOutput.push("_");
        }

          }

    toOutput2=toOutput.join(" ");
    answer.textContent=toOutput2;
    }

