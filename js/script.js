
  function hideElements() {
    const marvelElement = document.getElementById('marvel');
    const studiosElement = document.getElementById('studios');
    const apresentaElement = document.getElementById('apresenta');

    const tempoParaOcultar = 5000; 

    setTimeout(function() {
      marvelElement.style.display = 'none';
      studiosElement.style.display = 'none';
      apresentaElement.style.display = 'none';
    }, tempoParaOcultar);
  }


  // função para iniciar a contagem regressiva para aparecer o background
  hideElements();




function onAnimationsEnd() {
   
    document.getElementById('animate').removeEventListener('animationend', onAnimationsEnd);

    setTimeout(function() {
        document.body.style.backgroundImage = 'url(../img/pader01.jpg)';
        document.body.style.backgroundSize = 'cover'; 

        const texto = document.createElement('p');
        texto.textContent = ''; 

       
        document.body.appendChild(texto);
    }, 5000);
}

document.getElementById('animate').addEventListener('animationend', onAnimationsEnd);
