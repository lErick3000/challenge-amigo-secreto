// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo == "") {
        alert("Porfavor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        limpiarCaja();
        listaFila();
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function listaFila() {
    for (let i = 0; i < amigos.length; i++) {
  const amigo = amigos[i];
  const elementoLista = document.createElement("li");
  elementoLista.textContent = amigo;
  listaAmigos.appendChild(elementoLista);
  }
}

function sortearAmigo() {
 
    let numeroAmigos = amigos.length;

    let amigoElegido = parseInt(Math.floor(Math.random()*numeroAmigos));

   limpiarCaja();

   document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es ${amigos[amigoElegido]}`;

   amigos= [];
}
    
   
   
