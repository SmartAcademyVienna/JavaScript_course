function calculateArea(Radius) {
  let Area = 4 * Math.PI * (Radius * Radius);
  return Area;
}

function showMessage() {
  let htmlMessage = document.getElementById("Calculate1");
  let msg =
    "<h4>Radius of 5 cm2 is equal to:</h4>" +
    calculateArea(5).toFixed(2) +
    "<h5>(This is basketball)</h5>";
  htmlMessage.innerHTML = msg;

  let htmlMessage1 = document.getElementById("Calculate2");
  let msg1 =
    "<h4>Radius of 3.34 cm2 is equal to:</h4>" +
    calculateArea(3.34).toFixed(2) +
    "<h5>(This is Tennis ball)</h5>";
  htmlMessage1.innerHTML = msg1;

  let htmlMessage2 = document.getElementById("Calculate3");
  let msg2 =
    "<h4>Radius of 4.3 cm2 is equal to:</h4>" +
    calculateArea(4.3).toFixed(2) +
    "<h5>(This is Football)</h5>";
  htmlMessage2.innerHTML = msg2;
}

let AreaBasketball = showMessage();
let AreaTennis = showMessage();
let AreaFootball = showMessage();
