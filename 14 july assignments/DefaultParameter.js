
//Default parameter is a concept for passing a parameter to the function with some default values.
let even=(num,rem=2)=>{
    if(num%rem==0)
    {
        console.log("Number is even")
    }
    else{
        console.log("Number is Odd")
    }
}

even(26)