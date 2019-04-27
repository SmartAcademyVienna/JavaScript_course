let radius = 5; //This is the Radius of our Ball
let surfaceArea; //Here is surface area of basketball

let PI = 3.14; // This is number of pi

surfaceArea = 4 * PI * (radius * radius);

let el = document.getElementById("ball_02");
if (surfaceArea >= 313.5 && surfaceArea <= 314) {
  // Our value is between 313 and 314 cm2
  el.textContent = "This is basketball"; //Show the message of surfaceArea
} else {
  el.textContent = "This is not basketball"; //Show the message of surfaceArea
}
