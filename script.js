
function printName(){
  const user = document.getElementById("user");
  if (user){
    user.innerHTML = "Saksham Gupta";
  }
}
window.onload = printName;

// Here is the color changing button

function ColorBtn(){
  var btn = document.getElementById("btn-click");
  btn.style.backgroundColor = 'green'
}

// This is where it selecths the elements for the sentence creator

function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;
  var sentence = noun+" "+verb+" "+" "+adverb+".";
  document.getElementById("statement").innerHTML = sentence;
}

// This code creates the sentence in the div below

let btn = document.getElementById("build-button");
btn.addEventListener("click",makeSentence);

// The Grandparent, Parent, Child event listener code below

var gpdiv = 
document.getElementById("grandparent");
gpdiv.addEventListener("click", function(){
  console.log("Grandparent clicked");
});

var ppdiv = 
document.getElementById("parent");
ppdiv.addEventListener("click", function(){
  console.log("Parent clicked");
});

var cpdiv =
document.getElementById("child");
cpdiv.addEventListener("click", function(){
  console.log("Child clicked");
});

var gpdiv = 
document.getElementById("grandparent");
gpdiv.addEventListener("click", function(){
  console.log("Grandparent clicked");
}, true);

var ppdiv = 
document.getElementById("parent");
ppdiv.addEventListener("click", function(){
  console.log("Parent clicked");
}, true);

var cpdiv =
document.getElementById("child");
cpdiv.addEventListener("click", function(){
  console.log("Child clicked");
}, true);

// The categ Blazers code below here

var categ = document.getElementById("category");
categ.addEventListener("click", function(){
  var target = event.target;
  if (target.id === 'blazers') {
    console.log("blazers");
  }
});