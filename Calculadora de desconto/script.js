const desconto = document.getElementById("desconto");
const valorCompra = desconto.value;
console.log(valorCompra);

desconto.addEventListener('input', function() {
    console.log(this.value);
});