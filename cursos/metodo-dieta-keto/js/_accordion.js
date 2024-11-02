//VALIDAR LOS SUMARYS PARA QUE ESTE ABIERTO SOLO UNO
const summaries = document.querySelectorAll('summary');

    summaries.forEach((summary) => {
      summary.addEventListener('click', () => {
        summaries.forEach((s) => {
          if (s !== summary) {
            s.parentNode.removeAttribute('open');
          }
        });
      });
    });