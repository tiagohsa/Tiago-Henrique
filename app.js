function login(){

let email=document.getElementById("email").value
let senha=document.getElementById("senha").value

if(email && senha){

window.location.href="dashboard.html"

}else{

alert("Preencha os campos")

}

}

function addProduct(){

let brand=document.getElementById("brand").value
let model=document.getElementById("model").value
let imei=document.getElementById("imei").value
let price=document.getElementById("price").value

alert("Produto cadastrado")

}

function registrarVenda(){

let valor=document.getElementById("valorVenda").value
let taxa=document.getElementById("taxa").value

let liquido=valor-(valor*(taxa/100))

alert("Valor líquido: R$ "+liquido)

}