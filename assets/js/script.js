//variables
let start = false;
let wordsArray = ["abcd", "efgh","ijkl","mnop","qrst","uvwx"];
var word = `${wordsArray[Math.floor(Math.random()*wordsArray.length)]}`;
var guess = word.toUpperCase().replace(/[A-Z]/g,'-');
document.getElementById('wordToGuess').innerText = guess;
var score = 10;
//starting game
document.getElementById('start').addEventListener('click',()=>{
    start = true;
    score = 10;
    document.getElementById('pScore').innerText = `${score}/10`;
    word = `${wordsArray[Math.floor(Math.random()*wordsArray.length)]}`;
    guess = word.toUpperCase().replace(/[A-Z]/g,'-');
    document.getElementById('wordToGuess').innerText = guess;
    console.log(word);
    let alphabet = ['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
    for (let i = 0; i < alphabet.length; i++) {
        document.getElementById(`letter_${alphabet[i]}`).style.backgroundColor = "white";            
    }
});
// for real keyboard use - called through the html document => see "body onkeydown..."
function keyboard(evenement){
    if (start===false){ // while start === false => inputs are not interpreted
        return
    }    
    let key = window.event ? evenement.keyCode : evenement.which; //
    key = String.fromCharCode(key).substr(0,1); 
    document.getElementById(`letter_${key.toLowerCase()}`).style.backgroundColor = "#990099";//highlight the key of the keypad on the screen
    check(key);
}
// for virtual keyboard use
function button(letter){
    if (start===false){ // while start === false => inputs are not interpreted
        return
    } 
    let key= document.getElementById(`letter_${letter}`).innerText; //get the letter
    document.getElementById(`letter_${key.toLowerCase()}`).style.backgroundColor = "#990099";//highlight the key of the keypad on the screen
    check(key); 

}
//check the letter choosen by the user        
function check(letter){
    let wordArray = word.split('');//intermediate array use to perform the loop
    //good letter
    if (word.toUpperCase().includes(letter) ===true) {
        for (let i = 0; i < word.length; i++) {
            // display the letter on screen at the good position
            if (letter === wordArray[i].toUpperCase()) { 
                guess= guess.substr(0,i)+letter+guess.substr(i+1);
                document.getElementById('wordToGuess').innerText = guess;
            }  
        }
        // end game -win
        if (guess ===word.toUpperCase()) {
            alert ("YOU WIN");
            start = false;
        }
    //wrong letter    
    } else {
        alert('error');
        score -= 1;
        document.getElementById('pScore').innerText = `${score}/10`;
        // end game -loose
        if (score <=0) {
            start = false;
            alert("YOU LOOZE");
        }  
    }

}

