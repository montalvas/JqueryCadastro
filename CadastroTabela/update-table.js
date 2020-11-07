function mostrarTabela(array) {
    for(ar of array) {
        if(ar.length == 0) {
            return
        }
    }

    const tabela = $(".tabela");

    tabela.html(`
        <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Email</td>
            <td>Telefone</td>
        </tr>
    `);
    
    for(element of array) {
        tabela.append(`
            <tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td>${element[3]}</td>
                <td><input type="button" onclick="alterarDados(${array.indexOf(element)})" value="Alterar"></td>
            </tr>
        `); 
    }

    
} 