$(() => {

    const btnCadastrar = $("#btnCadastrar");
    const btnTabela = $("#btnTabela");
    const formCadastro = $("#formCadastro");
    const formTabela = $("#formTabela");

    btnCadastrar.click(() => {
        formCadastro.show();
        formTabela.hide();
    });

    btnTabela.click(() => {
        formTabela.show();
        formCadastro.hide();
    });

    $("#cadastrar").click(() => {
        cadastrarNovo(dadosTabela);
        
        mostrarTabela(dadosTabela);

    })

    
});