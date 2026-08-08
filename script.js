async function gerarPDF() {
  const elemento = document.getElementById('curriculo');
  const body = document.body;

  window.scrollTo(0, 0);

  // Guarda os estados originais para restaurar depois
  const classesOriginaisEl = elemento.className;
  const estiloOriginalEl = elemento.getAttribute('style') || '';
  const estiloOriginalBody = body.getAttribute('style') || '';

  // Zera o padding do BODY (era p-4 md:p-8, deslocava o elemento para a direita)
  body.style.padding = '0';
  body.style.margin = '0';

  // Remove classes que limitam/centralizam a largura do card e força largura A4
  elemento.classList.remove('max-w-4xl', 'mx-auto');
  elemento.style.width = '210mm';
  elemento.style.maxWidth = '210mm';
  elemento.style.margin = '0';
  elemento.style.boxSizing = 'border-box';

  // Espera o navegador recalcular o layout antes de capturar
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const opcoes = {
    margin: 10, // margem branca ao redor do conteúdo no PDF final, em mm
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: elemento.scrollWidth,
      windowHeight: elemento.scrollHeight
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opcoes).from(elemento).save().then(() => {
    // Restaura elemento e body ao estado original
    elemento.className = classesOriginaisEl;
    estiloOriginalEl ? elemento.setAttribute('style', estiloOriginalEl) : elemento.removeAttribute('style');
    estiloOriginalBody ? body.setAttribute('style', estiloOriginalBody) : body.removeAttribute('style');
  });
}
