const form = document.getElementById('form-atividade');
const Nomes = [];
const telefones = [];
const profissoes = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-atividade');
    const inputTelefone = document.getElementById('telefone');
    const inputProfissao = document.getElementById('profissoes')

    if (Nomes.includes(inputNome.value)) {
        alert(`A atividade: ${inputNome.value} Já foi inserida`);
    } 

else if (profissoes.includes(inputProfissao.value)) {
    alert(`A profissão: ${inputProfissao.value} Já foi inserida`);
}    
    
else if (!inputNome.value.trim() || !inputTelefone.value.trim() || !inputProfissao.value.trim()){
    alert("Por favor, preencha novamente os campos: Nomes,Telefones e Profissão.");
    return;
}
else if (telefones.includes(inputTelefone.value)){
    alert("Este telefone ou profissão já foi adicionado.");
    return;
}
else if (profissoes.includes(inputProfissao.value)){
    alert("Esta profissão já foi adicionado.");
    return;
} 
else { 
    Nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);
    profissoes.push(inputProfissao.value);

    inputNome.value = '';
    inputTelefone.value = '';
    inputProfissao.value = '';

    atualizaTabela();
}
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    for (let i = 0; i <Nomes.length; i++) {
        const linha = document.createElement('tr');
        const colunaNomes = document.createElement('td');
        const colunaTelefone = document.createElement('td');
        const colunaProfissao = document.createElement('td');

        colunaNomes.textContent = Nomes[i];
        colunaTelefone.textContent = telefones[i];
        colunaProfissao.textContent = profissoes[i];

        linha.appendChild(colunaNomes);
        linha.appendChild(colunaTelefone);
        linha.appendChild(colunaProfissao);
        corpoTabela.appendChild(linha);
    }
}
