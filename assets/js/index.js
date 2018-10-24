const quote = document.getElementById('quote'); // Bloc de citation
const author = document.getElementById('author'); // Bloc de nom de l'auteur
const photo = document.getElementById('photo'); // Bloc de photo de l'auteur
let object = {};

//    async function getData() {
//    let response = await fetch('https://thatsthespir.it/api'); //Await the response of the fetch call
//    let data = await response.json() //Proceed once the first promise is resolved.
//        return data; //Proceed only when the second promise is resolved
//    }
//    getData()
//    .then(data => console.log(data)); //Log the data

let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://thatsthespir.it/api', true)  //Call the open function, GET-type of request, url, true-asynchronous
xhr.onload = function() {  //Call the onload 
    if (this.status === 200) { //check if the status is 200(means everything is okay)
        object = JSON.parse(this.responseText); //return server response as an object with JSON.parse
        quote.innerHTML = object.quote;
        author.innerHTML = object.author;
        if (object['photo'] != '') {
            photo.setAttribute('src', object.photo);
        } else {
            photo.setAttribute('src', 'assets/img/pi.jpg')
        }
    }
}
xhr.send(); //Call send

const body = document.getElementById('body');

let changeColor = (index, color) => {
    let col = document.getElementsByClassName('color')[index];

    col.addEventListener('click', function() {
        body.style.backgroundColor = `${color}`;
    });
};

changeColor(0, '#4faad4');
changeColor(1, '#5fd44f');
changeColor(2, '#d4d24f');
changeColor(3, '#d44f4f');
changeColor(4, '#b9b9b9');