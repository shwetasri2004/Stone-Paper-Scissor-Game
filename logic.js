let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("User-Score");
const compScorePara = document.getElementById("Comp-Score");
const msg = document.getElementById("Status-Msg");
const battleArea = document.getElementById("Battle-Area");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];// return krega ka kon sa index number generate hua hai
};

const play = (userChoice) => {
    const compChoice = genCompChoice();
    const icons = {
        stone: "🪨",
        paper: "📄",
        scissors: "✂️"
    };

    // Battle area mein moves dikhana
    battleArea.innerHTML = `
        <span>${icons[userChoice]}</span> 
        <span style="font-size: 1.2rem; color: #888;">VS</span> 
        <span>${icons[compChoice]}</span>
    `;

    if (userChoice === compChoice) {
        msg.innerText = "Game Draw! 🤝";
        msg.style.color = "#2c3e50";
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
        msg.style.color = "#27ae60";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! 🤖 ${compChoice} beats ${userChoice}`;
        msg.style.color = "#c0392b";
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Choose Your Move";
    msg.style.color = "#2c3e50";
    battleArea.innerHTML = "";
};