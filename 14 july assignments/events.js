function myMsg()
{
    alert("Hello You are clicked now")
}
function white()
{
    document.getElementById('btnClick').style.backgroundColor="white";
}

document.getElementById('btnClick').addEventListener('dblclick',white)