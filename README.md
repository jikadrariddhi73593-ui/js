<h1>JavaScript Variable Concepts</h1>

<h2>Variable Declaration</h2>
<p>
JavaScript mein variables different tarike se declare kiye ja sakte hain.
Variable ka naam letters, underscore (_) ya dollar ($) se start ho sakta hai.
Keyword ke bina variable banana recommended nahi hota.
</p>

<h2>Using var</h2>
<p>
var function scoped hota hai.  
Isko redeclare aur reassign kiya ja sakta hai.
</p>

<pre><code>
var a ="temp";
var_123="hellow";
var $123="hello";
b=24;
</code></pre>

<h2>Using let</h2>
<p>
let block scoped hota hai aur redeclare nahi ho sakta.
</p>

<pre><code>
let temp =" abc";
</code></pre>

<h2>Declaration and Initialization</h2>
<p>
Declaration ka matlab variable banana aur initialization ka matlab
usko value assign karna hota hai.
</p>

<pre><code>
var d;
var d =12;
d = 24;
var d  ="hello"
temp_const="hello";
</code></pre>

<h2>Scope in JavaScript (let)</h2>
<p>
let global, block aur function scope follow karta hai.
</p>

<pre><code>
let f = 23;
{
    let f = 25;
    console.log("block scope" + f);
}
function abc() {
    let f = 30;
    console.log("fuctional scope " + f);
}
abc();
console.log(f)
</code></pre>

<h2>Scope in JavaScript (var)</h2>
<p>
var block scope follow nahi karta, lekin function scope follow karta hai.
</p>

<pre><code>
var s = 23;
{
    var s = 25;
    console.log("block scope" + s);
}
function abc() {
    var s = 30;
    console.log("fuctional scope " + s);
}
abc();
console.log(s)
</code></pre>

<h2>Temporal Dead Zone (TDZ)</h2>
<p>
var ke saath TDZ ka issue nahi hota.
</p>

<pre><code>
console.log(temp_b);
var temp_b=24;
</code></pre>

<h2>Hoisting</h2>
<p>
Hoisting mein variable declaration upar chali jaati hai
lekin initialization apni jagah par rehti hai.
</p>

<pre><code>
var temp_d =12;
let temp_d_let = 24;
</code></pre>

<h2>Conclusion</h2>
<p>
Is file ke through var, let aur scope ka difference clearly samajh aata hai.
Modern JavaScript mein let aur const use karna best practice hai.
</p>


<div>
<h3>Example 1:</h3>
<p>console.log(nm);</p>
<p>let nm = "name"; </p>
<p>Error</p>
<p>Why: beacuse we print console before inilization & use let keyword for declare variable. </p>
</div>
<br>
<div>
<h3>Example 2:</h3>
<p>console.log(b);</p>
<p>var b = "username"; </p>
<p>Answer</p>
<p>Why: beacuse we print console before inilization & use var keyword for declare variable. </p>
</div>
<br>
<div>
<h3>Example 3:</h3>
<p>var x = 1 </p>
<p>{
var x = 2
}
</p>
<p> log(x) ;</p>
<p>Answer</p>
<p>Why: beacuse  where we use var than in console print block scope.  </p>
</div>

