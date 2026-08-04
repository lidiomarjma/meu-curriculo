function gerarPDF() {
  const elemento = document.getElementById('curriculo');

  // Salva a classe escura da tela
  const classesOriginais = elemento.className;

  // Aplica o tema de impressão (fundo branco, texto escuro)
  elemento.className = "max-w-4xl mx-auto bg-white text-gray-900 p-8 md:p-12 rounded-lg border border-gray-300";

  const opcoes = {
    margin: [10, 10, 10, 10],
    filename: 'Curriculo_Lidiomar_Alves.pdf',
    image: { type: 'jpeg', quality: 1.0 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Gera o PDF e retorna a tela para o modo escuro
  html2pdf().set(opcoes).from(elemento).save().then(() => {
    elemento.className = classesOriginais;
  });
}
