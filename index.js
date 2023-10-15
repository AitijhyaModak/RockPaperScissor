//writing code for making rules box appear and disappear
let rule_box = document.querySelector("#rules");
let rule_button = document.querySelector("button#rules");

rule_button.addEventListener("click", onClicked);
function changeTextOfButton() {
    if (rule_button.textContent === "Hide Rules")
        rule_button.textContent = "Rules";
    else
        rule_button.textContent = "Hide Rules";
}
function onClicked() {
    rule_box.classList.toggle("invisible");
    changeTextOfButton();
}

// function for playing game

//when play is clicked game mode appears
let game_box = document.querySelector("#game");
let play_button = document.querySelector("button#play");

play_button.addEventListener("click", onPlayClicked);
function onPlayClicked() {
    document.getElementById("playerscore").classList.toggle("invisible");
    document.getElementById("computerscore").classList.toggle("invisible");
    document.getElementById("wonmessage").classList.add("invisible");
    document.getElementById("lostmessage").classList.add("invisible");
    document.getElementById("playagainbutton").classList.add("invisible");
    game_box.classList.toggle("invisible");
    if (play_button.textContent === "Play") {
        play_button.textContent = "Quit";
        playagain();
    }
    else {
        play_button.textContent = "Play";
    }

}


//when user starts playing

let rock_player = document.querySelector("#rockimg1");
let scissor_player = document.querySelector("#scissorimg1");
let paper_player = document.querySelector("#paperimg1");

rock_player.addEventListener("click", Game);//adding click event listenenrs
scissor_player.addEventListener("click", Game);
paper_player.addEventListener("click", Game);

rock_player.addEventListener("mouseover", change_cursor);//adding mouseover event listeneners
scissor_player.addEventListener("mouseover", change_cursor);
paper_player.addEventListener("mouseover", change_cursor);

let player_score = 0;
let computer_score = 0;
let number_of_draws = 0;
let player_score_text = "";
let computer_score_text = "";


function Game(event) {


    highlight(event.srcElement);
    let player_element = event.srcElement;
    let number_generated = Math.random();
    number_generated = Math.ceil(number_generated * 3);
    let computer_element;

    if (number_generated === 1) computer_element = (document.getElementById("paperimg2"));
    else if (number_generated === 2) computer_element = (document.getElementById("rockimg2"))
    else computer_element = (document.getElementById("scissorimg2"));

    highlight(computer_element);


    if (player_element === rock_player && number_generated === 2) number_of_draws++;
    else if (player_element === scissor_player && number_generated === 3) number_of_draws++;
    else if (player_element === paper_player && number_generated === 1) number_of_draws++;
    else if (player_element === rock_player && number_generated === 3) {
        player_score++;
        player_score_text = player_score_text + "☑️";
        computer_score_text = computer_score_text + "❌";
    }
    else if (player_element === scissor_player && number_generated === 1) {
        player_score++;
        player_score_text = player_score_text + "☑️";
        computer_score_text = computer_score_text + "❌";
    }
    else if (player_element === paper_player && number_generated === 2) {
        player_score++;
        player_score_text = player_score_text + "☑️";
        computer_score_text = computer_score_text + "❌";
    }
    else {
        computer_score++;
        computer_score_text = computer_score_text + "☑️";
        player_score_text = player_score_text + "❌";
    }

    display_score();
    if (player_score === 5) gamewin();
    if (computer_score === 5) gamelost();
}
function highlight(element) {
    element.classList.toggle("pressed");
    setTimeout(function () { element.classList.toggle("pressed"); }, 150);
}
function change_cursor(event) {
    event.srcElement.style.cursor = "pointer";
}
function display_score() {

    document.querySelector("#playerscore").innerHTML = "Player's score: " + "&nbsp &nbsp &nbsp &nbsp" + player_score_text + String(player_score);
    document.querySelector("#computerscore").innerHTML = "Com puter's score:" + "&nbsp" + computer_score_text + String(computer_score);
}
function gamewin() {
    player_score = 0;
    computer_score = 0;
    player_score_text = "";
    computer_score_text = "";
    document.querySelector("#wonmessage").classList.toggle("invisible");
    document.querySelector("#playagainbutton").classList.toggle("invisible");
    rock_player.removeEventListener("click",Game);
    paper_player.removeEventListener("click",Game);
    scissor_player.removeEventListener("click",Game);
}
function gamelost() {
    player_score = 0;
    computer_score = 0;
    player_score_text = "";
    computer_score_text = "";
    document.querySelector("#lostmessage").classList.toggle("invisible");
    document.querySelector("#playagainbutton").classList.toggle("invisible");
    rock_player.removeEventListener("click",Game);
    paper_player.removeEventListener("click",Game);
    scissor_player.removeEventListener("click",Game);
}

document.querySelector("#playagainbutton").addEventListener("click", playagain);
function playagain() {
    document.querySelector("#lostmessage").classList.add("invisible");
    document.querySelector("#playagainbutton").classList.add("invisible");
    document.querySelector("#wonmessage").classList.add("invisible");
    player_score = 0;
    computer_score = 0;
    player_score_text = "";
    computer_score_text = "";
    display_score();
    rock_player.addEventListener("click",Game);
    scissor_player.addEventListener("click",Game);
    paper_player.addEventListener("click",Game);
}

