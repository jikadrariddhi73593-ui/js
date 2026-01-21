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