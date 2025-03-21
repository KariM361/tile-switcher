// write cool JS hwere!!
let mainImage = document.getElementById('mainImage'); //kalder på mainImage id'et i html

let smallImageOne = document.getElementById('imgOne'); //kalder på imgOne id'et i html
let smallImageTwo = document.getElementById('imgTwo'); //kalder på imgTwo id'et i html
let smallImageThree = document.getElementById('imgThree'); //kalder på imgThree id'et i html
let smallImageFour = document.getElementById('imgFour'); //kalder på imgFour id'et i html

smallImageOne.addEventListener('click', function (event) {
  //eventlistener der lytter efter klik på smallImageOne
  let bigImageUrl = mainImage.src; // finder url'en på mainImage(stort billede)
  let smallImageUrl = smallImageOne.src; //finder url'en på smallImageOne(lille billede)

  mainImage.src = smallImageUrl; //skifter stort billede med lille billede
  smallImageOne.src = bigImageUrl; //skifter lille billed med stort billede
});

smallImageTwo.addEventListener('click', function (event) {
  //eventlistener der lytter efter klik på smallImageTwo
  let bigImageUrl = mainImage.src; // finder url'en på mainImage(stort billede)
  let smallImageUrl = smallImageTwo.src; //finder url'en på smallImageTwo(lille billede)

  mainImage.src = smallImageUrl; //skifter stort billede(mainImage) med lille billede
  smallImageTwo.src = bigImageUrl; //skifter lille billed(smallImage) med stort billede
});

smallImageThree.addEventListener('click', function (event) {
  //eventlistener der lytter efter klik på smallImageThree
  let bigImageUrl = mainImage.src; // finder url'en på mainImage(stort billede)
  let smallImageUrl = smallImageThree.src; //finder url'en på smallImageThree(lille billede)

  mainImage.src = smallImageUrl; //skifter stort billede med lille(mainImage) billede
  smallImageThree.src = bigImageUrl; //skifter lille billed(smallImage) med stort billede
});

smallImageFour.addEventListener('click', function (event) {
  //eventlistener der lytter efter klik på smallImageFour
  let bigImageUrl = mainImage.src; // finder url'en på mainImage(stort billede)
  let smallImageUrl = smallImageFour.src; //finder url'en på smallImageFour(lille billede)

  mainImage.src = smallImageUrl; //skifter stort billede(mainImage)  med lille billede
  smallImageFour.src = bigImageUrl; //skifter lille billed(smallImage) med stort billede
});
