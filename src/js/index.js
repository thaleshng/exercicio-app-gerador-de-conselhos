const adviceId = document.getElementById("advice-information");
const adviceText = document.getElementById("advice");
const diceButton = document.getElementById("dice-button");

async function generateAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url);
    const json = await response.json();
    adviceId.innerHTML = `Advice #${json.slip.id}`;
    adviceText.innerHTML = `"${json.slip.advice}"`;
}

diceButton.addEventListener("click", ()=>{
    generateAdvice();
});

generateAdvice();