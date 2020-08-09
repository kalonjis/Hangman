function clavier(evenement){
    let touche= window.event ? evenement.keyCode : evenement.which;
    touche = String.fromCharCode(touche).substr(0,1);
    //alert(touche);
    document.getElementById(`letter_${touche.toLowerCase()}`).style.backgroundColor = "#990000";
}