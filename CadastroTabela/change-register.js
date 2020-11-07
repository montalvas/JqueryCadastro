function alterarDados(number) {
    
    const linha = $(".tabela").children()[number + 1];

    $("#formAlterar").show();

    const input = $("#formAlterar input");
    let i = 0;

    for(i; i < 4; i++) {
        input[i].value = $($(linha).children()[i]).text();
    }

    $(input[4]).click(() => {
        /*
        $($(linha).children()[0]).text(input[0].value);
        $($(linha).children()[1]).text(input[1].value);
        $($(linha).children()[2]).text(input[2].value);
        $($(linha).children()[3]).text(input[3].value);*/

        
        for(i = 0; i < 4; i++) {
            console.log(input[i].value)
            dadosTabela[number][i] = input[i].value;
        }
        alert("Dados alterados!");
        $("#formAlterar").hide();
    })



    //$(coluna1).text("b"); alterando o elemento.
}