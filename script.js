const colorButton = document.getElementById("colorButton");
const revealButton = document.getElementById("revealButton");
const container = document.querySelector(".container");
const hiddenMessage = document.getElementById("hiddenMessage");

// Prompt the user for their name
const userName = prompt("Enter your name:");

// Update the dynamic name element with the user's name
const dynamicNameElement = document.getElementById("dynamicName");
dynamicNameElement.innerText = `Hey ${userName},`;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

colorButton.addEventListener("click", () => {
  container.style.backgroundColor = getRandomColor();
});

revealButton.addEventListener("click", () => {
  hiddenMessage.classList.toggle("hidden");
});
