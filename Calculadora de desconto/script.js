const valorCompraInput = document.getElementById('valorCompra');
const porcentagemInput = document.getElementById('porcentagem');
const resultadoDesconto = document.getElementById('resultadoDesconto');
const resultadoFinal = document.getElementById('resultadoFinal');

function formatarReais(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularDesconto() {
    const valorCompra = parseFloat(valorCompraInput.value) || 0;
    const porcentagem = parseFloat(porcentagemInput.value) || 0;

    const desconto = valorCompra * (porcentagem / 100);
    const totalComDesconto = valorCompra - desconto;

    resultadoDesconto.textContent = formatarReais(desconto);
    resultadoFinal.textContent = formatarReais(totalComDesconto);
}

valorCompraInput.addEventListener('input', calcularDesconto);
porcentagemInput.addEventListener('input', calcularDesconto);

calcularDesconto();