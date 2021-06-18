function fib(n) 
{
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

function closeFibon(input)
{
//max fibon number that is smaller than input
var n = 0;
if(input==0){return 1;}
while(fib(n)<input){n++;}
return fib(n-1);
}


function formerFibonacci(array)
{
var result=new Array();
for(var i =0;i<array.length;i++)
{
//closeFibon(array[i])
console.log(closeFibon(array[i]));
result.push(closeFibon(array[i]));
}
//console.log(result);
}

formerFibonacci([1,5,9,22]);
