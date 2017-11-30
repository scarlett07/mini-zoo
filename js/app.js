var cambiarFiltro = function() {
  var imagen = document.getElementsByTagName('img');// accedo a todas las imagenes
  var filtro = document.getElementById('selector').value; //accedo al index donde se enciuentra el texto del filtro

  var newImagen=[];

  if (filtro =='negative-colors') { //comparo el filtro para saber cual será aplicado
    for(var i=0;i<imagen.length;i++){ //recorro cada imagen para que se le aplique a todas
      newImagen.push(imagen[i].setAttribute('class', 'negative-colors'));
      }
      return newImagen;
    }
  else if (filtro =='Sepia') {
    for(var i=0;i<imagen.length;i++){
      newImagen.push(imagen[i].setAttribute('class', 'sepia'));
      }
      return newImagen;
    }
  else if (filtro =='White-black') {
    for (var i = 0; i < imagen.length; i++) {
      newImagen.push(imagen[i].setAttribute('class', 'white-black'));
    }
    return newImagen;
  }
  else if(filtro =='Original') {
    for (var i = 0; i < imagen.length; i++) {
      newImagen.push(imagen[i].setAttribute('class', 'original'));
    }
    return newImagen;
  }
}
