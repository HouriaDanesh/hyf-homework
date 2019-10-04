const names = [
  "The wild Wolf",
  "The night Owl",
  "The hungry bear",
  "The funny monkey",
  "The smart fox",
  "The strong hawk",
  "The small bat",
  "The beautiful butterfly",
  "The naughty horse",
  "The rapid rabbit",
  "The angry tiger"
];

const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "Your spiritual animal name";

const realNameInput = document.getElementById("realNameInput");

function showRandomName() {
  const rnd = Math.floor(Math.random() * names.length);
  const animalName = names[rnd];
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = `${realNameInput.value} - ${animalName}`;
}

const btn = document.createElement("button");
btn.textContent = "click here";
document.body.appendChild(btn);


const selectElement = document.querySelector('select');
selectElement.addEventListener('change', function() {
  if (selectElement.value === "hover" || selectElement.value === "input" )
  {
    btn.disabled = true;
  }
   else 
  {
    btn.disabled = false;
  }
});


btn.addEventListener("click", showRandomName);

realNameInput.addEventListener('keyup',function(event) {
  if (event.keyCode === 13) {
    showRandomName();
  }
  esle
  {
    
  return false;
  }
});


realNameInput.addEventListener("mouseenter", function() {
  if(selectElement.value === "hover" ){
    showRandomName();
  }
    else
  {

     event.stopPropagation();
  }
  });
