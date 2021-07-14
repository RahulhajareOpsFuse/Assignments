
let spread=(a,b,c)=>{
    console.log(a+b+c);
}

//spread(1,2,3) normal call

var arrVal=[1,2,3]
spread.apply(null,arrVal)//by using apply
spread(...arrVal)//by using spread operator

//replace concat of to array

let arr1=[1,2,3,4]
let arr2=[4,5,6,7]
//console.log(arr1.concat(arr2))
let arr3=[3,2,4]
//concat to array by using spread operator
arr1=[...arr1,...arr2,...arr3]
console.log(arr1) //[1, 2, 3, 4, 4, 5, 6, 7, 3, 2, 4]

//replace or copy of an array
let arc1=[1,2,3,6]
let arc2=arc1;
console.log(arc2)
arc2.push(4,5);
console.log(arc1)//[1, 2, 3, 4, 5]
console.log(arc2)// [1, 2, 3, 4, 5]  both has same output
let arc3=[1,2,3,9]
let arc4=[...arc3]
console.log(arc4)
arc4.push(4,5)
console.log(arc3)//[1,2,3]
console.log(arc4)//  [1,2,3,4,5]   Not Same Output Now

//to concat all array together
arc2=[...arc1,...arc2,...arc3,...arc4]
console.log("Value of arc2 is : "+arc2)// Value of arc2 is : 1,2,3,6,4,5,1,2,3,6,4,5,1,2,3,9,1,2,3,9,4,5

