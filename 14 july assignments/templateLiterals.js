var product={
    name:'sugar',
    weight:'1 kg',
    price:40

}

//by using template literals
console.log(`product  name is ${product.name} weight: ${product.weight} and price is ${product.price} Rs.`)

//without using template literal

console.log("product name is "+product.name+" product weight is "+product.weight+" product price is "+product.price+" Rs")

//by using function

template=(string,age1)=>{
    let name=string[0];
    let surname=string[1];
    //to print multiple line string by using string literals.
    console.log(`name : ${name} 
Surname : ${surname} 
age : ${age1}`)
}

var string=['Rahul','Hajare']
var age1=23
template(string,age1)


let person = 'Rahul';
let age = 24;

function myFun(strings, personExp, ageExp) {
  let str0 = strings[0]; // "that "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp < 30){
    ageStr = 'younger';
  } else {
    ageStr = 'older';
  }

  // We can return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myFun`That ${ person } is a ${ age }.`;

console.log(output);
