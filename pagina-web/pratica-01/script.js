function adicionarProduto(){
	var produto_nome = document.getElementById("produto").value;
	var valor = document.getElementById("valor").value*1;
	var qntd = document.getElementById("quantidade").value;
	var vtotal = (valor * qntd);
	valor_total_compra += vtotal;
	var produto_item_tabela =
	var limpar = document.getElementById()
	"<tr><td>" + produto_nome +
	"</td><td>" + valor.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'}) +
	"</td><td>" + qntd +
	"</td><td>" + vtotal.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'}) +
	"</td></tr>";
	alert("Produto inserido com sucesso");
	tabela_produtos.innerHTML +=produto_item_tabela;
	valor_total.innerHTML = "<span>Total compra: </span>" +
	valor_total_compra.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})
	
}
var valor_total_compra = 0;
