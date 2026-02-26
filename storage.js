//-----------------------localstorage--------------------

//localstoreadge API : setItem, getItem,removeItem, clear
//localStorage--> save that data into browser's storage ,after clode browsar data wasn't deleted
//(browser nu aevu storage ke jema data store thai brower close thay tyare data delete na thay)
//5 MB data store kari sakay

//setItem
//localStorage.setItem("key","value");
localStorage.setItem("user","Test_User");

//getItem
//localStorage.getItem("key_name");
console.log(localStorage.getItem("user"));

//removeItem
//localStorage.removeItem("key_name");
// localStorage.removeItem("user");

//updateItem
//localStorage.setItem("key_name","new_value");
localStorage.setItem("user","Demo_User");


//------------------------------------sessionStorage--------------------

//sessionStorage API : setItem, getItem,removeItem, clear
//sessionStorage--> save that data into browser's storage ,after clode browsar data was deleted
//(browser nu aevu storage ke jema data store thai brower close thay tyare data delete thai jay)
//5 MB data store kari sakay

//setItem
//sessionStorage.setItem("key","value");
sessionStorage.setItem("email","user@test.com");

//getItem
//sessionStorage.getItem("key_name");
console.log(sessionStorage.getItem("email"));

//removeItem
//sessionStorage.removeItem("key_name");
// sessionStorage.removeItem("email");

// updateItem
//sessionStorage.setItem("key_name","new_value");
sessionStorage.setItem("email","updated_user@test.com");


//-----------------------cookies--------------------

//cookie API : setItem, getItem,removeItem, clear
//cookie--> save that data into browser's storage ,after clode browsar data wasn't deleted
//(browser nu aevu storage ke jema data store thai brower close thay tyare data delete na thay)
//4 KB data store kari sakay

document.cookie="email=test@gmail.com";

//max age
document.cookie="age=10; max-age=60"; //60 seconds

//date and time
document.cookie="username=meet; expires=Wed, 28 Feb 2026 12:00:00 GMT"; 


//storing/retrieving strings vs json
//save as string into localStorage and sessionStorage -- try to save array and string

//JSON.stringify() --> convert js object/array into string

localStorage.setItem("data", JSON.stringify([{username:"test", email:"test@gmail.com", age:10}]));

//JSON.parse() --> convert string into js object/array

let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

//dark mode and light mode toggle using localStorage

let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btn.textContent = "Dark";
        localStorage.setItem("mode", "light");
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    } else {
        body.classList.add("dark");
        btn.textContent = "Light";
        localStorage.setItem("mode", "dark");
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    }
});
