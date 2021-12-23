
const  enviarMensaje =()=>{
    let socket = new WebSocket('ws://chat-docker-nodejs.herokuapp.com/:56436');

  var men =  document.getElementById("mensaje").value;
    socket.onopen = function(e){
        console.log("[open] Conexion establecida");
        console.log("Enviado al servidor");

        if(!men == null  || !men == ""){
            console.log("xfdxfd"+men);
            socket.send(men);
          }        
    };
    const mensajes = [];
    const mens = [];
    socket.onmessage = function(event){
        console.log(`[message] Datos recibidos del servidor: ${event.data}`);
         mensajes.push(event.data);
           mens.push([...mensajes]);
           document.getElementById("mensajesServer").innerHTML = mens+"<br>";        
     };
        
    socket.onclose = function(event){
        if(event.wasClean){
            console.log(`[close]Conexion cerrada limpiamente, codigo=${event.code} motivo=${event.reason}`);
        }else{
            console.log('[close]La conexion se cayo');
        }
    }
    socket.onerror = function(error){
        console.log(`[error] ${error.message}`);
    }
    
}

