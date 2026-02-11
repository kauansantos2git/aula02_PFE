function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if (idade >= 16 && nivel > 5) {
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    } else if (idade >= 16 && nivel <= 5) {
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    } else {
        mensagem.innerText = "Inscriçao negada. Idade mínima: 16 anos";
        mensagem.style.color = "red";
    }
}

function validardesafio1() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagem2 = document.getElementById("mensagem2");

    if (senha1.length >= 8) {
        if (senha1 == senha2) {
            mensagem2.innerText = "Senha bem sucedida.";
            mensagem2.style.color = "green";
        } else {
            mensagem2.innerText = "Senhas não conferem.";
            mensagem2.style.color = "red";
        }
    } else {
        mensagem2.innerText = "Senha inválida.";
        mensagem2.style.color = "red";
    }
}

function validardesafio2() {
    const idade_df2 = document.getElementById("idade_df2").value;
    const estudante = document.getElementById("estudante").value;
    const mensagem3 = document.getElementById("mensagem3");

    if (idade_df2 >= 60 || document.getElementById("estudante").checked) {
        mensagem3.innerText = "Oba, você ganhou desconto!";
        mensagem3.style.color = "green";
    } else {
        mensagem3.innerText = "Desconto indisponível.";
        mensagem3.style.color = "red";
    }
}

function validardesafio3(){
    const nome_df3 = document.getElementById("nome_df3").value;
    const idade_df3 = document.getElementById("idade_df3").value;
    const mensagem4 = document.getElementById("mensagem4");
    const nomeSemEspaco = nome_df3.replace(/\s/g, '');

    if (nomeSemEspaco.length > 0 && idade_df3 > 0) {
        mensagem4.innerText = "Dados preenchidos corretamente.";
        mensagem4.style.color = "green"; 
    } else if (nomeSemEspaco.length == 0) {
        mensagem4.innerText = "Erro, preencha o campo nome corretamente.";
        mensagem4.style.color = "red";   
    } else {
        mensagem4.innerText = "Erro, preencha o campo idade corretamente.";
        mensagem4.style.color = "red"; 
    }
}