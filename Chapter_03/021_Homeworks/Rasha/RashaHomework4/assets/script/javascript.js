let laptop = {
  name: "Hp",
  Processor: "Intel Core i7-8265u quad",
  Graphics: " Nvidia GeForce MX150",
  Memory: "2GB DDR5 dediziert",
  Display: " HP Spectre x360 15-df0106ng (15,6 Zoll/UHD IPS Touch)",
  Price: 1.699
};

let elName = document.getElementById("name");
let msg1 = " <h4>the name is:</h4>" + laptop.name;
elName.innerHTML = msg1;

let elProcessor = document.getElementById(" Processor");
let msg2 = " <h4>the Processor is:</h4>" + laptop.Processor;
elProcessor.innerHTML = msg2;

let elGraphics = document.getElementById("Graphics");
let msg3 = " <h4>the Graphics is:</h4>" + laptop.Graphics;
elGraphics.innerHTML = msg3;

let elMemory = document.getElementById("Memory");
let msg4 = " <h4>the Memory is:</h4>" + laptop.Memory;
elMemory.innerHTML = msg4;

let elDisplay = document.getElementById("Display");
let msg5 = " <h4>the Display is:</h4>" + laptop.Display;
elDisplay.innerHTML = msg5;

let elPrice = document.getElementById("Price");
let msg = " <h5>the Price is:</h5>" + laptop.Price;
elPrice.innerHTML = msg;