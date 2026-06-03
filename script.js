
function returndate(){
let element = document.querySelector('.inputdate');
let output = document.querySelector('.outputDate');
console.log(element.value);
let formate = new Date(element.value).toLocaleDateString('en-IN');
output.value = formate;
}