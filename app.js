let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors" ];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
}

choices.forEach((element) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame();
        
    })
});