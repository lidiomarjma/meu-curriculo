function gerarPDF() {
  const elemento = document.getElementById('curriculo');

  // Guarda o estado original para restaurar depois
  const classesOriginais = elemento.className;
  const estiloOriginal = elemento.getAttribute('style') || '';

  // Largura A4 em pixels a 96dpi
  const larguraA4px = 794;

  // Remove classes que limitam/centralizam a largura e força a largura da folha
  elemento.classList.remove('max-w-4xl', 'mx-auto');
  elemento.style.width = larguraA4px + 'px';
  elemento.style.maxWidth = larguraA4px + 'px';
  elemento.style.margin = '0';

  const opcoes = {
    margin: 0,
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: larguraA4px,
      width: larguraA4px
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opcoes).from(elemento).save().then(() => {
    // Restaura o elemento ao estado original, visível na tela
    elemento.className = classesOriginais;
    if (estiloOriginal) {
      elemento.setAttribute('style', estiloOriginal);
    } else {
      elemento.removeAttribute('style');
    }
  });
}
