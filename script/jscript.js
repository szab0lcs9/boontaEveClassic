function underConstruction(){
    let message = "Fejlesztés alatt...";
    alert(message);
}

function validateForm(){
    let helyes = true;
    vezeteknev = document.getElementById("vezeteknev").value;
    vezeteknevValid = document.getElementById("vezeteknevValid");
    if(vezeteknev.trim() == ""){
        vezeteknevValid.innerHTML = "A vezetéknév nem lehet üres!";
        helyes = false;
    }else if (vezeteknev.length < 3){
        vezeteknevValid.innerHTML = "A beírt vezetéknév túl rövid!";
        helyes = false;        
    }else{
        vezeteknevValid.innerHTML = "";
    }

    keresztnev = document.getElementById("keresztnev").value;
    keresztnevValid = document.getElementById("keresztnevValid");
    if(keresztnev.trim() == ""){
        keresztnevValid.innerHTML = "A keresztnév nem lehet üres!";
        helyes = false;
    }else if(keresztnev.length < 3){
        keresztnevValid.innerHTML = "A beírt keresztnév túl rövid!";
        helyes = false;
    }else{
        keresztnevValid.innerHTML = "";
    }

    szuletes = document.getElementById("szuletes").value;
    szuletesValid = document.getElementById("szuletesValid");
    if(szuletes.trim() == ""){
        szuletesValid.innerHTML = "Születési idő nincs kiválasztva!";
        helyes = false;
    }else{
        szuletesValid.innerHTML = "";
    }

    email = document.getElementById("email").value;
    emailValid = document.getElementById("emailValid");
    if(email.trim() == ""){
        emailValid.innerHTML = "Az e-mail cím nem lehet üres!";
        helyes = false;
    }else if(email.search("@") === -1 || email.search(".") === -1 || email.search("@") > email.lastIndexOf(".")){
        emailValid.innerHTML = "Nem megfelelő formátumú e-mail!";
        helyes = false;
    }else{
        emailValid.innerHTML = "";
    }

    text = document.getElementById("text").value;
    textValid = document.getElementById("textValid");
    if(text.trim() == ""){
        textValid.innerHTML = "Az üzenet mező nem lehet üres!";
        helyes = false;
    }else if(text.length < 2){
        textValid.innerHTML = "Az üzenet túl rövid!";
    }else{
        textValid.innerHTML = "";
    }

    return helyes;
}

function toTheTop(){
    window.scrollTo(0, 0);
}

function mute(){
    let mute = document.getElementById("cantinaMusic");
    muteButton = document.getElementById("mute");
    unMuteButton = document.getElementById("unMute");
    mute.muted = true;
    if(mute.muted){
        muteButton.style.display = "none";
        unMuteButton.style.display = "block";
    }
}
function unMute(){
    let unMute = document.getElementById("cantinaMusic");
    muteButton = document.getElementById("mute");
    unMuteButton = document.getElementById("unMute");
    unMute.muted = false;
    if(unMute.muted == false){
        unMuteButton.style.display = "none";
        muteButton.style.display = "block";
    }
}