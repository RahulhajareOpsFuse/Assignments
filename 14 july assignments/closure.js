function outer()
{
    var a='this is a outer function';
    document.write(a+"<br>");
    function inner()
    {
        var b='This is a inner function';
        document.write(b+"<br>");//inner function variable
        document.write(a+"<br>");//Outer Function Variable
    }
    inner();
}
outer();

//Closure is a inner fuction which has access to the outer function.