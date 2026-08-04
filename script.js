document.addEventListener('DOMContentLoaded', () => {
  console.log('Currículo carregado com sucesso!');

  // Exemplo de manipulação DOM / interatividade
  const anoAtual = new Date().getFullYear();
  const elementoAno = document.getElementById('ano-atual');
  if (elementoAno) {
    elementoAno.textContent = anoAtual;
  }
});
