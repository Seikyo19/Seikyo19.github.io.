const message = 'HIII MAHALL KOOO HAPPY NEW YEAR POO. First of all, I wanna thank you for making me the happiest I have been all my life, hindi mo po alam kung gaano kalaki ang naging effect mo sakin. Despite na galing ako sa breakup, hindi mo naisip na magiging rebound ka and instead, pinili mopa akong mahalin. Pangalawa, I wanna say sorry for everything I have done wrong. For all of the betrayals I did, for all the sugar coating, every fight and hardship you had to deal with, and every pain I caused. Believe me, I never wanted to hurt you po so I am very sorry mahall ko. Lastly, I wish that this year, every flawful thing we did gets better. I hope na tayo parin po sana. I am not asking po to cover up my crimes pero I really wanna be your first and last and I will do anything it takes just to keep you. I love you bernadeth, and I will continue to do so. Even if it means destroying everything I have in the process. I will happily rebuild it with you by my side. Nag muka na tong proposal pero whatever HAHAHA. Anyways, HAPPY NEW YEAR MAHALL KONG NAPAKA GANDAAA ILOVEYOUUUUSOOOOMUCHHH🤍🤍';

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;
    
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 0);
      }
    }
    
    typeWriter();
  }, 600);
// Select both buttons
const heartButtons = document.querySelectorAll(".btn, .btn2");

heartButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    for (let i = 0; i < 8; i++) {
      createHeart(e.clientX, e.clientY);
    }
  });
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "🤍";

  heart.style.left = x + (Math.random() * 20 - 20) + "px";
  heart.style.top = y + (Math.random() * 20 - 20) + "px";
  heart.style.fontSize = Math.random() * 75 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 20000);
}
  }
