//<--------------------------function------------------->
// what --> specific task. function is a block of code that performs aand reusable. // why --> to avoid code repetition and to make code modular
// how --> function keyword, name, parameters, body, returnstatement I
// type of functions:
// function name (params) {} -> function declaration
// function abc(){}
// let fnc = function (){} --> function expression
// let fnc = function() {}
// let fnc = () => {} --> arrow function -- fat arrow function
// let fnc1 = () => {}


// function temp_cart(){
// console.log("adding producat");
// }
// temp_cart("laptop");
// temp_cart("watch");
// temp_cart("mobile");
// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args
// function call karti () ni andar lakheli (pass) karelivalues)
// function cart (producat) // product --params
// {
// console.log(`Adding ${producat}`)
// }
// cart("Laptop"); // laptop --args
// cart("Mac Book");
// cart("S25 ultra");


// function cart3(student,marks)
// {
//     console.log(`marks ${marks} name ${student}`)
// }
// cart3("mansi",25);
// cart3("jinal",20);
// cart3("nidhi",22);

///convert into arrow function
//let fnc =() =>{}

//  let cart4 = (student,marks) =>
// {
//     console.log(`arrow fuction marks ${marks} name ${student}`);
// };
// cart4("nidhi",22);


///convert into  function expression
let cart4 = function (student, marks) {
    console.log(` fuction expression marks ${marks} name ${student}`);
};
cart4("nidhi", 22);
//default ,rest psarameters in fuction 
// Default
function abcd(b = 10, price = 0) {
    console.log(price, b)
}
abcd(15);
// use case --fees / flipkart --platform fee

//rest
// Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo funtion na parameter ni anadar lakhvama aave chhe)
function def(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7,);


function def1(a, b, ...pagals)// ...number -- resert params
{
    console.log(a, b, pagals);
}
def1("jinal", "riddhi", "baghado", "bhutado");


//early return --> fuction mathi jaldi bhahar nikalava mate 
function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
    else return "Value is less than 60";
}
let result = score1(80);
console.log(result);


//first class function and their types :
//function can be treated as variables
//let temp_a = fuction(){} --first class fuction
const cart5 = function (producat, price) {
    console.log(`Adding ${producat} at ${price}`);
};
cart5("function expression -S25 ultra", 69000);

// function can be passed as arguments to other functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});

// function can be returned from other functions
function abcd() {
    return function () {
        console.log("function return other function")
    };
}
// abcd();
abcd()(); // call a function that retrun other function


// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)
// function abcd (val) {val();} --> abcd (function(){console.log ("hello")})

// function abcd(val){} --> higher order function
function hello(riddhi) {
    riddhi();
}
hello(function r() {
    console.log("hello riddhi");
});

// function abcd() { return function(){} } abcd()() higherorder
// function abcd() {
//     return function() {
//         console.log("Higher Order Function example");
//     };
// }
// abcd()();

//<----------------------------------------------pure vs impure fuction------------------------------------>
//pure fuctioon  --> fuction je same input par same output aapse ane koi bahar na state ne modify na kare (pure fuction --> je fuction baahar na state ne modify na kare)
let a = 10;
function abcd_pure() {
    console.log("hello");

}
//impure fuction --> fuction jesame input par different output aapse athva bahar na state ne modify kare(impure fuction --> je fuction bahar na state ne modify kare)
function abcd_impure() {
    a++;
    console.log(a);
}
//closure fuction
//fuction je potana fuction na variablees ne access kari skake 9return thava valo fuction use karshe parent fuctuon na koi variable)(fuction wiithin fuction)
function outer() {
    let count = 0;
    function inner() {
        count++//accessing oure fuction variable
        console.log(count);
    }
    return inner;
}
let fnc = outer();
fnc();

//<----------------------------lexical scope -----------------------> nested fuction can access variables declared in their outer scope

function outer1() {
    let outer_var = "outer fuction variable";
    function inner1() {
        let inner1_var = " inner1 fuctuin variable";
        console.log(outer_var);
        function most_inner() {
            console.log(inner1_var);
            console.log(outer_var);
            let most_inner_var = "most inner fuction variable";
            function abc() {
                console.log(most_inner_var);
                console.log(inner1_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();

}
outer1();

//IIFE --immediately invoked fuction  expression
(function () { })();

(function () {
    console.log("this is iife fuction")

}())

//<-----------------------------hoisting in fuction--------------------------------------------->
abcde();

function abcde() {
    console.log("this  is hoisting fuction");
}

// hoistedfuction1();
// let hoistedfuction1 =function() 

// {
//     console.log("hoisted fuction expression called");
// }


// hoistedfuction2();
// let hoistedfuction2 =() =>
// {
//     console.log("hoisted arrow fuction called");
// }


//example2
// greet();
// function greet(){ console.log("Hello!"); }

// Example 3:
// Convert normal function to Arrow Function

let add = (a, b) => {
    console.log(a, b);
}
add(5, 23);

// Example 4:
// Identify what is parms and what is args

function welcome(name) { console.log("Welcome " + name); }
welcome("user");

// Example 6:
// Predict the output

function temp_user(name = "Guest") { console.log("Hello " + name); }
temp_user();

// Example 7:
// what is ... operator and why use it in function
function number(...numbers) {
    console.log(numbers);
}
number(1, 2, 3, 4, 5)

// example8
function calculateTotal(...scores) 
{ 
    let total = 0; 
    for (let i = 0; i <= scores.length; i++) 
        { 
            total += scores[i]; 
        } 
        return total;
}

function calculateTotal(...scores) 
{ 
    let total = 0;
     scores.forEach(function (val) 
    { 
        total = total + val; 
    }); 
    return total; 
}

calculateTotal(10, 20, 30, 40, 50)

let sumtotal = calculateTotal(10, 20, 30, 40, 50)

// Example 9:
// Fix the function using early return

checkAge();
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}

// Example 10:
// What is the return value of above function

function f(){ 
 return;}