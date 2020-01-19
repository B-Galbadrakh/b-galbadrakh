window.onload = function() {
  "use strict";
  var t = document.getElementById("txtArea");
  t.style.fontSize = "12pt";
  t.value = "";

  let big = document.getElementById("bigger");
  big.onclick = bigger;

  let latin = document.getElementById("latin");
  latin.onclick = pig;

  let mal = document.getElementById("mal");
  mal.onclick = malkovitch;

  let b = document.getElementById("bling");
  b.onchange = change;
};

function bigger() {
  var t = document.getElementById("txtArea");
  setInterval(() => {
    t.style.fontSize = parseInt(t.style.fontSize) + 2 + "pt";
  }, 500);
}

function change() {
  var t = document.getElementById("txtArea");
  var c = document.getElementById("bling").checked;

  if (c) {
    t.style.fontWeight = "bold";
    t.style.color = "green";
    t.style.textDecoration = "underline";
  } else {
    t.style.fontWeight = "normal";
  }
  document.body.style.backgroundImage = "url('images/hundred-dollar-bill.jpg')";
}

function isVowel(a) {
  const vowels = ["a", "e", "i", "o", "u"];
  const b = a.toLowerCase();
  if (vowels.indexOf(b) != -1) {
    return true;
  } else {
    return false;
  }
}

function pig() {
  var txt = document.getElementById("txtArea").value.split(" ");
  var res = txt.map(e => {
    if (isVowel(e.charAt(0))) {
      return e + "-ay";
    } else {
      if (!isVowel(e.charAt(1))) {
        return (e + e.charAt(0) + e.charAt(1)).substr(2) + "-ay";
      } else {
        return (e + e.charAt(0)).substr(1) + "-ay";
      }
    }
  });
  document.getElementById("txtArea").value = res;
}

function malkovitch() {
  var txt = document.getElementById("txtArea").value.split(" ");
  var res = txt.map(e => {
    if (e.length >= 5) {
      return "Malkovitch";
    } else {
      return e;
    }
  });
  document.getElementById("txtArea").value = res;
}
