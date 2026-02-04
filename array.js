//array -- hold multiple valueas at same time 
//[1,2,3,4,5]
//["hello","a","b,"c"]
//[2,"bye","hello",50]

//create
//define a variable =[multiple values]
let arr =[1,2,3,4];

//access
//position=[0 1 2 3]
//access
//array_name[position]
//arr[3],arr[2],aar[10]

//modify
//array_namme[position]=new value
//arr[0]=10

//array method : 
//(variable_name.method_name)
//push.pop,shift,unshift,splice,slice,reverse,sort
//push -->enter new values into array -- place it into last
arr.push(5);
//variable \\ function.method --> koi variable ke fuction in pachhal dot(.) kari ne lakho to te method kevai
//use case -- enter new producats into existing producats list

let shhose_product = ["Skechers","Puma","Adidas"]
shhose_product.push("Nike")

//pop --> remove last value into array
shhose_product.pop()
//use case -- remove last product you add into your list

//shift --remove first value into array
shhose_product.shift()

//unshift -- add value into array --fisrt
 shhose_product.unshift("Asics")

//use case -- add a values into top of that date you receive

// (kyathi kya ,kya sudhi)
//splice -- remove value into array --specific position and specific number of values
// into () --first index(position),how value you want to remove
let e =[50,60,30,40,10];
e.splice(3,2);
//use case --select asg and remove multiple msg at on click

//slice -- copy values from array -- spacific position and specific number of values
//new variable - array_name.slice(start index,end index)
//start index-- include into copy
//end index -- not include into copy
let f=[100,50,25,0]
let new_f =f.slice(1,3);

//use case --copy specific date and save it into new variable
//generate a report based on and generate a file or save the file into local machine

let totle_product = ["Skechers","Puma","Adidas"]
let totle=totle_product.slice(0,2)

//splice vs slice
//splice -- remove value into main array or modify new array
//slice -- copy value from main array and create a new array that hold the value that you can into 

//reverse --reverse value of array
let g=[25,30,35,40,85];
g.reverse();
//use case -- showe latest update first into your fronted

//sort --set into ascending order
let h=[50,20,80,10,40];
h.sort();

let b=[11,62,3,4,25];
let sr = b.sort(function(a,b)
{
return a-b;
})

let i=[11,62,3,4,25];
let sr1 = i.sort(function(v,m)
{
return v-m;
})

let arr2=[11,22,33,30]
let sort_var =arr2.sort((a,b)=>a-b)
let arr3=['b','h','e','s',]

//for each loop
//for each --array ni dared value mate loop chalse
let i9=["mansi","riddhi","jinal","nidhi"]
i9.forEach(val=>
{
    let new_val="my name is "+val;
    console.log(new_val)

});
//.map()method:
//map tyare j use karvu ke jyare ek new array create karvo chhe
//first map create a black array --only for undestanding
let data=[10,20,30,45]
//same link a for each loop but map return a new array
let temp_data = data.map(val =>
{
    if (val>20)
    {
        return val ;
    }
});
//use case --data mathi specific data new array ma store karvo hoy
//ex. product ma thi specific category na product new array ma store karva hoy 
//if you want to show only electrinics producat on your homepage
//.length, .toUppercase

// 1. Double daily steps count
// Real life: Fitness app doubling step goal
const steps = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
console.log(newSteps);

// 2. Convert minutes to seconds
// Real life: Video duration calculation
const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds);

// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
const prices1 = [200, 350, 500];
const finalPrices = prices1.map(price => price + 50);
console.log(finalPrices)

// 4. Convert exam marks to grades
// Real life: Result system
const marks = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
console.log(grades)

// 5. Capitalize names
// Real life: Display usernames properly
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames)

// 6. Apply 10% discount
// Real life: Shopping sale
const prices = [500, 1000, 1500];
function applyDiscount(price) {
  return price - price * 0.10;
}
const discounted = prices.map(applyDiscount);
console.log(discounted)

// 7. Add bonus points to scores based on condition
// Real life: Game scoring system
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores)

// 8. Convert temperatures with formula
// Real life: Weather app
const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit)

// 9. Generate table of numbers
// Real life: Math learning app
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo)



// 10. Combine map with string formatting
// Real life: SMS notification system
const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages)

//filter
//filter tyare use karvu ke jayre   ek new array create karvo che with condition
//if return true/false
//if true--> add into new array
//if else(false) -->not add into new array
let leptops_price=[15000,20000,30000,65000,99000,45000];

let expensive_laptops = leptops_price.filter((price)=>
{
    if (price>30000) return true;
});

//je value 30000 thi vadhare chee te new array ma add thase and biji value ne array ma add nahi kare 
//use case --date ma thi specific data new array ma store hoy based on condition



// ### 1. Get even numbers
// **Real life:** Find even roll numbers
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);


// ### 2. Filter adults
// **Real life:** Allow only 3+ users
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);


// ### 3. Remove empty items
// **Real life:** Clean user input
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');

// ### 4. Filter passing marks
// **Real life:** Exam result system
const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(mark => mark >= 40);

// ### 5. Get affordable prices
// **Real life:** Shopping app price filter
const prices5 = [199, 499, 999, 1499, 299];
const affordable = prices5.filter(price => price <= 500);


// ### 6. Filter long words
// **Real life:** Search keyword validation
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);

// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);

