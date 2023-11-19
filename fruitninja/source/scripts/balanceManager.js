// Saldo inicial
let currentBalance = localStorage.getItem("playerBalance") ? parseFloat(localStorage.getItem("playerBalance")) : 7000.00;

// Função para atualizar o saldo
function updateBalance() {
    const saldoElement = document.querySelector(".saldo");
    
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('msg');
    const value = parseFloat(urlParams.get('value'));

    if (message === 'win' && value) {
        currentBalance += value;
    } else if (message === 'gameover' && value) {
        currentBalance -= value;
    }

    // Armazena o novo saldo no localStorage
    localStorage.setItem("playerBalance", currentBalance);

    // Formatando o novo saldo para exibir corretamente
    const formattedBalance = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentBalance);
    saldoElement.textContent = formattedBalance.substring(3);  // Removendo o "R$" para ficar igual ao formato original
}

// Chame a função ao carregar a página
document.addEventListener("DOMContentLoaded", updateBalance);
