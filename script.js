function gerarPDF() {
  const elemento = document.getElementById('curriculo');

  const larguraPx = elemento.offsetWidth;
  const alturaPx = elemento.offsetHeight;

  const opcoes = {
    margin: 0,
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      width: larguraPx,
      height: alturaPx
    },
    jsPDF: {
      unit: 'px',
      format: [larguraPx, alturaPx],
      orientation: 'portrait',
      hotfixes: ['px_scaling']
    }
  };

  html2pdf().set(opcoes).from(elemento).save();
}
