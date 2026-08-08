function gerarPDF() {
  const original = document.getElementById('curriculo');

  // Largura A4 em pixels a 96dpi, descontando margens (0mm aqui = 794px cheio)
  const larguraA4px = 794;

  // Cria um clone isolado, sem as classes que limitam/centralizam a largura
  const clone = original.cloneNode(true);
  clone.classList.remove('max-w-4xl', 'mx-auto');
  clone.style.width = larguraA4px + 'px';
  clone.style.maxWidth = larguraA4px + 'px';
  clone.style.margin = '0';
  clone.style.position = 'fixed';
  clone.style.top = '0';
  clone.style.left = '-9999px'; // fora da área visível, mas ainda renderizado
  document.body.appendChild(clone);

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

  html2pdf().set(opcoes).from(clone).save().then(() => {
    document.body.removeChild(clone); // limpa o clone depois de gerar
  });
}
