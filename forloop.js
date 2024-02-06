// for loop is used for iterations 

/*syntax:
 
for(initialization;condition;increment)
{
     execution block;
}

*/
//print 10 values
let num= 10;

for(i=0;i<num;i++)
{
    console.log(i);
}


/* 
syntax:
for-in loop is used for objects in javascript for key 
let obj=
{
    name:"Mayuri",
    age:23,
    id:45
}

for( let a in obj)
{
    console.log("datails of "+ a + obj.[a]);
}

*/


let Details =
{
     Name : "Mayuri",
     Age : "23",
     id: "12"

}

for(let a in Details)
{
    console.log("Details of"+ " " + a + Details.a);
}

/**
 * for -of- loop is used
 * for(let b of obj)
 * {
 *   console .log();
 * }
 */
for(let b of Details)
{
    console.log("Details of"+ ""+b+Details.b);
}