<div>
<h3>Example 4:</h3>
<p>let a = 10; </p>
<p>{
let a 20;
console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer</p>
<p>Why:  in console first block scope after print global scope. </p>
</div>

<hr><hr>
<h1>JavaScript Data Types</h1>

<h2>Data Types</h2>
<p>JavaScript mein data types do types ke hote hain:</p>

<ul>
  <li>Primitive Data Types</li>
  <li>Non-Primitive (Reference) Data Types</li>
</ul>

<hr>

<h2>1. Primitive Data Types</h2>
<p>
Primitive data types mein <b>real value ka copy</b> hota hai.
</p>

<pre>
//copy --> real value

let a = 12;
a = a + 3;
let b = a; // a-->12
</pre>

<p>
Primitive data types ke types:
</p>

<ul>
  <li>string</li>
  <li>number</li>
  <li>boolean</li>
  <li>null</li>
  <li>undefined</li>
  <li>symbol</li>
  <li>bigint</li>
</ul>

<hr>

<h3>Number</h3>
<pre>
let e = 12;
e = 12.25;
</pre>

<hr>

<h3>String</h3>
<pre>
let g = "hello";
g = "hello";
</pre>

<hr>

<h3>Boolean</h3>
<pre>
let h = "true";
h = "false";
</pre>

<hr>

<h3>Null</h3>
<p>you give a value</p>
<pre>
let t = null;
</pre>

<hr>

<h3>Undefined</h3>
<p>you don't give a value, by default value</p>
<pre>
let i;
</pre>

<hr>

<h3>Symbol</h3>
<p>unique immutable value</p>

<pre>
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1===u2
</pre>

<pre>
let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "001";
</pre>

<hr>

<h3>BigInt</h3>
<p>check range of number Number.MAX_SAFE_INTEGER</p>

<pre>
let number = 9007199254740991;
number = number + 20;

let num2 = 900719925470991n;
num2 + 3n;
</pre>

<hr>

<h2>2. Non-Primitive Data Types (Reference Data Types)</h2>
<p>
Non-primitive data types mein <b>parent ka reference</b> milta hai.
</p>

<pre>
//copy --> give reference of parent

let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // remove 1 value
</pre>

<p>
Non-primitive data types:
</p>

<ul>
  <li>Array []</li>
  <li>Object {}</li>
  <li>Function ()</li>
</ul>

<hr>

<h2>String Quotes Types</h2>
<pre>
// '' - single quotes
// "" - double quotes
// `` - backticks

let d = "name";
d = 'username';
d = `firstname`;
</pre>

<hr>

<h2>Examples of Non-Primitive Types</h2>
<pre>
let temp_array = ["name", "age", "phone_number"];
let obj3 = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
function name(params) {}
</pre>
<hr>
<h2>Dynamic Typing</h2>
<p>
JavaScript ek <b>dynamically typed language</b> hai.
</p>
<h1>JavaScript Dynamic Typing & Typeof Quirks</h1>
<h2>Dynamic Typing</h2>
<p>
JavaScript ek <b>dynamically typed language</b> hai.
Iska matlab hai ek hi variable alag-alag data types hold kar sakta hai.
</p>
<pre>
// Dynamic Typing
let temp_d = "name";
temp_d = 123;
temp_d = {};
</pre>
<p>
Yahan same variable <b>string</b>, phir <b>number</b> aur phir <b>object</b> ban gaya.
</p>
<p>
<b>Note:</b> JavaScript dynamically typed hai, jabki <b>TypeScript</b> statically typed hoti hai.
</p>
<hr>
<h2>typeof Operator</h2>
<p>
JavaScript mein variable ka type check karne ke liye <b>typeof</b> operator use hota hai.
</p>
<pre>
// typeof quirks
typeof 12;
</pre>
<p>
Type check karne ke kuch examples:
</p>
<pre>
typeof NaN;
typeof null;
1 + "1";
1 == "1";
1 === "1";
</pre>
<hr>
<h2>Why typeof NaN is "number"</h2>
<p>
<b>NaN</b> ka matlab hota hai <b>Not a Number</b>,  
lekin iska type <b>number</b> hota hai.
</p>
<p>
Reason:
</p>
<ul>
  <li>NaN ek <b>failed number operation</b> ka result hota hai</li>
  <li>Isliye JavaScript ise number type treat karti hai</li>
</ul>
<pre>
// Example
"hello" - 5; // NaN
</pre>
<hr>
<h2>Type Coercion</h2>
<p>
Type coercion ka matlab hota hai JavaScript ka automatically
ek data type ko dusre mein convert kar dena.
</p>
<pre>
// type coercion examples
"5" + 1;
"5" - 1;
</pre>
<p>
Explanation:
</p>
<ul>
  <li><b>"5" + 1</b> → string concatenation hota hai</li>
  <li><b>"5" - 1</b> → string number mein convert ho jaati hai</li>
</ul>
<hr>
<h2>Conclusion</h2>
<ul>
  <li>JavaScript dynamically typed language hai</li>
  <li>typeof operator se variable ka type check hota hai</li>
  <li>NaN ka type number hota hai</li>
  <li>Type coercion automatic type conversion karta hai</li>
</ul>
<h1>JavaScript Operators</h1>
<hr>
<h2>1. Comparison Operators</h2>
<p>Comparison operators are used to compare two values.</p>
<ul>
    <li><b>==</b> : Compares only values (not data type)<br>
        <i>Example:</i> 12 == "12" → true
    </li>
    <li><b>===</b> : Compares both value and data type (strict comparison)<br>
        <i>Example:</i> 12 === "12" → false
    </li>
    <li><b>!=</b> : Checks if values are not equal<br>
        <i>Example:</i> 12 != 13 → true
    </li>
    <li><b>!==</b> : Checks value and type are not equal<br>
        <i>Example:</i> 12 !== "12" → true
    </li>
    <li><b>&gt;=</b> : Greater than or equal to<br>
        <i>Example:</i> 22 &gt;= 22 → true
    </li>
    <li><b>&lt;=</b> : Less than or equal to<br>
        <i>Example:</i> 13 &lt;= 13 → true
    </li>
    <li><b>&gt;</b> : Greater than<br>
        <i>Example:</i> 12 &gt; 9 → true
    </li>
    <li><b>&lt;</b> : Less than<br>
        <i>Example:</i> 12 &lt; 113 → true
    </li>
</ul>
<hr>
<h2>2. Assignment Operators</h2>
<p>Assignment operators are used to assign or update values in variables.</p>
<ul>
    <li><b>=</b> : Assigns a value<br>
        <i>Example:</i> let a = 12;
    </li>
    <li><b>+=</b> : Adds value to existing value<br>
        <i>Example:</i> a += 3;
    </li>
    <li><b>-=</b> : Subtracts value from existing value<br>
        <i>Example:</i> a -= 4;
    </li>
    <li><b>*=</b> : Multiplies the value<br>
        <i>Example:</i> a *= 2;
    </li>
    <li><b>/=</b> : Divides the value<br>
        <i>Example:</i> a /= 2;
    </li>
    <li><b>%=</b> : Stores remainder<br>
        <i>Example:</i> a %= 2;
    </li>
</ul>
<hr>
<h2>3. Logical Operators</h2>
<ul>
    <li><b>&& (AND)</b> : Both conditions must be true<br>
        <i>Example:</i> 12 &lt; 13 && 14 &lt; 15 → true
    </li>
    <li><b>|| (OR)</b> : At least one condition must be true<br>
        <i>Example:</i> false || true → true
    </li>
    <li><b>! (NOT)</b> : Reverses the result<br>
        <i>Example:</i> !true → false
    </li>
</ul>
<hr>
<h2>4. Unary Operators</h2>
<p>Unary operators work with a single operand.</p>
<ul>
    <li><b>+</b> : Converts string into number<br>
        <i>Example:</i> +"5" → 5
    </li>
    <li><b>-</b> : Converts value to negative<br>
        <i>Example:</i> -5
    </li>
    <li><b>!</b> : Converts value to boolean and reverses it<br>
        <i>Example:</i> !false → true
    </li>
    <li><b>typeof</b> : Returns the data type<br>
        <i>Example:</i> typeof "name" → string
    </li>
    <li><b>++</b> : Increment operator<br>
        <i>Post Increment:</i> a++<br>
        <i>Pre Increment:</i> ++a
    </li>
    <li><b>--</b> : Decrement operator<br>
        <i>Example:</i> a--
    </li>
</ul>
<h2>Ternary Operator</h2>
<p>The ternary operator is used for conditional checking.</p>
<p><b>Syntax:</b></p>
<p>
    condition ? true_statement : false_statement;
</p>
<p><b>Example:</b></p>
<p>
    12 &gt; 13 ? console.log("true") : console.log("false");
</p>
<p>
If the condition is true, the first statement will run.<br>
If the condition is false, the second statement will run.
</p>
<hr>
<h2>typeof Operator</h2>
<p>The <b>typeof</b> operator is used to check primitive data types.</p>
<ul>
    <li>typeof null → object</li>
    <li>typeof [] → object</li>
    <li>typeof NaN → number</li>
</ul>
<hr>
<h2>instanceof Operator</h2>
<p>The <b>instanceof</b> operator is used to check reference data types.</p>
<p><b>Example:</b></p>
<p>
    let a = [];<br>
    a instanceof Array → true
</p>
<hr>
<h2>Important Notes</h2>
<ul>
    <li>Use <b>typeof</b> for primitive data types</li>
    <li>Use <b>instanceof</b> for reference data types</li>
    <li>Do not use <b>typeof</b> for reference data types</li>
</ul>
<hr>
  <div>
      <h1>Example 1 :</h1>
      <p>let x = 10;</p>
      <p>let y = 20;</p>
      <p>
        if(x>5 && y > 5){ console.log("Both are greater than 5"); }else{
        console.log("One or both are not greater than 5"); }
      </p>
      <p><b>Answer:</b> Both are greater than 5</p>
  <p><b>Why:</b> Both conditions are true, so AND (&&) returns true.</p>
    </div>
    <div>
      <h1>Example 2 :</h1>
      <p>let isAdmin = true;</p>
      <p>let isLoggedIn = false;</p>
      <p>
        if(isAdmin || isLoggedIn){ console.log("Acess granted"); }else{
        console.log("Acess Denied"); }
      </p>
      </p>
      <p><b>Answer:</b> Access granted</p>
  <p><b>Why:</b> OR (||) operator returns true if any one condition is true.</p>
    </div>
    <div>
      <h1>Example 3 :</h1>
      <p>let temp = 35;</p>
      <p>
        if(!(temp > 30)){ console.log("Hot day"); }else{ console.log("Pleasant
        day"); }
      </p>
      </p>
      <p><b>Answer:</b> Pleasant day</p>
  <p><b>Why:</b> temp > 30 is true, NOT (!) makes it false, so else block runs.</p>
    </div>
    <div>
      <h1>Example 4 :</h1>
      <p>let a = 0;</p>
      <p>
        if(a){ console.log("Truthy value"); }else{ console.log("Falsy value"); }
      </p>
      </p>
       <p><b>Answer:</b> Falsy value</p>
  <p><b>Why:</b> 0 is a falsy value in JavaScript.</p>
    </div>
    <div>
      <h1>Example 5 :</h1>
      <p>let score = 78;</p>
      <p>
        let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" :
        "D";
      </p>
      <p>console.log("Grade:", grade);</p>
      </p>
      <p><b>Answer:</b> Grade: C</p>
  <p><b>Why:</b> Score is between 70 and 79, so grade C is assigned.</p>
    </div>
    <div>
      <h1>Example 6 :</h1>
      <p>let points = 120;</p>
      <p>
        let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" :
        "Bronze";
      </p>
      <p>console.log("Status:", status);</p>
      </p>
     <p><b>Answer:</b> Status: Gold</p>
  <p><b>Why:</b> points ≥ 100 is true, so first ternary condition executes.</p>
    </div>
    <div>
      <h1>Example 7:</h1>
      <p>let loggedIn = true;</p>
      <p>let hasToken = false;</p>
      <p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
      <p>console.log("access:", access);</p>
     <p><b>Answer:</b> access: Deny</p>
  <p><b>Why:</b> AND (&&) needs both true, but hasToken is false.</p>
    </div>
    <div>
      <h1>Example 8:</h1>
      <p>let a = 5;</p>
      <p>a++</p>
      <p>console.log(a);</p>
      </p>
      <p><b>Answer:</b> 6</p>
  <p><b>Why:</b> Post-increment increases value after execution.</p>
    </div>
    <div>
      <h1>Example 9:</h1>
      <p>let a = 8;</p>
      <p>++a</p>
      <p>console.log(a);</p>
      </p>
       <p><b>Answer:</b> 9</p>
  <p><b>Why:</b> Pre-increment increases value before execution.</p>
    </div>
    <div>
      <h1>Example 10:</h1>
      <p>let b = 4;</p>
      <p>let c = b++</p>
      <p>console.log(b, c);</p>
      </p>
      <p><b>Answer:</b> 5 4</p>
  <p><b>Why:</b> c gets old value (4), then b becomes 5.</p>
    </div>
    <div>
      <h1>Example 11:</h1>
      <p>let b = 4;</p>
      <p>let c = ++b</p>
      <p>console.log(b, c);</p>
      </p>
      <p><b>Answer:</b> 5 5</p>
  <p><b>Why:</b> b increments first, then value is assigned to c.</p>
    </div>
    <div>
      <h1>Example 12:</h1>
      <p>let m = 10;</p>
      <p>console.log(m--)</p>
      <p>console.log(m);</p>
      </p>
     <p><b>Answer:</b> 10 and 9</p>
  <p><b>Why:</b> m-- prints first, then decreases value.</p>
    </div>
    <div>
      <h1>Example 13:</h1>
      <p>let n = 5;</p>
      <p>let result = n++ + ++n;</p>
      <p>console.log(result);</p>
      </p>
     <p><b>Answer:</b> 12</p>
  <p><b>Why:</b> n++ gives 5, ++n gives 7 → total 12.</p>
    </div>
    <div>
      <h1>Example 14:</h1>
      <p>let likes = 100;</p>
      <p>function likePost(){ result ++likes; }</p>
      <p>console.log(likePost());</p>
      <p>console.log(likes);</p>
      </p>
      <p><b>Answer:</b> ERROR</p>
  <p><b>Why:</b> Invalid syntax: increment operator used incorrectly.</p>
    </div>
    <div>
      <h1>Example 15:</h1>
      <p>let count = 5;</p>
      <p>
        if(count-- === 5){ console.log("Matched"); }else{ console.log("Not
        Matched"); }
      </p>
      </p>
      <p><b>Answer:</b> Matched</p>
  <p><b>Why:</b> Comparison happens before post-decrement.</p>
    </div>
    # JavaScript Control Flow Statements
<hr>
<h2>If Statement</h2>
<p>The <strong>if</strong> statement executes a block of code if the condition is <em>true</em>.</p>
<pre>
<code>
if (1213) {
    console.log(true);
}
if (1513) {
    console.log(true);
}
// condition is false that why if statement not run
if (!12) {
    console.log("number");
}
</code>
</pre>
<hr>
<h2>If-Else Statement</h2>
<p>The <strong>if-else</strong> statement runs one block if the condition is true, otherwise another block.</p>
<pre>
<code>
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}
if (15 > 13) {
    console.log(true);
} 
// condition is false that why if statement not run
else {
    console.log(false);
}
if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
</code>
</pre>
<hr>
<h2>If - Else If - Else Statement</h2>
<p>Used when multiple conditions need to be checked.</p>
<pre>
<code>
let loggedin = true;
let admin = true;
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</code>
</pre>
<hr>
<h2>Switch Case Statement</h2>
<h3>Example 1</h3>
<pre>
<code>
switch ('A') { // value case sathe match karshe
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log("C");
        break;
    default:
        console.log("D");
        break;
}
</code>
</pre>
<h3>Example 2</h3>
<pre>
<code>
switch ('First50') { // value case sathe match karshe
    case 'First50':
        console.log("50% Off on First Order");
        break;
    case 'BOGO':
        console.log("Buy one get one");
        break;
    case 'BlackFriday':
        console.log("It's Black Friday Sale get at Rs. 50");
        break;
    default:
        console.log("Offer Not Valid");
        break;
}
</code>
</pre>
<hr>
<h2>Early Return Pattern</h2>
<p>Early return improves readability and avoids unnecessary else blocks.</p>
<h3>Example 1</h3>
<pre>
<code>
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } else if (value < 80) {
        return "Value is less than 80";
    } else if (value < 70) {
        return "Value is less than 70";
    } else if (value < 60) {
        return "Value is less than 60";
    } else {
        return "Value is less than 60";
    }
}
score(100);
</code>
</pre>
<h3>Example 2 (Short Syntax)</h3>
<pre>
<code>
function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
    else return "Value is less than 60";
}
</code>
</pre>
<h3>Example 3 </h3>
<pre>
<code>
function score2 (value) {
if (value < 60) return "Value is less than 60";
else if (value < 70) return "Value is less than 70";
else if (value < 80) return "Value is less than 80";
else if (value < 90) return "Value is less than 90";
else return "Value is more than 90";
}
</code>
</pre>
<hr>
<pre>
  <code>
    // function rps (user, computer) {
// if(user === "rock" && computer === "scissor") return "user wins";
// if(user === "scissor" && computer === "paper") return "user wins";
// if(user === "paper" && computer === "rock") return "user wins";
// if(user === "scissor" && computer === "rock") return "computer wins"
// if(user === "rock" && computer === "paper") return "computer wins"
// if(user === "paper" && computer === "scissor") return "computer wins"
// return "it's a tie"
// }
  </code>
</pre>

<pre>
  <code>
    function rps2(user, computer) {
if(user === computer) return "It's a tie!";
if(user === "rock" && computer === "scissor") return "user wins";
if(user === "scissor" && computer === "paper") return "user wins";
if(user === "paper" && computer === "rock") return "user wins";
return "computer wins";
}
  </code>
</pre>


# JavaScript Loops – README

<p>
This document explains JavaScript loops with simple examples.
All examples are written for beginners and show output in the browser console.
</p>

<hr>

<h2>🔁 What are Loops?</h2>
<p>
Loops are used to <b>repeat a block of code</b>.
Example: printing numbers like 1 2 3 4 5 6.
</p>

<hr>

<h2>🔹 For Loop</h2>
<p>
<b>Why use for loop?</b><br>
When you know <b>how many times</b> you want to repeat a block.
</p>

<p>
<b>Structure:</b><br>
start → end → change
</p>

<pre>
for (start; end; change) {
  // code
}
</pre>

<h3>Example: Print 1 to 10</h3>
<pre>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
</pre>

<h3>Example: Print 20 to 10 (reverse)</h3>
<pre>
for (let i = 20; i >= 10; i--) {
  console.log(i);
}
</pre>

<hr>

<h2>🔹 While Loop</h2>
<p>
Used when you <b>do not know exactly</b> how many times the loop will run.
</p>

<p>
<b>Structure:</b>
</p>

<pre>
start
while (condition) {
  // code
  change
}
</pre>

<h3>Example 1: Print 10 to 20</h3>
<pre>
let j = 10;
while (j <= 20) {
  console.log("j:", j);
  j++;
}
</pre>

<hr>

<h2>🔹 Do-While Loop</h2>
<p>
<b>Do-while loop runs at least one time</b>,
even if the condition is false.
</p>

<p>
<b>Structure:</b>
</p>

<pre>
  <code>
start
do {
  // code
  change
} while (condition);
</code>
</pre>

<h3>Example 2: Print 1 to 5</h3>
<pre>
   <code>
let p = 1;
do {
  console.log(p);
  p++;
} while (p <= 5);
</code>
</pre>

<hr>

<h2>📌 Practice Examples</h2>

<h3>Example 1: Print 10 to 20</h3>
<pre>
   <code>
let k = 10;
while (k <= 20) {
  console.log(k);
  k++;
}</code>
</pre>

<h3>Example 2: Print 6 to 2 (reverse)</h3>
<pre>
   <code>
let ao = 6;
while (ao > 1) {
  console.log(ao);
  ao--;
}</code>
</pre>

<h3>Example 3: Print "Hello" 5 times</h3>
<pre>
   <code>
let i = 1;
while (i <= 5) {
  console.log("Hello");
  i++;
}</code>
</pre>

<h3>Example 4: Print 20 to 25</h3>
<pre>
   <code>
let d = 20;
while (d >= 20 && d <= 25) {
  console.log(d);
  d++;
}</code>
</pre>

<h3>Example 5: Print 50 to 60</h3>
<pre>
   <code>
let q = 50;
while (q <= 60) {
  console.log(q);
  q++;
}</code>
</pre>

<hr>

<h2>🔹 Do-While More Examples</h2>

<h3>Example 6: Print 10 to 20</h3>
<pre>
   <code>
let g = 10;
do {
  console.log("do while:", g);
  g++;
} while (g <= 20);
</code>

</pre>

<h3>Example 7: Print 10 to 1</h3>
<pre>
  <code>
let h = 10;
do {
  console.log("do while:", h);
  h--;

} while (h >= 1);
</code>
</pre>


<hr>

<h1>JavaScript Break & Continue Statement</h1>

<p>
This README explains the use of <b>break</b> and <b>continue</b> statements in JavaScript
with simple <b>for loop</b> examples.
</p>

<hr>

<h2>Break Statement</h2>

<p>
<b>break</b> statement loop ko turant stop kar deta hai jab condition true hoti hai.
</p>

<h3>Example 1</h3>
<p>1 se 201 tak number print honge, lekin loop 32 par stop ho jayega.</p>

<pre>
for(let k = 1; k <= 201; k++) {
    console.log(k);
    if(k === 32) {
        break;
    }
}
</pre>

<h3>Example 2</h3>
<p>10 se 20 tak number print honge, lekin loop 15 par ruk jayega.</p>

<pre>
for(let k = 10; k <= 20; k++) {
    console.log(k);
    if(k === 15) {
        break;
    }
}
</pre>

<hr>

<h2>Continue Statement</h2>

<p>
<b>continue</b> statement loop ko stop nahi karta,
sirf current value ko skip karta hai.
</p>

<h3>Example 1</h3>
<p>1 se 10 tak number print honge, lekin 5 skip ho jayega.</p>

<pre>
for(let a = 1; a <= 10; a++) {
    if(a === 5) {
        continue;
    }
    console.log(a);
}
</pre>

<h3>Example 2</h3>
<p>100 se 110 tak number print honge, lekin 109 skip ho jayega.</p>

<pre>
for(let a = 100; a <= 110; a++) {
    if(a === 109) {
        continue;
    }
    console.log(a);
}
</pre>

<hr>



<ul>
    <li><b>break</b> → loop ko completely stop karta hai</li>
    <li><b>continue</b> → ek value skip karta hai, loop chalta rehta hai</li>
</ul>


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>

<pre><code>
for(let q = 1; q <= 10; q++) {
    console.log(q);
}
</code></pre>

<p><b>Why output aaya:</b> for loop 1 se start hota hai aur q++ hone se 10 tak numbers print hote hain.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>

<pre><code>
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
</code></pre>

<p><b>Why output aaya:</b> while loop condition true hone tak reverse order me print karta hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>

<pre><code>
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
</code></pre>

<p><b>Why output aaya:</b> i%2 === 0 hone par even numbers print hote hain.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<pre><code>
let i = 1;
while(i <= 15) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
</code></pre>
<p><b>Why output aaya:</b> odd number condition true hone par print hota hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<pre><code>
for(let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
</code></pre>
<p><b>Why output aaya:</b> template literal se table proper format me print hoti hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<pre><code>
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
</code></pre>
<p><b>Why output aaya:</b> har iteration me sum variable me value add hoti hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<pre><code>
for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}
</code></pre>
<p><b>Why output aaya:</b> sirf 3 se divisible numbers print hote hain.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<pre><code>
let num = prompt("give a number");
for(let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}
</code></pre>
<p><b>Why output aaya:</b> loop user ke number tak chalta hai aur even/odd check karta hai.</p>
<p><b>Error (before fix):</b> numl likhne se error aata tha kyunki variable exist nahi karta.</p>
</div>
<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<pre><code>
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
</code></pre>
<p><b>Why output aaya:</b> OR operator dono conditions check karta hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>(Break and Continue) Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<pre><code>
for(let i = 1; i <= 100; i++) {
    console.log(i);
    if(i % 7 === 0) {
        break;
    }
}
</code></pre>
<p><b>Why output aaya:</b> break pehla multiple of 7 milte hi loop stop karta hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>(Break and Continue) Example 11:</h1>
<p>Skip Multiples of 3</p>
<pre><code>
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        continue;
    }
    console.log(i);
}
</code></pre>
<p><b>Why output aaya:</b> continue multiples of 3 ko skip kar deta hai.</p>
<p><b>Error:</b> Koi error nahi hai.</p>
</div>
<div>
<h1>(Break and Continue) Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<pre><code>
let count = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 1) {
        count++;
        console.log(i);
    }
    if(count === 5) {
        break;
    }
}
</code></pre>
<p><b>Why output aaya:</b> 5 odd numbers count hote hi loop break ho jata hai.</p>
<p><b>Error (before fix):</b> extra text aur galat variable ki wajah se error aa raha tha.</p>
</div>
<h1>JavaScript Functions</h1>
<p>
Function JavaScript ka ek important concept hai jo specific task perform karta hai
aur code ko reusable banata hai.
</p>
<hr>
<h2>What is a Function?</h2>
<p>
<b>Function</b> ek block of code hota hai jo ek specific task perform karta hai
aur baar-baar use kiya ja sakta hai.
</p>
<h2>Why use Function?</h2>
<ul>
  <li>Code repetition avoid karne ke liye</li>
  <li>Code ko modular aur readable banane ke liye</li>
