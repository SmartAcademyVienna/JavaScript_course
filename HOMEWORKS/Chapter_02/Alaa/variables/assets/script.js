var ConePrice = 0.3;
var IceCreamPrice = 1.5;
var ArrayOfQuantity = [1, 2, 3];
var ChangeH3Text = ArrayOfQuantity[0] * IceCreamPrice + ConePrice + "€";
var ChangeH4Text = ArrayOfQuantity[1] * IceCreamPrice + ConePrice + "€";
var ChangeH5Text = ArrayOfQuantity[2] * IceCreamPrice + ConePrice + "€";

var el = document.getElementsByClassName("price");
el[0].textContent = ChangeH3Text;
el[1].textContent = ChangeH4Text;
el[2].textContent = ChangeH5Text;

console.log(el[0]);
console.log(el[1]);
console.log(el[2]);

console.log(ArrayOfQuantity[0]);
console.log(ArrayOfQuantity[1]);
