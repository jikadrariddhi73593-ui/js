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
<p>Answer or Error: </p>
<p>Why: </p>
</div>