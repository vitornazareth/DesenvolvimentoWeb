const a=10;
const b=15;

//Evento é sempre aquilo em que o javascrip escuta e reage a algo
//Como criar um evento
//No meu documento eu seleciono calular
//Em seguida devo criar uma escuta há um evento(Nesse caso colocamos um click seguido da virgula para executar como função)
//Chamada call back(funtion(){}) função anonima
document.querySelector("#calcular").addEventListener("click",function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    
//Criando um if para auxiliar com um alerta caso ainda não tenha digitado um valor, e não ficar aparecendo somente nan
    if(valorA.length >0 && valorB.length >0){

    //ParseInt(Função interna que converte para inteiro)
    alert(parseInt(valorA)+parseInt(valorB));
}
else{
	alert("Digite os valores.");
}
});




