// start create page body element
let divOfPageWrapper = document.createElement("div"); // create page body
divOfPageWrapper.className = "page_wrapper";
document.body.appendChild(divOfPageWrapper);
//End page body

//Start header of page section
const headerOfPage = () => {
  let header = document.createElement("header"); // create header
  header.id = "header";

  let divOfHeaderContainer = document.createElement("div"); // create container for header content
  divOfHeaderContainer.className = "container"; // Create attribute class

  let headerTitle = document.createElement("h1"); // create header title
  textOfTitle = document.createTextNode(
    "Your Favorite source of free bootstrap themes"
  );
  headerTitle.appendChild(textOfTitle);

  let headerLine = document.createElement("hr"); // create line under title

  let headerContent = document.createElement("p"); // create header content
  contentOfHeader = document.createTextNode(
    "Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!"
  );
  headerContent.appendChild(contentOfHeader);

  let headerButton = document.createElement("button"); // create header button
  textOfButton = document.createTextNode("FIND OUT MORE");
  headerButton.appendChild(textOfButton);

  divOfHeaderContainer.appendChild(headerTitle); // title
  divOfHeaderContainer.appendChild(headerLine); // line
  divOfHeaderContainer.appendChild(headerContent); // text
  divOfHeaderContainer.appendChild(headerButton); // button
  header.appendChild(divOfHeaderContainer); // container
  divOfPageWrapper.appendChild(header); // header
};
headerOfPage();
// End of header

//Start get started section
const getStarted = () => {
  let startSection = document.createElement("section"); // create get started section
  startSection.id = "start_section"; // Create attribute id

  let containerOfStartSection = document.createElement("div"); // create container for content
  containerOfStartSection.className = "container"; // Create attribute class

  let startTitle = document.createElement("h1"); // create title
  textOfStartTitle = document.createTextNode("We´ve got what you need!");
  startTitle.appendChild(textOfStartTitle);

  let startSectionLine = document.createElement("hr"); // create line under title

  let startSectionContent = document.createElement("p"); // create content
  textOfStartSection = document.createTextNode(
    "Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!"
  );
  startSectionContent.appendChild(textOfStartSection);

  let startSectionButton = document.createElement("button"); // create button
  textOfStartSectionButton = document.createTextNode("GET STARTED");
  startSectionButton.appendChild(textOfStartSectionButton);

  containerOfStartSection.appendChild(startTitle); // title
  containerOfStartSection.appendChild(startSectionLine); // line
  containerOfStartSection.appendChild(startSectionContent); // text
  containerOfStartSection.appendChild(startSectionButton); // button
  startSection.appendChild(containerOfStartSection); // container
  divOfPageWrapper.appendChild(startSection); // get started section
};
getStarted();
// End

//Start service section
const yourService = () => {
  let service = document.createElement("section"); // create get started section
  service.id = "service"; // Create attribute id

  let containerOfService = document.createElement("div"); // create container for content
  containerOfService.className = "container"; // Create attribute class

  let serviceTitle = document.createElement("h1"); // create title
  textOfServiceTitle = document.createTextNode("At Your Service");
  serviceTitle.appendChild(textOfServiceTitle);

  let serviceLine = document.createElement("hr"); // create line under title

  let cardOne = document.createElement("div"); // card 01
  cardOne.className = "card far fa-gem";
  cardOne.innerHTML =
    "<h3>Sturdy Templates</h3>" +
    "<p>Our templates are updated regularly so they don't break.</p>";

  let cardTwo = document.createElement("div"); // card 02
  cardTwo.className = "card fas fa-paper-plane";
  cardTwo.innerHTML =
    "<h3>Ready to Ship</h3>" +
    "<p>You can use this theme as is, or you can make changes!</p>";

  let cardThree = document.createElement("div"); // card 03
  cardThree.className = "card far fa-newspaper";
  cardThree.innerHTML =
    "<h3>Up to Date</h3>" +
    "<p>We update dependencies to keep things fresh.</p>";

  let cardFour = document.createElement("div"); // card 04
  cardFour.className = "card fas fa-heart";
  cardFour.innerHTML =
    "<h3>Made with Love</h3>" +
    "<p>You have to make your website with love these days.</p>";

  service.appendChild(serviceTitle); // title
  service.appendChild(serviceLine); // line
  containerOfService.appendChild(cardOne); // card 01
  containerOfService.appendChild(cardTwo); // card 02
  containerOfService.appendChild(cardThree); // card 03
  containerOfService.appendChild(cardFour); // card 04
  service.appendChild(containerOfService); // container
  divOfPageWrapper.appendChild(service); // service section
};
yourService();
// End

