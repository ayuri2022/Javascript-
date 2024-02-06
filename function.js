/**
 * function are used to organised the code 
 * syntax:
 * function  function_name ()
 * {
 *    code block;
 * }
 * 
 * parameterised function syntax:
 * function function_name (parameter1,parameter 2)
 * {
 *   code block;
 * }
 * 
 * fat arrow function or arrow function:
 * function function_name = ( parameter) => {
 * 
 * code block;
 * }
 * 
 */


// 1.parameterized function
 function addition( x,y)
 {
    let z = a+b;
    return z;
 }
let a =10;
let b =20;
console.log( "addition is" +""+ addition());


//2. normal function

function hello()
{
    let c = "hello i am function without parameter";
    return c;
}
console.log(hello());




//3.Arrow function

const substraction =( a, b) =>{

     let c=a-b;
     return c;
}
console.log("substractionis "+" "+substraction(50,12));