// ### 8. Filter numbers within a range
// **Real life:** Score selection
const scores9 = [45, 60, 85, 30, 90];
const selectedScores = scores9.filter(score => score >= 50 && score <= 90);

 

let shhose_brand = ["Skechers","Puma","Adidas","Nike"]
let shhose_brand_type=shhose_brand.filter((type) =>
{
    if (type ==="Puma" || type ==="Nike")
        return true;
});


// reduce
//reduce tyare j use karvu ke jyare ek single values cvalculate kaevi hoy from array
let totle_price=[15,68,45,58,52,48];
let final_price =totle_price.reduce((a5,val)=>
{
    return a5+val;
},0);//intial valie of a5
//0+10 =>10
//10+10 =>20
//20+10 =>30
//30+10 =>40
//a5 --> je value fuction ma retun thase te a5 ma store thase --> a5 name change kari sako chop
//val -->array ni darek value
//use case -- dte ma thi ek single value calulate karvi hoy 
//ex. product ma thi total price calculate karvi

// ### 1. Total money in wallet
// **Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);


// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker

const steps9 = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps9.reduce(addSteps, 0);


// ### 3. Find total cart price
// **Real life:** Shopping bill

const prices9 = [499, 299, 199];
const totalPrice = prices9.reduce((total, price) => total + price, 0);


// ### 4. Find maximum score
// **Real life:** Highest exam mark

const marks9 = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks9[0]);


// ### 5. Count total characters
// **Real life:** Text length calculation

const words9 = ['Hi', 'Hello', 'JS'];
const totalChars = words9.reduce((count, word) => count + word.length, 0);


// ### 6. Combine words into a sentence
// **Real life:** Message builder

const words8 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words8.reduce((text, word) => text + ' ' + word);


// ### 7. Count passed students
// **Real life:** Result summary

const marks6 = [35, 72, 88, 40, 25];
const passCount = marks6.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);

// ### 8. Calculate final balance
// **Real life:** Bank account calculation

const transactions8 = [1000, -200, -300, 500];
const finalBalance = transactions8.reduce((balance, amount) => balance + amount, 0);


// ### 10. Build comma-separated string
// **Real life:** Display values in UI

const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);




// ### Q1. Shopping App – Discounted Total
// You are given a list of item prices.
// **Tasks:**
// 1. Keep only items costing more than 500
// 2. Apply a 10% discount to those items
// 3. Find the total amount to pay
const prices12 = [200, 800, 1200, 450, 700];

// Ans: 
const total = prices12
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);


// ### Q2. Fitness App – Total Active Minutes
// You are given daily activity minutes.
// **Tasks:**
// 1. Keep only days with more than 30 minutes activity
// 2. Convert minutes to calories (1 min = 5 calories)
// 3. Calculate total calories burned
const minutes10 = [20, 45, 60, 15, 90];

// Ans:
const totalCalories = minutes10
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);


// ### Q3. Exam System – Average of Passed Marks
// You are given marks of students.
// **Tasks:**
// 1. Keep only passing marks (>= 40)
// 2. Calculate the average of passed marks
const marks10 = [35, 72, 88, 40, 25, 90];

// Ans:
const passed = marks10.filter(mark => mark >= 40);
const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;


// ### Q4. Salary System – Monthly Payout
// You are given daily wages.
// **Tasks:**
// 1. Keep wages greater than 500
// 2. Add a bonus of 100 to each
// 3. Calculate total payout
const wages = [300, 800, 450, 1000, 600];

// Ans:
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);


// ### Q5. Online Course – Completion Points
// You are given lesson completion percentages.
// **Tasks:**
// 1. Keep only completed lessons (>= 50%)
// 2. Convert percentage into points (percentage × 2)
// 3. Calculate total points
const progress = [20, 50, 75, 40, 100];

// Ans:
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);


// ### Q6. Bank Transactions – Final Balance
// You are given a list of transactions.
// **Tasks:**
// 1. Keep only credit transactions (positive values)
// 2. Add 2% interest to each credit
// 3. Calculate final credited amount
const transactions10 = [1000, -500, 2000, -300, 1500];

// Ans: 
const creditedAmount = transactions10
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);


// ### Q7. Game App – Final Score
// You are given scores from multiple rounds.
// **Tasks:**
// 1. Keep scores greater than 50
// 2. Add bonus points (+10)
// 3. Calculate final score
const scores10 = [30, 60, 90, 45, 80];

// Ans: 
const finalScore = scores10
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);


// ### Q8. E-commerce – Total Taxed Amount
// You are given item prices.
// **Tasks:**
// 1. Keep items priced above 1000
// 2. Add 18% tax
// 3. Calculate final payable amount
const prices4 = [500, 1200, 3000, 800, 1500];

// Ans: 
const finalAmount = prices4
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);


// ### Q9. Attendance System – Reward Points
// You are given daily attendance hours.
// **Tasks:**
// 1. Keep days with attendance >= 8 hours
// 2. Convert hours into points (1 hour = 10 points)
// 3. Find total points earned
const hours = [6, 8, 9, 7, 10];

// Ans:
const totalPoints10 = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);


// ### Q10. Interview Brain Teaser ⭐
// You are given a list of numbers.
// **Tasks:**
// 1. Keep only even numbers
// 2. Square each number
// 3. Find the sum of squares
const numbers10 = [1, 2, 3, 4, 5, 6];

// Ans:
const sumOfSquares = numbers10
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
