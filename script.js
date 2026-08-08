function gerarPDF() {
  const elemento = document.getElementById('curriculo');

  const opcoes = {
    margin: [8, 8, 8, 8], // Margem de 12mm em todas as bordas do papel
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opcoes).from(elemento).save();
}
