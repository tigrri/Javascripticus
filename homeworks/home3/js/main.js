
var objectNew ={
    name: "Lena"    
},
variable = "test";
objectNew.prof = "IT",
objectNew.numb = 25,
objectNew[variable] = 5,
objectNew.fruit = function(n, s){
    console.log("Я сегодня съел " +n+ " яблок сорта " +s);
};
var apple = {
	name:"apple",
    quantity: 8,
    sort: "Antonovka"
};

window.onload = function(){
    console.log(objectNew);
    objectNew.fruit(apple.quantity, apple.sort);
}
