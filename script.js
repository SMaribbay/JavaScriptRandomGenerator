var fortunes = [

  "You will win free food for the rest of your life",
  "You will meet your soulmate",
  "You will receive $1 million",
  "You will receive absolutely nothing"
];

function tellFortune() {


  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function restyle() {
    var r = Math.floor(Math.random() * 100);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 150);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();
