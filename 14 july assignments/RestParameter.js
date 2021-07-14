//normal parameter 
/*function demo(a,b)
{
    console.log(a+b)//3 : it counts only first 2
}
demo(1,2,3,4,5,6)
*/

//Rest parameter is allowing us to more easily handle various input as a parameter in a function.

sum=(...input)=>{
    console.log(input)
    cnt=0;
    for(i of input)
    {
        cnt+=i;
    }
    console.log("Addition = "+cnt);
}

sum(1,2,3,4,5,6,7)

//for clear some doubts

function doubts(a,b,...c){
    console.log(`${a} ${b}`);//oil toothpaste
    console.log(c)//salt sugar honey
    console.log(c[0])//salt
    console.log(c.indexOf('sugar'))//1
    console.log(c.length)//3

}

doubts('oil','toothpaste','salt','sugar','honey')