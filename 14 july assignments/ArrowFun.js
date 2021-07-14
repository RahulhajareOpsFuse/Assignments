
//writing arrow function

let perfect=(no)=>{
    cnt=0;
    for(i=1;i<no;i++)
    {
        if(no%i==0)
        {
            cnt=cnt+i;
        }
    }
    if(cnt==no)
    {
        console.log("Number is perfect");
    }
    else
    {
        console.log("Number is not perfect");
    }
}

console.log(perfect(6))