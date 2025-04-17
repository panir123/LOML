const hv=document.getElementById("ton");
const rl=document.getElementById("rl")
const erm=document.getElementById("erm");
const sry=document.getElementById("sry")

hv.addEventListener('mouseover', function() {
  erm.classList.add('show');
});

rl.addEventListener('mouseover', function() {
    sry.classList.add('show');
  });
  

hv.addEventListener('mouseout', function() {
  erm.classList.remove('show');
});

rl.addEventListener('mouseout', function() {
    sry.classList.remove('show');
  });




  function envy() {
    const wrd = document.getElementById("envo");
  
    wrd.classList.toggle("clicked");
  
    const letters = document.querySelectorAll(".letters");
    letters.forEach(letter => {
      letter.style.opacity = wrd.classList.contains("clicked") ? "1" : "0";
    });
  }

  function funsie(index) {
    const letters = document.querySelectorAll(".letters");
    letters.forEach((letter) => {
      letter.style.transform = "scale(1.4)";
    });
  }
  



  function prick() {
    const smth = document.getElementById("smth");
    const mores = document.getElementById("mores");
  
    smth.classList.toggle("clicked");

    smth.style.opacity = smth.classList.contains("clicked") ? "1" : "0";

    mores.style.opacity = smth.classList.contains("clicked") ? "1" : "0";

  }
