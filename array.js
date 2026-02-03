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
