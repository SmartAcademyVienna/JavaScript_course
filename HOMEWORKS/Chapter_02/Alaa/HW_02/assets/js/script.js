let radius = 5;
// Kugel Oberfläche Formel= 4*Pi*radius*radius

let surfaceArea;
let Pi = 3.14;

surfaceArea = 4 * Pi * radius * radius;

let htmlPreTitle = document.getElementById("pre-title");
htmlPreTitle.textContent = "Surface Area is " + surfaceArea;

let htmlMessageTag = document.getElementById("message");

if (surfaceArea >= 313.5 && surfaceArea <= 314) {
    htmlMessageTag.textContent = "This is a basketball";
} 

else {
    htmlMessageTag.textContent = "This is not a basketball";
}