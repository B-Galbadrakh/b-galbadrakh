let currAnim = "Blank";
var timer = "";
let currText = "";
let currFont = "12pt";
let speed = 250;
let step = 0;
window.onload = function() {
  document.getElementById("animation").onchange = animeChange;
  document.getElementById("animation").value = "Blank";
  document.getElementById("start").onclick = start;
  document.getElementById("stop").onclick = stop;
  document.getElementById("fontsize").onchange = changeFont;
  document.getElementById("text-area").style.fontSize = currFont;
  document.getElementById("turbo").onchange = turbo;
};

function start() {
  currText = document.getElementById("text-area").value;
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("animation").disabled = true;

  run(getAnim(currAnim), speed);
}

function getAnim(name) {
  if (name === "Exercise") {
    return ANIMATIONS["Exercise"];
  }
  if (name === "Juggler") {
    return ANIMATIONS["Juggler"];
  }
  if (name === "Bike") {
    return ANIMATIONS["Bike"];
  }
  if (name === "Dive") {
    return ANIMATIONS["Dive"];
  }
}
function stop() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
  if (timer) {
    clearInterval(timer);
    document.getElementById("text-area").value = currText;
  }
}

function run(anim, speed) {
  let e = document.getElementById("animation");
  // console.log(e.selectedIndex);
  if (e.selectedIndex != 0) {
    anim = anim.split("=====\n");
    // let i = 0;
    let i = step;
    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(() => {
      if (i === anim.length) {
        i = 0;
        step = 0;
      }
      document.getElementById("text-area").value = anim[i];
      i++;
      step++;
    }, speed);
  }
}

function animeChange() {
  let txtAr = document.getElementById("text-area");
  let e = document.getElementById("animation");
  let val = e.options[e.selectedIndex].value;
  currText = document.getElementById("text-area");
  step = 0;
  if (val === "Blank") {
    txtAr.value = "";
    currAnim = null;
  } else if (val === "Exercise") {
    txtAr.value = ANIMATIONS["Exercise"];
    currAnim = "Exercise";
  } else if (val === "Juggler") {
    txtAr.value = ANIMATIONS["Juggler"];
    currAnim = "Juggler";
  } else if (val === "Bike") {
    txtAr.value = ANIMATIONS["Bike"];
    currAnim = "Bike";
  } else {
    txtAr.value = ANIMATIONS["Dive"];
    currAnim = "Dive";
  }
}

function changeFont() {
  let e = document.getElementById("text-area");
  let font = document.getElementById("fontsize");
  let val = font.options[font.selectedIndex].value.toLowerCase();

  if (val === "tiny") {
    e.style.fontSize = "7pt";
  } else if (val === "small") {
    e.style.fontSize = "10pt";
  } else if (val === "medium") {
    e.style.fontSize = "12pt";
  } else if (val === "large") {
    e.style.fontSize = "16pt";
  } else if (val === "extra large") {
    e.style.fontSize = "24pt";
  } else if (val === "xxl") {
    e.style.fontSize = "32pt";
  }
}

function turbo() {
  // console.log("turbo triggered");
  let e = document.getElementById("turbo");
  if (e.checked) {
    speed = 50;
  } else {
    speed = 250;
  }
  // console.log("Set speed to: " + speed);
  // console.log("current anime: " + currAnim);
  run(getAnim(currAnim), speed);
}
