// loops --repeating code blocks
// 1 2 3 4 5 6
// for loop
// why use for loop? when you know how many times you want to repeat a block
// print 1 to 10 -> console.log(1); console.log(2); console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1> 50 -> increment by 1)
//(start; end; change)
// let i
// for (let i = 1; i <= 10 ; i++) {
// console.log(i);
// }
// for(let i= 20; i >=10; i--){
// }
// console.log(i)


// while loop --do while loop
// kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// while (ex. 1> Hello world -> stop when condition false)
// start
// while(end) {
// code
// change
// }

// example1
// let j = 10;
// while (j <= 20) {
// console.log("j:", j);
// j++;
// }

//do-while loop

// example2
// let p = 1;

// do {
//   console.log(p);
//   p++;
// } while (p <= 5);


// examples(sir)
// loop
// <---------------111--------------->

// let k = 10;
// while (k <= 20) {
//   console.log(k);
//   k++;
// }

// <-------------222222------------>

// let k = 10;
// while (k <= 20) {
//   console.log(k);
//   k++;
// }
// <-----------3333333333---------------->

// let ao = 6;
// while (ao > 1) {
//   console.log(ao);
//   ao--;
// }

// <--------------444444-------------->

// let i = 1;
// while (i <= 5) {
//   console.log("Hello");
//   i++;
// }

// <--------------5555-------------->

// let d = 20;
// while (d >= 20 && d <= 25) {
//   console.log(d);
//   d++;
// }
// <-----------------6666--------------------->

// let q = 50;
// while (q <= 60) {
//   console.log(q);
//   q++;
// }



//do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);
// let g = 10;
// do {
// console.log("do while ", g);
// g++;
// } while (g <= 20);
// let h = 10;
// do {
// console.log("do while:", h);
// h--;
// } while (h >= 1);



// <---------break--------->
// example1
// for(let k =1; k<=201; k++)
// {
//     console.log(k);
//     if(k === 32)
//     {
//         break;
//     }
// }


// example2
// for(let k =10; k<=20; k++)
// {
//     console.log(k);
//     if(k === 15)
//     {
//         break;
//     }
// }

//<---------------continue---------->
// example1
// for(let a=1; a<=10; a++)
// {
//     if( a=== 5)
//     {
//          continue;
//     }
//     console.log(a);
// }

// exampl2
// for(let a=100; a<=110; a++)
// {
//     if( a=== 109)
//     {
//          continue;
//     }
//     console.log(a);
// }



// Example 1:
// for(let q=1; q<=10; q++)
// {
//     console.log(q)
// }

// Example 2:
// let i = 10;  

// while (i >= 1) {
//   console.log(i);
//   i--;         
// }

// Example 3:

// for(let i=1; i<=20; i++){
//     if(i%2 ===0){
//     console.log(i);
//     }
// }

// example 4:

// let i = 1;
// while (i <= 15) {
//     if (i % 2 !== 0) 
//     {
//         (i % 2 === 1)
//         console.log(i);
//     }
//     i++;


// example5:

// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//example 6:
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);


// example 7:
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

//example 8
// let num = prompt("give a number");
// for(let i=1; i <=num; i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

//example 9 
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }

// example 10
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }

// example 11
// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);

// }

// example 12
// count = 0;
// for(let i =1; i<=100; i++)
//     {
//         if(i%2 ===1)
//         {
//             count++;
//             console.log(i)
//         }
//         console.log(i);
//         if(count ===5)
//         {
//             break;
//         }
//     }