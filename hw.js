


//console.log ("test");

const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem';
const paragraph = document.getElementById('eminemSection');
const request = new XMLHttpRequest();
const requestLoadCallback = function () {
    if (request.status !== 200) {
      paragraph.innerText = 'there was an error!'
      return;
    }
    const responseObject = JSON.parse(request.response);


}
request.onload = requestLoadCallback;


const URL_END = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica';
const par = document.getElementById('metallicaSection');
const request = new XMLHttpRequest();
const requestCallback = function () {
    if (request.status !== 200) {
      par.innerText = 'there was an error!'
      return;
    }
    const responseObject = JSON.parse(request.response);


}
request.onload = requestCallback;

const URL_Last = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica';
const prg = document.getElementById('queenSection');
const request = new XMLHttpRequest();
const requestLastCallback = function () {
    if (request.status !== 200) {
      prg.innerText = 'there was an error!'
      return;
    }
    const responseObject = JSON.parse(request.response);


}
request.onload = requestLastCallback;