//Start photo section
const photoSection = () => {
  let photo = document.createElement("section"); // create photo section
  photo.id = "photo_section"; // Create attribute id

  let cardOne = document.createElement("div"); // card 01
  cardOne.className = "card"; // Create attribute class
  let photoOne = document.createElement("img"); // Create image
  photoOne.src = "/HOMEWORKS/Chapter_05/assets/img/img_01.jpg"; // Image url
  cardOne.appendChild(photoOne);

  let cardTwo = document.createElement("div"); // card 02
  cardTwo.className = "card"; // Create attribute class
  let photoTwo = document.createElement("img"); // Create image
  photoTwo.src = "/HOMEWORKS/Chapter_05/assets/img/img_02.jpg"; // Image url
  cardTwo.appendChild(photoTwo);

  let cardThree = document.createElement("div"); // card 03
  cardThree.className = "card"; // Create attribute class
  let photoThree = document.createElement("img"); // Create image
  photoThree.src = "/HOMEWORKS/Chapter_05/assets/img/img_03.jpg"; // Image url
  cardThree.appendChild(photoThree);

  let cardFour = document.createElement("div"); // card 04
  cardFour.className = "card"; // Create attribute class
  let photoFour = document.createElement("img"); // Create image
  photoFour.src = "/HOMEWORKS/Chapter_05/assets/img/img_04.jpg"; // Image url
  cardFour.appendChild(photoFour);

  let cardFive = document.createElement("div"); // card 05
  cardFive.className = "card"; // Create attribute class
  let photoFive = document.createElement("img"); // Create image
  photoFive.src = "/HOMEWORKS/Chapter_05/assets/img/img_05.jpg"; // Image url
  cardFive.appendChild(photoFive);

  let cardSix = document.createElement("div"); // card 06
  cardSix.className = "card"; // Create attribute class
  let photoSix = document.createElement("img"); // Create image
  photoSix.src = "/HOMEWORKS/Chapter_05/assets/img/img_06.jpg"; // Image url
  cardSix.appendChild(photoSix);

  photo.appendChild(cardOne); // card 01
  photo.appendChild(cardTwo); // card 02
  photo.appendChild(cardThree); // card 03
  photo.appendChild(cardFour); // card 04
  photo.appendChild(cardFive); // card 05
  photo.appendChild(cardSix); // card 06
  divOfPageWrapper.appendChild(photo); // Image section
};
photoSection();
// End

//Start download section
const downloadSection = () => {
  let download = document.createElement("section"); // create download section
  download.id = "download_section"; // Create attribute id

  let downTitle = document.createElement("p"); // create download title
  TitleOfDown = document.createTextNode("Free Download at Start bootstrap!"); //title text
  downTitle.appendChild(TitleOfDown);

  let downButton = document.createElement("button"); // create header button
  buttonOfDown = document.createTextNode("DOWNLOAD NOW!"); // button text
  downButton.appendChild(buttonOfDown);

  download.appendChild(downTitle); // title
  download.appendChild(downButton); // button
  divOfPageWrapper.appendChild(download); // download section
};
downloadSection();
// End

//Start footer
const footerSection = () => {
  let footer = document.createElement("footer"); // create footer section
  footer.id = "footer_section"; // Create attribute id

  let containerOfFooter = document.createElement("div"); // create container for content
  containerOfFooter.className = "container"; // Create attribute class

  let footerTitle = document.createElement("h1"); // create title
  textOfFooterTitle = document.createTextNode("Let's Get In Touch!"); // title text
  footerTitle.appendChild(textOfFooterTitle);

  let footerLine = document.createElement("hr"); // create line under title

  let footerContent = document.createElement("p"); // create content
  footerContent.innerHTML =
    "<p>Ready to start your next project with us? That's great! Give us a call or send us an email and we <br> will get back to you as soon as possible!</p>";

  let cardOfTell = document.createElement("div"); // card of phone number
  cardOfTell.className = "card fas fa-phone";
  cardOfTell.innerHTML = "<p>123-456-6789</p>";

  let cardOfMail = document.createElement("div"); // card of email
  cardOfMail.className = "card far fa-envelope";
  cardOfMail.innerHTML = "<p>feedback@startbootstrap.com</p>";

  footer.appendChild(footerTitle); // title
  footer.appendChild(footerLine); // line
  footer.appendChild(footerContent); // text
  containerOfFooter.appendChild(cardOfTell); // call
  containerOfFooter.appendChild(cardOfMail); // email
  footer.appendChild(containerOfFooter); // container
  divOfPageWrapper.appendChild(footer); // footer
};
footerSection();
// End
