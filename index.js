
//camara es el nombre de la función que vamos a implementar
window.addEventListener('load',camara);

function camara(){

//creamos la variable vídeo, la cual invoca al elemento que tenga el id="cam" dentro del documento
var video = document.getElementById('videoElement');  

// getUserMedia es el método que permite acceder al hardware multimedia del pc, este metodo está contenido dentro del objeto navigator

navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia);

if(navigator.getUserMedia){  
//como deseamos tener activado tanto audio, video, los ponemos en true,
//el segundo parámetro será una función a la cual le pondremos videocam como parámetro, el cual recibe el video a visualizar
navigator.getUserMedia({audio:false,video:true},function(videocam){

// ahora pasaremos la ruta de donde se va a tomar el video, para ello necesitamos convertir dicho video a una URL que pueda ser leida por la etiqueta de video.
//para ello hacemos uso del método createObjectURL del objeto URL, el cual pertenece al objeto window y después le pasamos el vídeo a convertir como parámetro, en este caso videocam
video.srcObject = videocam;//No usar URL objects(incompatibles con Google Chrome)

//iniciamos la webcam de nuestro pc
video.play();
},

//función que muestra por consola los errores ocurridos en caso de haberlos
function (e){
  console.log(e);
 });
    }else{
       alert('tu navegador no es compatible');  
       }
 }

 /**
 *Function for button up
 */
 forUp= function(){
 	console.log("Pinchado up");
 }

 /**
 *Function for button left
 */
 forLeft= function(){
 	console.log("Pinchado left");
 }
 
 /**
 *Function for button Down
 */
 forDown= function(){
 	console.log("Pinchado down");
 }
 /**
 Funtion for buton right
 **/
 forRight= function(){
 	console.log("Pinchado right");
 }
 window.onload = function(){

 	var  buttonUp=document.getElementById("up");
	var  buttonLeft=document.getElementById("izq");
 	var buttonDown= document.getElementById("down");
 	var buttonRight= document.getElementById("right");

 	buttonUp.onclick=forUp;
 	buttonLeft.onclick=forLeft;
 	buttonRight.onclick=forRight;
 	buttonDown.onclick=forDown;
 		document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37 || 65://Left arrow Pressed
            forLeft();
            break;
        case 38 || 87://Up arrow pressed
           	forUp();
            break;
        case 39 || 68://Right arrow pressed
            forRight();
            break;
        case 40 || 83://Down arrow pressed
            forDown();
            break;
    		}	
		});
 	
  }

