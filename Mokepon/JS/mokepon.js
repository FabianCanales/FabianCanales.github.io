let ataquejugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;

function iniciarJuego() {
  let sectionSelecionarAtaque = document.getElementById("selecionar-ataque");
  sectionSelecionarAtaque.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let btnFuego = document.getElementById("boton-fuego");
  btnFuego.addEventListener("click", ataqueJugadorFuego);

  let btnAwa = document.getElementById("boton-awa");
  btnAwa.addEventListener("click", ataqueJugadorawa);

  let btnTierra = document.getElementById("boton-tierra");
  btnTierra.addEventListener("click", ataqueJugadortierra);

  let btnReiniciar = document.getElementById("boton-reiniciar");
  btnReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarMascotaJugador() {
  let sectionSelecionarMascota = document.getElementById("selecionar-mascota");
  sectionSelecionarMascota.style.display = "none";
  let sectionSelecionarAtaque = document.getElementById("selecionar-ataque");
  sectionSelecionarAtaque.style.display = "block";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("Mascota-Jugador");

  if (inputHipodoge.checked == true) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked == true) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked == true) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("No has seleccionado una Mascota \n Por favor selecciona una ");
  }

  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById("Mascota-Enemigo");
  let mascotaAleatorio = aleatorio(1, 3);
  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
function ataqueJugadorFuego() {
  ataquejugador = "Fuego";
  ataqueAleatorioEnemigo();
}
function ataqueJugadorawa() {
  ataquejugador = "Awa";
  ataqueAleatorioEnemigo();
}
function ataqueJugadortierra() {
  ataquejugador = "Tierra";
  ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
    alert("El enemigo te ha atacado con Fuego");
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Awa";
    alert("El enemigo te ha atacado con Awa");
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "Tierra";
    alert("El enemigo te ha atacado con Tierra");
  }
  combateMokepon();
}
function combateMokepon() {
  let spanVidasJugador = document.getElementById("vidas-Jugador");
  let spanVidasEnemigo = document.getElementById("vidas-Enemigo");

  if (ataquejugador == ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (
    (ataquejugador == "Fuego" && ataqueEnemigo == "Tierra") ||
    (ataquejugador == "Tierra" && ataqueEnemigo == "Awa") ||
    (ataquejugador == "Awa" && ataqueEnemigo == "Fuego")
  ) {
    crearMensaje("ganaste");
    vidaEnemigo--;
    spanVidasEnemigo.innerHTML = vidaEnemigo;
  } else {
    crearMensaje("Perdiste");
    vidaJugador--;
    spanVidasJugador.innerHTML = vidaJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidaEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES HAS GANADO EL COMBATE");
  } else if (vidaJugador == 0) {
    crearMensajeFinal("LO SIENTO , PERDISTE :C");
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    " Tu mascota ataco  con " +
    ataquejugador +
    " La mascota del enemigo Ataco con " +
    ataqueEnemigo +
    "\n" +
    resultado;

  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  let btnFuego = document.getElementById("boton-fuego");
  btnFuego.disabled = true;

  let btnAwa = document.getElementById("boton-awa");
  btnAwa.disabled = true;

  let btnTierra = document.getElementById("boton-tierra");
  btnTierra.disabled = true;
}
function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
