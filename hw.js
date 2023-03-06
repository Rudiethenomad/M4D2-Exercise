


//console.log ("test");

const first_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'

const request = new XMLHttpRequest();

const handleRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const eminemAlbum = responseObject

    console.log(request.status);
    
}



request.onload = handleRequestLoad;

request.open('GET', first_album);
request.send();




const second_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica'

const request = new XMLHttpRequest();

const secondRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const eminemAlbum = responseObject

    console.log(request.status);
    
}



request.onload = secondRequestLoad;

request.open('GET', second_album);
request.send();



const third_album = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'

const request = new XMLHttpRequest();

const thirdRequestLoad = function (){
    const responseObject = JSON.parse(request.response);

    const eminemAlbum = responseObject

    console.log(request.status);
    
}



request.onload = thirdRequestLoad;

request.open('GET', second_album);
request.send();