</ul>
<h2>How to create a Function?</h2>
<p>
Function banane ke liye following parts hote hain:
</p>
<ul>
  <li><b>function</b> keyword</li>
  <li>function name</li>
  <li>parameters</li>
  <li>function body</li>
  <li>return statement (optional)</li>
</ul>
<hr>
<h2>Types of Functions</h2>
<h3>1️⃣ Function Declaration</h3>
<pre><code>
function abc() {
}
</code></pre>
<p><b>Explanation:</b> Normal way se function define karna function declaration kehlata hai.</p>

<h3>2️⃣ Function Expression</h3>
<pre><code>
let fnc = function() {
}
</code></pre>
<p><b>Explanation:</b> Function ko variable me store karna function expression kehlata hai.</p>

<h3>3️⃣ Arrow Function (Fat Arrow Function)</h3>
<pre><code>
let fnc1 = () => {
}
</code></pre>
<p><b>Explanation:</b> Arrow function short aur modern syntax provide karta hai.</p>
<hr>
<h2>Simple Function Example</h2>
<pre><code>
function temp_cart() {
    console.log("adding product");
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");
</code></pre>
<p><b>Why output aaya:</b> Function call hone par console.log statement execute hoti hai.</p>
<p><b>Note:</b> Yaha arguments pass kiye gaye hain lekin function unhe use nahi kar raha.</p>
<hr>
<h2>Parameters vs Arguments</h2>
<ul>
  <li><b>Parameters:</b> Function definition ke andar jo values hoti hain</li>
  <li><b>Arguments:</b> Function call ke time jo actual values pass hoti hain</li>
</ul>
<h3>Example with Parameters and Arguments</h3>
<pre><code>
function cart(product) {
    console.log(`Adding ${product}`);
}
cart("Laptop");
cart("Mac Book");
cart("S25 ultra");
</code></pre>
<hr>
<h2>Multiple Parameters Example</h2>
<pre><code>
function cart3(student, marks) {
    console.log(`marks ${marks} name ${student}`);
}
cart3("mansi", 25);
cart3("jinal", 20);
cart3("nidhi", 22);
</code></pre>
<p>
This README explains advanced JavaScript function concepts such as
arrow functions, function expressions, default parameters, rest parameters,
early return, and first-class functions.
</p>
<hr>
<h2>Convert into Arrow Function</h2>
<pre><code>
let cart4 = (student, marks) => {
    console.log(`arrow function marks ${marks} name ${student}`);
};

cart4("nidhi", 22);
</code></pre>
<hr>
<h2>Convert into Function Expression</h2>
<pre><code>
let cart4 = function(student, marks) {
    console.log(`function expression marks ${marks} name ${student}`);
};
cart4("nidhi", 22);
</code></pre>
<hr>
<h2>Default Parameters</h2>
<pre><code>
function abcd(b = 10, price = 0) {
    console.log(price, b);
}
abcd(15);
</code></pre>
<hr>
<h2>Without Rest Parameters (Normal Way)</h2>
<pre><code>
function def(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g);
}
def(1, 2, 3, 4, 5, 6, 7);
</code></pre>
<hr>
<h2>Rest Parameters</h2>
<pre><code>
function def1(a, b, ...pagals) {
    console.log(a, b, pagals);
}

