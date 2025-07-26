document.addEventListener('DOMContentLoaded', () => {
  const modeSelector = document.getElementById('mode');
  const interfaceDiv = document.getElementById('interface');

  modeSelector.addEventListener('change', () => {
    const mode = modeSelector.value;
    loadInterface(mode);
  });

  function loadInterface(mode) {
    if (mode === 'simulation') {
      interfaceDiv.innerHTML = "<p>💻 Modo de simulação local ativado.</p>";
    } else if (mode === 'metamask') {
      interfaceDiv.innerHTML = "<p>🦊 Verificando MetaMask...</p>";
      if (typeof window.ethereum !== 'undefined') {
        interfaceDiv.innerHTML += "<p>MetaMask detectada!</p>";
      } else {
        interfaceDiv.innerHTML += "<p>❌ MetaMask não encontrada.</p>";
      }
    } else if (mode === 'contract') {
      interfaceDiv.innerHTML = "<p>⛓️ Interação com contrato real em breve.</p>";
    }
  }

  loadInterface(modeSelector.value);
});
