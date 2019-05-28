let container = document.getElementById("page_body");

function createDivOrHeaderElement(tagName, string) {
  let el = document.createElement(tagName); // Create Element
  if (tagName === "h1" || tagName === "i") {
    let textNode = document.createTextNode(string); // Create Text
    el.appendChild(textNode); // Inject element to another parent element
  }
  return el; // Return fully element.
}

function createImageTag(tagName, url) {
  let el = document.createElement(tagName); // Create Element
  el.src = url;
  return el; // Return fully element.
}

let h1 = createDivOrHeaderElement("h1", "Welcome from DOM");
let i = createDivOrHeaderElement("i", "This is italic string");

let divTagHTML = createDivOrHeaderElement("div");
// divTagHTML.className = "image_container";
container.appendChild(divTagHTML);
let innerDiv = container.getElementsByTagName("div");

// Create Image tag with src attribute.
let imgHtmlTag = createImageTag(
  "img",
  "https://cdn2.thecatapi.com/images/ae4.gif"
);

console.log(JSON.stringify(imgHtmlTag));

container.appendChild(h1);
container.appendChild(i);

innerDiv[0].appendChild(imgHtmlTag);
