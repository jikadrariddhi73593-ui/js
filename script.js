
var a ="temp";
var_123="hellow";
var $123="hello";
b=24;//never use

// let
let temp =" abc";

// const

  // const temp_const =" hello world!!"

//declaration and initilization
var d;//declare
var d =12; //declare and initialize for first time 
// var add value into window
//var is function scoped
//var can be reduclared and reassigned
d = 24; //reassign
var d  ="hello"//redeclar
temp_const="hello";

//scop(globel ,block, fuctional)
// using let=globel
let f = 23;//globel scope
{
    let f = 25;//block scope
    console.log("block scope" + f);
}
function abc() {
    let f = 30; //functional scope
    console.log("fuctional scope " + f);
}
abc();
console.log(f)

// using var=block 
var s = 23;//globel scope
{
    var s = 25;//block scope
    console.log("block scope" + s);
}
function abc() {
    var s = 30; //functional scope
    console.log("fuctional scope " + s);
}
abc();
console.log(s)


//TDZ not working on var 
console.log(temp_b);
var temp_b=24; //on var there is no TDZ

//temporal dead zone (TDZ)
// console.log(j);
// let j =12;

//hosting imapact
// hoisting --> when yuor create a vaiable into js the break into two part first is decleare part thet go to up and there initialization part that go down
var temp_d =12;
//var temp_d = undefined; --> thet go to up 
// temp_d = 12; --> thet go to down (means stuck into line 66)
//if you use console.log before initilization thet give you undefined;
let temp_d_let = 24;
//let variable not use before initilization
//if you use console.log before initialization thet give you error;
//hosting impace on var,let,cont
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist -->error
*/
// ex=1
// console.log(nm);
// let nm = "name"; 

// ex 2
console.log(y);
var y = "username";

// ex 3
var x = 1 
{
    var x = 2
}
console.log(x) ;

// ex 4
let p = 10; 
{
let p =20;
console.log("Inside:", p);
}
console.log("Outside:", p);

// ex 5
const person = { name :"demo"}; 
 console.log
person.name= "user"; 
person = {}; 