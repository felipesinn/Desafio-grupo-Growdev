
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
        const animateElement = document.getElementById('animate');
        animateElement.classList.add('fundo-background-final');

        const h1 = document.createElement('h1');
        h1.textContent = 'SPIDER-MAN';
        h1.classList.add('titulo-h1'); 

        const p = document.createElement('p');
        p.textContent = 'Estreia nos Cinemas 23-10-2023';
        p.classList.add('paragrafo-p'); 

      
        animateElement.appendChild(h1);
        animateElement.appendChild(p);
    }, 5000);
}

document.getElementById('animate').addEventListener('animationend', onAnimationsEnd);


