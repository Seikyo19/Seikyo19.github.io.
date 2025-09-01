const message = `I’m sorry if there are times I fall short, make mistakes, or don’t always find the right way to show how much you mean to me. Please know that even in those moments, my love for you never changes.

You are the brightest part of my days, the calm in my chaos, and the home my heart will always return to. I may not be perfect, but I’ll keep trying every single day to deserve the
love you give me

With all my love
and my sincerest
apologies,
Your Jay.`;

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
        setTimeout(typeWriter, 30);
      }
    }
    
    typeWriter();
  }, 600);
}