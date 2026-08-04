function gerarPDF() {
  const elemento = document.getElementById('curriculo');

  const opcoes = {
    margin: [8, 8, 8, 8],
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opcoes).from(elemento).save();
}
