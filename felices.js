//Ventana inicial para introducir el nombre del invitado y darle la felicitacion de navidad
const nameGuest = prompt("¿Cómo te llamas?");
document.getElementById('invitado').innerHTML = nameGuest;

//Si esta vacio el campo del nombre del invitado, se le asigna el nombre de Anónimo
if (nameGuest === null || nameGuest === "") {
    document.getElementById('invitado').innerHTML = "Anónimo";
    console.log("Si sale anonimo es porque no has introducido tu nombre en el prompt, recarga la pagina y introduce tu nombre");
}

//Funcion para mostrar la fecha actual en la que se entrego la felicitacion
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();

//mostrar fecha dentro de class -> dia
document.querySelector(".dia").innerHTML = dia + "/" + mes + "/" + año;
//dar estilos a la fecha (sin modificar el css)
document.querySelector(".dia").style.color = "white";

//Funcion que modifica el texto haciendo que parpadee
window.setInterval(parpadeo, 500);
var color = "red";
function parpadeo() {
    var blink = document.getElementById("parpadeo");
    color = (color == "#ffffff") ? "green" : "#ffffff";
    blink.style.color = color;
    blink.style.fontSize = '30px';
}

//Funcion para cargar las tres canciones de navidad que se encuentran en el proyecto 
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- ocultar la barra de controles del audio que trae por defecto
    document.body.appendChild(sonido);
    return sonido;
};

const botonReproducir = document.querySelector("#btnReproducir"),
    botonPausar = document.querySelector("#btnPausar"),
    botonReiniciar = document.querySelector("#btnReiniciar");

// Cargamos las tres canciones de navidad y las guardamos en un array para poder reproducirlas en el orden que queramos 
const cancion1 = cargarSonido("Villancico-Karaoke.mp3");
const cancion2 = cargarSonido("Villancico-Navidad-Navidad.mp3");
const cancion3 = cargarSonido("Villancico-Burrito-Sabanero.mp3");
const arrayCanciones = [cancion1, cancion2, cancion3];

//Funcion para darle funcionalidad al boton play-pause
const btnPlayPause = document.getElementById('play-pause');
let numSong = 0;
function playPause() {
    checkClass()
    if (btnPlayPause.classList.contains('fa-pause')) {
        arrayCanciones[numSong].play();
    } else {
        arrayCanciones[numSong].pause();
    }
}

//Funcion para cambiar el icono del boton play-pause
//con esta funcion podemos hacer que cambie el icono del boton play-pause y evitamos tener dos iconos de pause y play
function checkClass() {
    const nameSong = document.getElementById('name-song');
    //Obtiene el nombre de la cancion que se esta reproduciendo actualmente
    nameSong.innerHTML = arrayCanciones[numSong].src.split("/").pop();
    if (btnPlayPause.classList.contains('fa-pause')) {
        btnPlayPause.classList.add('fa-play');
        btnPlayPause.classList.remove('fa-pause');
    } else {
        btnPlayPause.classList.remove('fa-play');
        btnPlayPause.classList.add('fa-pause');
    }
}

//Funcion reproducir la cancion que se encuentra en la posicion 0 del array y 
//hacer que no pase de 3(que es el numero de canciones que hay en el array) y se
//reinicie el contador cuando llege al final del array

function nextSong() {
    arrayCanciones[numSong].pause();
    if (numSong >= arrayCanciones.length - 1) {
        numSong = 0;
    } else {
        numSong = numSong + 1;
    }
    arrayCanciones[numSong].play();
    checkClass();
}

//Funcion para reproducir la cancion anterior y que no pase de 0 y se reinicie el 
//contador cuando llegue al principio del array
function previousSong() {
    arrayCanciones[numSong].pause();
    if (numSong <= 0) {
        numSong = arrayCanciones.length - 1;
    } else {
        numSong = numSong - 1;
    }
    arrayCanciones[numSong].play();
    checkClass();
}




