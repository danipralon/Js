var name = "Dani Pralon";
//alert("Welcome "+ name);
// comentário de uma linha
/*comentário de um bloco
var phrase = "The best soccer team is Japan";
console.log(name);
console.log(phrase.replace("Japan","Brazil"));
//maiuscula
console.log(phrase.toUpperCase());
//minuscula
console.log(phrase.toLowerCase());
var n1 = 5;
var n2 = 3;
console.log(5-3);
var list = ["apple","pear","orange"];
list.push("grape");
list.pop(); //tira o último elemento
console.log(list.length);
list.reverse();
console.log(list);
console.log(list.toString());
console.log(list.toString()[0]);
console.log(list[1]);
console.log(list.join(" - "))
var fruit = {name:"apple",collor:"red"};
console.log(fruit);
console.log(fruit.name)
var fruits = [{name:"apple",collor:"red"},{name:"grape",collor:"violet"}];
console.log(fruits[1].name);
var idade = prompt("Qual a sua idade?");
if (idade>=18) {
	console.log("Maior de idade")
}else{
	console.log("Menor de idade")
};

var cont =0;
while(cont<5){
	console.log(cont);
	cont=cont+1;
	//cout++;
};
var cont;
for(cont=0;cont<5;cont++){
	console.log(cont);	
}
var d =new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());*/
function soma(n1,n2){
	return n1+n2;
}

function clicked(){
	//alert("Obrigada por clicar");
	document.getElementById("thanks").innerHTML = "Thanks!";
}

function redirect(){
	window.open("https://web.digitalinnovation.one/browse");
	//window.location.href = "https://web.digitalinnovation.one/browse"
}

function change(){
	document.getElementById("move").innerHTML = "Thanks!";
	//alert("trocar de texto");
}
//alert(soma(4,9))
function comeBack(){
	document.getElementById("move").innerHTML = "Please, hover your mouse here";
}

function functionChange(elemento){
	console.log(elemento.value)
}
/*function change(elemento){
	elemento.innerHTML = "Thanks!";
	//alert("trocar de texto");
}
funciona pra qualquer elemento, n apenas pra um específico

function comeBack(elemento){
	elemento.innerHTML = "Please, hover your mouse here";
}*/