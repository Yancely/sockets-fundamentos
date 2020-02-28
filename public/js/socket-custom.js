
var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');
    
});

// Los On son para escuchar sucesos

socket.on('disconnect', function(){

    console.log('Perdimos conexion con el servidor');
    
});

// Los emits son para enviar informacion

socket.emit('enviarMensaje', {
    usuario: 'Fernado',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
    
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje){

    console.log('Servidor:', mensaje);
    
})
