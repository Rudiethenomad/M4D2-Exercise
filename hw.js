const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem';
const paragraph = document.getElementById('eminemSection');
//const button = document.getElementById('btn');

//const request = new XMLHttpRequest();
/*
const requestLoadCallback = function () {
  if (request.status !== 200) {
    paragraph.innerText = 'there was an error!'
    return;
  }

  const responseObject = JSON.parse(request.response);
  const coctailName = responseObject.drinks[0].strDrink;

  paragraph.innerText = coctailName;

  // this is logged second
  console.log('Response handled successfully!')
}
*/
request.onload = requestLoadCallback;
/*
const btnClickCallback = function () {
  // third option is called async
  // if it is set to false - the program execution will freeze
  // until the response came back and was handled
  request.open('GET', URL_ENDPOINT, true);
  request.setRequestHeader('accept', 'application/json');
  // if request is async - the program does not stop here
  
  request.send();
  paragraph.innerText = 'Loading...';


  // this is logged first
  console.log('btnClickCallback finished');
};

button.addEventListener('click', btnClickCallback);
*/
