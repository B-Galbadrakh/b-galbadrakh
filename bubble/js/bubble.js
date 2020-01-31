var timer = null;
$(document).ready(function() {
  $("#btnStart").click(start);
  $("#circle").hide();
  $("#circle").click(removeCircle);
});

$("#playground").click(function() {
  var docHeight = $(document).height(),
    docWidth = $(document).width(),
    $div = $("#playground"),
    divWidth = $div.width(),
    divHeight = $div.height(),
    heightMax = docHeight - divHeight,
    widthMax = docWidth - divWidth;

  $div.css({
    left: Math.floor(Math.random() * widthMax),
    top: Math.floor(Math.random() * heightMax)
  });
});

function removeCircle() {
  $("#circle").hide();
  clearInterval(timer);
}

function start() {
  var w = $("#w").val();
  var amt = $("#growAmount").val();
  var rate = $("#growRate").val();
  var circles = $("#numberCircles").val();

  $("#circle").height(w);
  $("#circle").width(w);
  $("#circle").show();

  timer = setInterval(function() {
    var h = $("#circle").height();
    var w = $("#circle").width();
    h += parseInt(amt);
    w += parseInt(amt);
    $("#circle").height(h);
    $("#circle").width(w);
  }, rate);
}

function draw(x) {
  var docHeight = $(document).height(),
    docWidth = $(document).width(),
    $div = $("#playground"),
    divWidth = $div.width(),
    divHeight = $div.height(),
    heightMax = docHeight - divHeight + x;
  widthMax = docWidth - divWidth + x;

  $div.css({
    left: Math.floor(Math.random() * widthMax),
    top: Math.floor(Math.random() * heightMax)
  });
}
