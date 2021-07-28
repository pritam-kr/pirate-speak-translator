
var inputText = document.querySelector(".text-input");
var outputText = document.querySelector(".text-output");
var btn = document.querySelector(".btn");


btn.addEventListener('click', (e) => {
  e.preventDefault()
  let inputValue = inputText.value;
  let url = `https://api.funtranslations.com/translate/pirate.json?text=${inputValue}`;

  function errorHandler(err){
    alert("something wrong happen! please try agian later.", err);
  }

  fetch(url)
  .then((res) =>{
    return res.json()
  })
  .then((data) =>{
    outputText.innerHTML = data.contents.translated
  })

  .catch(errorHandler)

})



// function getTranslateUrl(text) {
//   return url + "?" + "text=" + text;
// }

// btn.addEventListener("click", doTranslate);

// function errorHandler(error) {
//   alert("something wrong happen! please try agian later.", error);
// }

// function doTranslate() {
//   var inputTxt = inputText.value;

//   fetch(getTranslateUrl(inputTxt))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedTxt = json.contents.translated;
//       outputText.innerHTML = translatedTxt;
//     })

//     .catch(errorHandler);
// }
