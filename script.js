
var button = document.getElementById("button");
var userInput = document.getElementById("userInput");
var output = document.getElementById("outputText");
var fortunes = [
  "will win free food for the rest of your life",
  "will receive $1 million.",
  "will meet your soulmate",
  "will get nothing",
  "will reach your goals"
]

button.addEventListener("click", restyle);


function fortune(name){
  output.innerText = name +" " + fortunes[Math.floor(Math.random()*fortunes.length)];

}

function restyle() {
  var r = Math.random() * 200;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var color = "rgb(" + r + "," + g + "," + b + ")";
  var bcolor = "rgba(" + r + "," + g + "," + b + ", .10 )";
  output.style.backgroundColor = bcolor;
  output.style.color = color;


  fortune (document.getElementById("userInput").value);
}
