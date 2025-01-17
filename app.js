let amigos = []; // Declarando array para almacenar amigos

function agregarAmigo(){
    let amigo = document.getElementById('amigo'); // Obtiene el nombre dado por el usuario
    let nombreAmigo = amigo.value; // Extrae el nombre

    if(nombreAmigo == ''){ // Compara para verificar que el nombre no sea vacio
        alert("Por favor, inserte un nombre."); // Mensaje de alerta al usuario
    } else{
        amigos.push(nombreAmigo); // Si es valido, inserta en el array
        leerAmigos(amigos); // Añadiendo a los amigos
    }

    amigo.value = ''; // Borra lo ingresado por el usuario
}

function leerAmigos(lista){
    let listaAmigos = document.getElementById('listaAmigos'); // Toma el elemento de 
    let textoLista = ''; // Inicia el texto con todos los elementos
    listaAmigos.innerHTML = ''; // Elimina todo el texto de la etiqueta

    for(let i=0; i<lista.length; i++){
        textoLista += `<li> ${lista[i]} <li/> `; // Agrega elemento de la lista
    }

    listaAmigos.innerHTML = textoLista; // Agrega el texto como elementos de la lista
}