def1("jinal", "riddhi", "baghado", "bhutado");
</code></pre>

<hr>
<h2>Early Return in Function</h2>
<pre><code>
function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
    else return "Value is less than 60";
}
let result = score1(80);
console.log(result);
</code></pre>
<p><b>Concept:</b> Early return function ko fast aur readable banata hai.</p>

<hr>

<h2>First Class Functions</h2>

<p>JavaScript me function ko variable ki tarah treat kiya ja sakta hai.</p>

<h3>1️⃣ Function stored in Variable</h3>

<pre><code>
const cart5 = function(product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart5("function expression - S25 ultra", 69000);
</code></pre>
<hr>

<h3>2️⃣ Function Passed as Argument</h3>

<pre><code>
function temp_b(fnc) {
    fnc();
}

temp_b(function fnc2() {
    console.log("First Class Function");
});
</code></pre>
<hr>

<h3>3️⃣ Function Returned from Another Function</h3>

<pre><code>
function abcd() {
    return function () {
        console.log("function return other function");
    };
}
abcd()();
</code></pre>
<hr>
<h1>Higher Order Functions (HOF) in JavaScript</h1>

<p>
Higher Order Function (HOF) wo function hota hai jo
<b>kisi aur function ko argument ke roop me accept kare</b>
ya <b>kisi function ko return kare</b>.
</p>

<hr>

<h2>What is a Higher Order Function?</h2>

<p>
Agar koi function:
</p>
<ul>
  <li>ek function ko parameter ke roop me leta hai, ya</li>
  <li>ek function return karta hai</li>
</ul>
<p>
to use <b>Higher Order Function</b> kehte hain.
</p>

<hr>

<h2>Example 1: Function Passed as Argument</h2>

<pre><code>
function hello(riddhi) {
    riddhi();
}

hello(function r() {
    console.log("hello riddhi");
});
</code></pre>

<p><b>Why output aaya:</b> hello() function ke andar jo function argument ke roop me pass hua,
use riddhi() ke through call kiya gaya.</p>

<p><b>Concept:</b> hello() ek Higher Order Function hai kyunki ye ek function ko accept karta hai.</p>

<p><b>Error:</b> Koi error nahi hai.</p>

<hr>

<h2>Example 2: Function Returning Another Function</h2>

<pre><code>
function abcd() {
    return function() {
        console.log("Higher Order Function example");
    };
}

abcd()();
</code></pre>

<p><b>Why output aaya:</b> Pehla () outer function ko call karta hai
aur dusra () returned function ko call karta hai.</p>

<p><b>Concept:</b> abcd() Higher Order Function hai kyunki ye ek function return karta hai.</p>

<p><b>Error:</b> Koi error nahi hai.</p>

<hr>

<h2>Why use Higher Order Functions?</h2>

<ul>
  <li>Code ko reusable banane ke liye</li>
  <li>Clean aur readable code likhne ke liye</li>
  <li>Callbacks, map, filter, reduce jaise concepts ke liye</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
  <li>HOF function ko argument ke roop me accept karta hai</li>
  <li>Ya function ko return karta hai</li>
  <li>JavaScript me functions first-class citizens hote hain</li>
</ul>

