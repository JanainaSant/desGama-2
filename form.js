function armazenaDados() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");

    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));
    
    if(dados == null){
        localStorage.setItem("dadosUsuario", "[]");
        dados = [];
    }
   
    var registro = {
        nome: campo1.value,
        email: campo2.value
    }

    dados.push(registro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
    alert("Dados cadastrados com Sucesso :)")

    campo1.value ="";
    campo2.value ="";
}

function armazenaProduto(produto, descricao, preco, posicao) { 
    localStorage.setItem("produto" + posicao, produto); //adicionando itens ao LocalStorage
    localStorage.setItem("descricao" + posicao, descricao);
    localStorage.setItem("preco" + posicao, preco); //adicionando itens ao LocalStorage
    
    alert("Produto adicionado ao carrinho!"); // Alerta mostrando que o produto foi adicionado ao carrinho
    
    var i = 0;     // posições 
    var preco= 0; // preço do produto

    for(i=1; i<=99; i++) // verficando todos os produtos existente no localStorage
    {
        var dados = localStorage.getItem("produto" + i + " "); // verifica se há algo na posição. 
    
        if(dados != null){
            document.getElementById("products").innerHTML += localStorage.getItem("produto" + i);
            document.getElementById("products").innerHTML += localStorage.getItem("descricao" + i);
            document.getElementById("products").innerHTML += " ";
            document.getElementById("products").innerHTML += localStorage.getItem("preco" + i);
        } 
    }
}
