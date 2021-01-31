function ageindays() {
    var birthyear = prompt('enter your year in which you were born');
    var age = (2020 - birthyear) * 365;
    console.log(age);
    //or you can do is directly take age and multiply that with 365days 
    var h1 = document.createElement('h1');
    var textans = document.createTextNode('you are ' + age + ' days old!!!!');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textans);
    // appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node)
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('ageindays').remove();
}
//2nd 
function generatecat() {
    //
    //const winSound=new Audio('/sounds/victory.mp3');
    //
    let image = document.createElement('img');
    let div = document.getElementById('flex-gen');
    image.src = "/js images/cat.gif";
    div.appendChild(image);
    ////
    //winSound.play();
    ///
}
//3rd challenge 
//rock paper scissor
//and this rpsgame(yourchoice) in the bracket yourchoice will get from this in the html file that is tehr we created a button in the id of stone paper scissor in the html file and we are the using java script to get that to make a function ad get that value


function rpsgame(yourchoice) {
    //now we will create a choice one will be mychoice that is taken from the user and other is from the computer that is botchoice and one will be the option for the text that will be printed that it is draw you eon lost that kind of information can be in 0,1 true fale or words using multiple functions
    console.log(yourchoice);
    let humanchoice, botchoice;
    humanchoice = yourchoice.id;

    botchoice = numbertochoice(randtorps());
    console.log('computerchoice:', botchoice);

    result = decidewinner(humanchoice, botchoice);
    console.log(result);

    message = finalmessage(result);
    console.log(message);

    rpsfrontend(yourchoice.id, botchoice, message);
    //aded
    sound = finalsound(result);


}
function randtorps() {
    return Math.floor(Math.random() * 3);
}

function numbertochoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}


function decidewinner(yourchoice, computerchoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };
    var yourscore = rpsDatabase[yourchoice][computerchoice];
    var computerscore = rpsDatabase[computerchoice][yourchoice];
    return [yourscore, computerscore];
}
function finalmessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return { 'message': 'you lost!', 'color': 'red' };


    }
    else if (yourscore === 0.5) {
        return { 'message': 'Its a tie!', 'color': 'yellow' };

    } else {
        return { 'message': 'you won!', 'color': 'green' };

    }

}
////added
function finalsound([yourscore, computerscore]) {
    if (yourscore === 0) {
        loseSound.play();

    }
    else if (yourscore === 0.5) {


    } else {
        winSound.play();
    }
}
/////
function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
    var imagesdatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(30, 130, 76, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalmessage['color'] + ";font-size=60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesdatabase[botimagechoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-rbs').appendChild(humanDiv);
    document.getElementById('flex-box-rbs').appendChild(messageDiv);
    document.getElementById('flex-box-rbs').appendChild(botDiv);
}
//Math.floor(Math.random()*3);





var allbuttons = document.getElementsByTagName('button');
//console.log(allbuttons);

var copyallbuttons = [];
for (let i = 0; i < allbuttons.length; i++) {
    copyallbuttons.push(allbuttons[i].classList[1]);
    // it will push all the button sfrom starting to the array that is created above as copyallbuttons and all will be pushed in the array
}

console.log(copyallbuttons);

//now if we want to get the attributes f 0th button or the 4th button in array 
//i'll just write copyallbuttons[4] this will give the information of that following method
//and copyallbuttons will give the full array of buttons with their ids and description


//to remove styling from a particular button suppose we will write
//allbuttons[0].classList.remove('btn-primary')
//this will remove the styling of the first button 
//jo bhi uski classlist hi we'll first find out that using allbuttons[0].classList and then use it in removing or adding styling to it
//allbuttons[0].classList.add('btn-danger') using this jo primary vala tha ab voh danger i.e red color main convert ho jayega using console box


//console.log(changebutton.value); this will print whatever we click from the dropdown menu if we click random it will print random if grren it will print green and so on in the console 


function buttoncolorchange(changebutton) {

    if (changebutton.value === 'Grey') {
        greybuttonfnkn();
    }
    else if (changebutton.value === 'Green') {
        greenbuttonfnkn();
    }
    else if (changebutton.value === 'Reset') {
        resetbuttonfnkn();
    }
    else if (changebutton.value === 'Random') {
        randombuttonfnkn();
    }

}

function greybuttonfnkn() {
    for (let i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-secondary');
    }
}

function greenbuttonfnkn() {
    for (let i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-success');
    }
}

function resetbuttonfnkn() {
    for (let i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(copyallbuttons[i]);
    }
}

function randombuttonfnkn() {
    let choices = ["btn-primary", "btn-danger", "btn-warning", "btn-success", "btn-secondary"];
    for (let i = 0; i < allbuttons.length; i++) {

        let randomnumber = Math.floor(Math.random() * 5);
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(choices[randomnumber]);
    }
}



//BLACKJACK


let blackjackgame =
{
    'you': { 'scoreSpan': '#yourbox-result ', 'div': 'yourbox', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealerbox-result', 'div': 'dealerbox', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'k', 'q', 'A'],
    'cardsmapping': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'j': 10, 'k': 10, 'q': 10, 'A': [1, 11] },
    'wins': 0,
    'defeats': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};
//cardsmapping will map each and every value of card name to its vaue so that we can add that in our score value
const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];

const hitcardsound = new Audio('/sounds/cardsound.mp3');
const winSound = new Audio('/sounds/victory.mp3');
const loseSound = new Audio('/sounds/defeat.mp3');

