//  <----------------------------comparision opater----------------------------------->
// ex. 12 = 13, 12== "12" (don't check type, only check value, not strict comparison)
// ===

// ex. 12 === "12" (check type and value, strict comparaison)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !== 25
// ex. 121== "12" (reverse of ===) 26
// >= 27
// ex. 22 >= 22 28
// <= 29
// ex. 13 <= 13 30
// < 31


// ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13


//  <---------------------------assignment---------------------------->
// =
// give a value, value assignment operator
// let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
//ex. a = 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// ex. a/ 2;
// %=
// ex. a %= 2; (give remainder


// <----------------------------logical------------------------------>

// && (AND)
// ex. true && true --> true 12<13 && 14<15
// false && true --> false
// ture && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// Ifalse --> true
// 112> false --> 1112 true

// <------------------------------Unary Oprator--------------------------------->
// + -! typeof ++
// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
// ex. -5
//!
// ex. 112 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++--> 12 // post ex. a+++ a => 25
// ++a --> 13 // pre ex. a+++ a => 26
// ex. let a 3;
// a--
// a++

//<--------------------- Ternary----------------------------->
//?-----
// condition? true thase to print thase false thase to print thase
// 12>13 ? console.log("true"): console.log("false");


// <----------------------typeof null -----------------------> object
// typeof [] --> object, let a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use type of for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo


// ex 1
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}

// ex2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}
// ex3
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}

// ex4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}

// ex5
let score = 90;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

// ex6
let points = 50;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

//ex7
let loggedIn = true;
let hasToken = true;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

// Example 8:
let M = 5;
M++
console.log(M);

// Example 9:
let P = 8;
++P
console.log(P);

// Example 10:
let b = 4;
let c = b++
console.log(b, c);

// Example 11:
let b1 = 4;
let c1 = ++b1
console.log(b1, c1);

// Example 12:
let m = 10;
console.log(m--)
console.log(m);

// Example 13:
let n = 5;
let result = n++ + ++n;
console.log(result);

// Example 114:
let likes = 100;

function likePost()
{
    ( result + + likes) ;
}
console.log(likePost());
console.log(likes);

// Example 15:
let count = 5;
if(count-- === 59){ console.log("Matched"); }else{ console.log("Not Matched"); }

