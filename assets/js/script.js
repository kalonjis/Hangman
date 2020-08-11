//variables
let start = false;
let wordsArray = ["abcd", "efgh","ijkl","mnop","qrst","uvwx"];
let word = "";
let guess = word.toUpperCase().replace(/[A-Z]/g,'-');
//document.getElementById('wordToGuess').innerText = guess;
let score = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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
    ctx.clearRect(0, 0, 350, 350);

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
            document.getElementById('result').innerText = "YOU WIN";
            start = false;
        }
    //wrong letter    
    } else {
        score -= 1;
        document.getElementById('pScore').innerText = `${score}/10`;
        drawHangMan(score);
        // end game -loose
        if (score <=0) {
            start = false;
            document.getElementById('result').innerText = "YOU LOOZE";
        }  
    }

}
function draw(toX, toY, lineX, lineY, round = false) {
    ctx.strokeStyle = "#999000999";
    ctx.beginPath();
  
    if (round) {
      ctx.arc(toX, toY, lineX, lineY, 2 * Math.PI); // Head
    } else {
      ctx.moveTo(toX, toY);
      ctx.lineTo(lineX, lineY);
    }
  
    ctx.stroke();
  }
  function drawHangMan(score) {
    switch (score) {
      case 9:
        draw(100, 150, 100, 10);
        break;
      case 8:
        draw(90, 145, 250, 145);
        break;
      case 7:
        draw(100, 20, 200, 20);
        break;
      case 6:
        draw(200, 20, 200, 30);
        break;
      case 5:
        draw(200, 37, 8, 0, true);
        break;
      case 4:
        draw(200, 45, 200, 80);
        break;
      case 3:
        draw(200, 80, 190, 110);
        break;
      case 2:
        draw(200, 80, 210, 110);
        break;
      case 1:
        draw(200, 50, 190, 80);
        break;
      case 0:
        draw(200, 50, 210, 80);
        break;
    }
  }

