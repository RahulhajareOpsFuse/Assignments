//try catch and throw finally
try
{
    //code to be written here
    console.log("starts of try run");
    console.log("end of try");
}
catch(err)
{
    //this block is used to catch the error
    console.log("Error has occured");
}
finally{
    //this block is always executed.
    console.log('this is always run');
}
console.log('Then the execution continues')

try{
    var a=32;
    var b=c;
    console.log(a+b);
}
catch(err)
{
    console.log(`The Error : ${err}`)
}
finally
{
    console.log("this is addtion program");
}