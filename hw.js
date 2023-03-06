


//console.log ("test");

const first_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'
const crow1 = document. getElementById('eminem')
const request = new XMLHttpRequest();

const handleRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const eminemSection = responseObject.albums[0].strAlbums

    crow1.innerText = eminem;
    console.log(request.status);
    
}



request.onload = handleRequestLoad;

request.open('GET', first_album);
request.send();




const second_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica'
const crow2 = document. getElementById('metallica')

const request = new XMLHttpRequest();

const secondRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const metallicaSection = responseObject.albums[0].strAlbums

    crow2.innerText = metallica;

    console.log(request.status);
    
}



request.onload = secondRequestLoad;

request.open('GET', second_album);
request.send();



const third_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'
const crow3 = document. getElementById('queen')

const request = new XMLHttpRequest();

const thirdRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const queenSection = responseObject.albums[0].strAlbums

    crow3.innerText = queen;

    console.log(request.status);
    
}



request.onload = thirdRequestLoad;

request.open('GET', third_album);
request.send();

