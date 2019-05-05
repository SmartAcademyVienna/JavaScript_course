var radius = 13;
var surfaceArea = 4 * 3.14 * radius * radius;

if (surfaceArea >= 313.5 && surfaceArea <= 314) {
  var el = document.getElementById("answer");
  el.textContent = "This is a basketball";
} else {
  var el = document.getElementById("answer");
  el.textContent = "This is not a basketball";
}
