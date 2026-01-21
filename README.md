<h1>JavaScript var, let, const – Script Explanation</h1>

<h2>Introduction</h2>
<p>
Yeh README file <b>script.js</b> mein likhe JavaScript code ko explain karti hai.
Ismein <b>var</b>, <b>let</b>, <b>const</b>, <b>scope</b>, <b>hoisting</b> aur
<b>Temporal Dead Zone (TDZ)</b> ko practical example ke through samjhaya gaya hai.
</p>

<hr>

<h2>Variable Naming</h2>
<ul>
  <li>Variable name letter, underscore (_) ya dollar ($) se start ho sakta hai</li>
  <li>Number se start nahi ho sakta</li>
  <li>Direct value assign karna (without keyword) avoid karna chahiye</li>
</ul>

<p>
<b>Note:</b> Without keyword variable likhne se woh global ban jaata hai, jo bad practice hai.
</p>

<hr>

<h2>var Keyword</h2>
<ul>
  <li>var function scoped hota hai</li>
  <li>var window (global object) mein add ho jaata hai</li>
  <li>var ko redeclare aur reassign dono kar sakte hain</li>
</ul>

<p>
Script mein dekha ja sakta hai ke ek hi variable ko multiple times
declare aur reassign kiya gaya hai.
</p>

<hr>

<h2>let Keyword</h2>
<ul>
  <li>let block scoped hota hai</li>
  <li>let ko redeclare nahi kar sakte</li>
  <li>let ko reassign kar sakte hain</li>
</ul>

<p>
Script mein block ke andar aur bahar same naam ka variable use karke
block scope ka difference dikhaya gaya hai.
</p>

<hr>

<h2>const Keyword</h2>
<ul>
  <li>const block scoped hota hai</li>
  <li>const ko redeclare aur reassign nahi kar sakte</li>
  <li>const ko declaration ke time hi value deni hoti hai</li>
</ul>

<hr>

<h2>Declaration & Initialization</h2>
<ul>
  <li><b>Declaration:</b> Variable banana</li>
  <li><b>Initialization:</b> Variable ko value assign karna</li>
</ul>

<p>
Script mein pehle variable declare kiya gaya hai aur baad mein
uski value change ki gayi hai.
</p>

<hr>

<h2>Scope in JavaScript</h2>

<h3>Global Scope</h3>
<p>
Jo variable function ya block ke bahar declare hota hai,
woh global scope ka hota hai.
</p>

<h3>Block Scope</h3>
<p>
<code>{ }</code> ke andar declare kiya gaya <b>let</b> sirf block tak hi accessible hota hai.
</p>

<h3>Function Scope</h3>
<p>
Function ke andar declare kiya gaya variable sirf usi function tak limited hota hai.
</p>

<hr>

<h2>var vs let Scope Difference</h2>
<ul>
  <li>let block scope follow karta hai</li>
  <li>var block scope follow nahi karta</li>
  <li>var function scope mein kaam karta hai</li>
</ul>

<hr>

<h2>Temporal Dead Zone (TDZ)</h2>
<ul>
  <li>TDZ sirf let aur const ke saath hota hai</li>
  <li>Declaration se pehle access karne par error aata hai</li>
  <li>var ke saath TDZ nahi hota</li>
</ul>

<p>
Script mein example diya gaya hai ke var ko pehle access karne par
error nahi aata.
</p>

<hr>

<h2>Hoisting</h2>
<p>
Hoisting ka matlab hai JavaScript execution se pehle variable declaration ko upar le jaana.
</p>

<ul>
  <li>var → hoist hota hai aur value undefined hoti hai</li>
  <li>let → hoist hota hai lekin access karne par error aata hai</li>
  <li>const → hoist hota hai lekin access karne par error aata hai</li>
</ul>

<hr>

<h2>Hoisting Impact Summary</h2>
<table border="1" cellpadding="8">
  <tr>
    <th>Keyword</th>
    <th>Hoisting Result</th>
  </tr>
  <tr>
    <td>var</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>let</td>
    <td>Error (TDZ)</td>
  </tr>
  <tr>
    <td>const</td>
    <td>Error (TDZ)</td>
  </tr>
</table>

<hr>

<h2>Conclusion</h2>
<p>
Is script ke through yeh clear hota hai ke:
</p>
<ul>
  <li>var avoid karna chahiye</li>
  <li>let aur const safer options hain</li>
  <li>Scope aur hoisting samajhna bahut zaroori hai</li>
</ul>

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

<div>
<h3>Example 5:</h3>
<p>const person {name: "demo"}; </p>
on console.log
<p>person.name= "user"; </p>
<p>person = {}; X </p>
<p>Error: </p>
<p>Why:enter the object than change the value and without the add object otherwise not change the value </p>
</div>

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

