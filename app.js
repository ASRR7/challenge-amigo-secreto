let amigos = []; // Declarando array para almacenar amigos

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; // Obtiene el nombre dado por el usuario

    if(amigo == ''){ // Compara para verificar que el nombre no sea vacio
        alert("Por favor, inserte un nombre."); // Mensaje de alerta al usuario
    } else{
        amigos.push(amigo); // Si es valido, inserta en el array
    }

    amigo = ''; // Borra lo ingresado por el usuario
}