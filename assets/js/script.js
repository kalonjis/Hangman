let start = false;
document.getElementById('start').addEventListener('click',()=>{
    start = true;
});
let word = "becode";
let guess = word.toUpperCase().replace(/[A-Z]/g,'-');
document.getElementById('wordToGuess').innerText = guess;
let score = 10;


function keyboard(evenement){
    if (start===false){
        return
    }    
    let key = window.event ? evenement.keyCode : evenement.which;
    key = String.fromCharCode(key).substr(0,1);
    //alert(key);
    document.getElementById(`letter_${key.toLowerCase()}`).style.backgroundColor = "#990099";//highlight the key of the keypad on the screen
    check(key);
}
function check(letter){
    let wordArray = word.split('');
    if (word.toUpperCase().includes(letter) ===true) {
        for (let i = 0; i < word.length; i++) {
            if (letter === wordArray[i].toUpperCase()) {
                guess= guess.substr(0,i)+letter+guess.substr(i+1);
                document.getElementById('wordToGuess').innerText = guess;
            }
            
        }
        
    } else {
        alert('error');
        score -= 1;
        document.getElementById('pScore').innerText = `${score}/10`;
        if (score <=0) {
            start = false;
            alert("YOU LOOZE");
        }  
    }
    if (guess ===word.toUpperCase()) {
        alert ("YOU WIN");
        start = false;
    }
}
// let content = document.createTextNode(index*i);
//             let newCol = document.createElement('td');
//             newCol.appendChild(content);
//             newRow.appendChild(newCol);
