//var resposta = confirm("Deseja excluir?");

/*console.log(resposta);
*/

//var a = 10;
//var b = 5;

/*function somar(a,b){

	return a + b;
}
console.log(somar(2,5));
*/

const a=10;
const b=15;
document.querySelector("#calcular").addEventListener("click",function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    //ParseInt(Função interna que converte para inteiro)
    alert(parseInt(valorA)+parseInt(valorB));

});