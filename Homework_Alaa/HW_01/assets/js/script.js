let arrayOfTexts = ["Hello everyone", "This is JavaScript course", "Wish you the best luck"];

let arrayIndex = 0;

let arrayOfHeaderTitles = document.getElementsByClassName("header-title");

//arrayOfHeaderTitles[0].textContet = arrayOfTexts[arrayIndex]
// PLEASE DO NOT BE CONFUSED BY THE FOLLOWING CODE

setInterval(() => {

    arrayIndex = (arrayIndex % 3)                                    // same thing as:   if (arrayIndex == 3) {
     arrayOfHeaderTitles[0].textContent = arrayOfTexts[arrayIndex++] //    arrayIndex = 0}
    
    arrayOfHeaderTitles[0].textContet = arrayOfTexts[arrayIndex]    // this line is used for both methods
                                                                    // arrayIndex = arrayIndex + 1
  }, 2000);   