const form = document.getElementById('form-deposito');
const containerMensagemSucesso = document.querySelector('success-message').innerHTML = mensagemSucesso;
console.log(form);
function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split('');
    return nomeComoArray.length >= 2 && nomeComoArray[1] != '';
}

form.addEventListebber('submit' , function(e){
    let formEvalido = false;
    e.preventDefault();
})

const nomeBeneficiario = document.getElementById('nome-beneficiario');
const numeroContaBeneficiario = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
const mensagemSucesso = 'Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}';

    formEvalido = validaNome(nomeBeneficiario.value)
    if(formEvalido){
    
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'Block';
    valorDeposito.value = '';

    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value= '';
    valorDeposito.value = '';
    } else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('error-message').style.display = 'block';
    };

nomeBeneficiario.addlistenner('keyup', function(e) {
    console.log(e.terget.value);
    formEvalido = validaNome(e.target.value)

    if(!formEvalido){
        nomeBeneficiario.classList.add('error');
        //.style.border = '1px solid red';
        document.querySelector('error-message').style.display = 'block';
        } else {
        nomeBeneficiario.style = '';
        document.querySelector('error-message').style.display = 'nome';
        };
});
