function cadastrarNovo(tabela) {
    const input = $("input");
    let i = 0;
    const novosDados = [];

    for(i; i < 4; i++) {
        if(input[i].value == "") {
            alert("Campo inválido!");
            input[i].focus();
            return;
        } else {
            novosDados.push(input[i].value);
        }
    }

    alert("Dados cadastrados!");

    for(i = 0; i < 4; i++) {
        input[i].value = "";
    }

    input[0].focus();
    tabela.push(novosDados);
    
}