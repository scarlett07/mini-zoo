var cambiarFiltro = function() {
  var imagen = document.getElementsByClassName('animal');// accedo a todas las imagenes
  var filtro = document.getElementById("selector").selectedIndex; //accedo al index donde se enciuentra el texto del filtro

  if (document.getElementsByTagName("option")[filtro].value =='negative-colors'){ //comparo el filtro para saber cual será aplicado
    for(i=0;i<imagen.length;i+2){ //recorro cada imagen para que se le aplique a todas
        imagen[i].setAttribute("class", "negative-colors");
 }  //   } else if (document.getElementsByTagName("option")[filtro].value =='Sepia') {
  //     for(i=0;i<imagen.length;i+2){
  //         imagen[i].setAttribute("class", "sepia");
  //   }
  // }
}
}
