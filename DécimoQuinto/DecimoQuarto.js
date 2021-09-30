function VerificarPedido(){
    Pedido = document.getElementById('pedido').value;
    Disponiveis = ['Sorvete', 'Kibi', 'Cachorro quente', 'Hamburgão', 'Pizza', 'Bolo' ]
    if (Disponiveis.includes(Pedido)) {
        document.getElementById('PermissaoEncaminhamento').innerText = 'Pedido encaminhado!'

    }else{
        document.getElementById('PermissaoEncaminhamento').innerText = 'Refaz ae que deu erro!'
    }








}
