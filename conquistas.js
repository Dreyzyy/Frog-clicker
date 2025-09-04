
const conquistasId = document.getElementById('conquistas');
const botaoConquistas = document.getElementById('abrir-conquistas');
const botaoFecharConquistas = document.getElementById('close-conquistas');
conquistas()

function conquistas () {
botaoConquistas.addEventListener('click', () => {
    conquistasId.style.display = 'block';
})
}
botaoFecharConquistas.addEventListener('click', () => {
    botaoFecharConquistas.style.display = 'block';
    conquistasId.style.display = 'none';
})