//1st method to get elemnt and to add any event we don't have to make onclick function add event listener will work
document.getElementById("hit-button").addEventListener("click", blackjackHit)
document.getElementById("stand-button").addEventListener("click", dealerLogicscore)
document.getElementById("deal-button").addEventListener("click", dealbutton)

//2nd method of selecting an item is using quesryselsector and the id 

// document.querySelector("#hit-button").addEventListener("click", blackjackHit)

// function blackjackHit()
// {
//     alert('hi');
// }
function blackjackHit() {
    //we need to make sure that we can onlt hit the hit button only before hiting stand once we have hit the stand button we can not hit the stand button

    //so the condn will be it will work only one when isStand function is false jaise hi isStand true ho jayega we'll not be able to hit the hit button

    if (blackjackgame['isStand'] === false) {
        let card = randomcardselect();
        //console.log(card);
        showCard(card, YOU);
        updatescorevalue(card, YOU);
        showScore(YOU);
        //console.log(YOU['score']);
        //the above statement will print the sum of cards in console block
    }

}
function randomcardselect() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackgame['cards'][randomIndex];
}
function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `/js images/${card}.png`;
        //we have used string templating  and ` this is called backtick we are using templating bcoz we are having multiple images so to get themall we have created a card named variable and used it instead of string concatinating
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        //above is the link to know more about templating
        document.getElementById(activePlayer['div']).appendChild(cardImage);
        hitcardsound.play();
    }
}

function dealbutton() {
    if (blackjackgame['turnsOver'] === true) {

        //after that the stand button should be deactivated
        blackjackgame['isStand'] = false;

        let yourImages = document.querySelector('#yourbox').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealerbox').querySelectorAll('img');
        //console.log(yourImages);
        //this will print nodelist array that will show how many images are been shown when hit button is clicked if it is threee images it willl show NodeList(3)[img,img,img] and will givw data of that on clicking it
        // yourImages[0].remove();
        //this one is to remove one by one 
        //now this will remove the image on clicking the deal button
        //now to remove all images at once or in simple terms reset it we'll use a for loop
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#yourbox-result').textContent = 0;
        document.querySelector('#dealerbox-result').textContent = 0;

        document.querySelector('#yourbox-result').style.color = 'white';
        document.querySelector('#dealerbox-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "let's play";
        document.querySelector('#blackjack-result').style.color = 'black';


        //after all the programm is run that is deal button has done the work then we set it back to true
        blackjackgame['turnsOver'] = true;
    }

}

function updatescorevalue(card, activePlayer) {
    //for calculating the ace value as it is in array from 1 to 11
    //for the value of ace as it is an array
    //if adding 11 keeps me below 21,add 11 ,otherwise ,add 1
    if (card === 'A') {
        if (activePlayer['score'] + blackjackgame['cardsmapping'][card][1] <= 21) {

            activePlayer['score'] += blackjackgame['cardsmapping'][card][1];

        }
        else {
            activePlayer['score'] += blackjackgame['cardsmapping'][card][0];

        }
    }
    else {
        activePlayer['score'] += blackjackgame['cardsmapping'][card];
    }
}


//below code is for showing score in the scorebox in right of you: in the div
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {

        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!'
        //the above statement will only work when there is no semi-colon at the end
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}


//now as we are pressing stand it is instantly showing the card not waiting so the below function will make it slow
//so the below sleep function is taking time in ms and is setting time 
//ms stands for miliseconds
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}
////after sleep function we have created dealerlogicscore function as asynchronous 
async function dealerLogicscore() {
    blackjackgame['isStand'] = true;
    //the above statement is that as soon as we click stand butonthe isStand mode is activated we can 

    while (DEALER['score'] < 16 && blackjackgame['isStand'] === true) {

        let card = randomcardselect();
        showCard(card, DEALER);
        updatescorevalue(card, DEALER);
        showScore(DEALER);
        ////calling the sleep fnkn and sending 1000ms in the sleep function ms
        await sleep(1000);
    }

   
        //after 15 all turn will be over so we will write
        blackjackgame['turnsOver'] = true;
        //we will set the turn over to true and it will show the result
        let winner = bjWinnerResult();
        showResult(winner);
    

}
//return winner ad return who just won the game
//we have to compute the winner and retutn winner 
//update the wins,defeats,and draws in the table
function bjWinnerResult() {
    let winner;
    if (YOU['score'] <= 21) {
        //condition:higher than dealer or when dealer busts but you are 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            //wining condn
            blackjackgame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            //console.log('YOU LOSST!!');
            blackjackgame['defeats']++;
            winner = DEALER;

        }
        else if (YOU['score'] === DEALER['score']) {
            blackjackgame['draws']++;

        }
    }
    //condition when user busts but dealer doesn't
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackgame['defeats']++;
        winner = DEALER;
    }

    //condn when and the dealer busts 
    else if (YOU['score'] > 21 && (DEALER['score'] > 21)) {
        blackjackgame['draws']++;


    }
    // console.log('winner is:', winner);
    return winner;
    console.log(blackjackgame);
}
//for showing the messaage in div inplace of let's play 
function showResult(winner) {
    let message, messagecolor;

    if (blackjackgame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackgame['wins'];
            message = 'you won!!';
            messagecolor = 'green';
            winSound.play();
        }
        else if (winner === DEALER) {
            document.querySelector('#defeats').textContent = blackjackgame['defeats'];
            message = 'you lost!!';
            messagecolor = 'red';
            loseSound.play();

        }
        else {
            document.querySelector('#draws').textContent = blackjackgame['draws'];
            message = 'There is a tie';
            messagecolor = 'yellow';

        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messagecolor;
    }
}
