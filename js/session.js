/************************* Array methods ****************************/
var arr1 = ["Mohamed", "Ahmed", "Ali", "Omar", "Mohamed", 5, 8, 87, 12],
    arr2 = ["Mahmoud", "Omar", "Shimaa"],
    arr3 = [5, 6];


/********************************************* concatenation ****************

console.log(arr1.concat(arr2 , arr3));

/*********************************************  copy ****************

arr1.copyWithin(2,0)

console.log(arr1);
/*********************************************  every ****************
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.every(checkAdult))

/*********************************************  some ****************

// returns true if at least one element satisfies the condition
var ages = [16, 4, 25];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.some(checkAdult))

/*********************************************   filter ****************
var ages = [32, 3, 16, 40, 5, 55];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.filter(checkAdult));
console.log(ages);

/*********************************************   find ****************
var ages = [2, 32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.find(checkAdult));

/*********************************************   find index ***************
var ages = [2, 2, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.findIndex(checkAdult));
/*********************************************   fill ***************

console.log(arr1.fill("JS", 2, 6));

/*********************************************   forEach ***************

arr1.forEach(myFunction);

function myFunction(item, index) {
    console.log(index + 1 + " => " + item);
}
/*********************************************************************************************** */
/*********************************************   array from **************

var myName = "Mohamed ";

console.log(Array.from(myName));


console.log(Array.from([1, 2, 3, 4, 5], function (x) { return x + x }))

console.log(Array.from([1, 2, 3, 4, 5], x => x + x));

/*********************************************   includes **************
console.log(arr1);
console.log(arr1.includes("Ahmed"));

/*********************************************   index of  **************
console.log(arr1);

console.log(arr1.indexOf("Mohamed"));

console.log(arr1.indexOf("uh")) //error

/*********************************************   last index of  **************
console.log(arr1);
console.log(arr1.lastIndexOf("Mohamed"))

/*********************************************   is array **************

console.log(Array.isArray(arr1))

/*********************************************   join **************
console.log(arr1.join(" * "));

console.log(typeof arr1.join(""));

/*********************************************   pop ************** x >> from main array *
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

/*********************************************   shift ************** from main array *
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
/*********************************************   push ************** X >>> *
console.log(arr1);
arr1.push("MO");
console.log(arr1);

/*********************************************   unshift **************
console.log(arr1);
arr1.unshift("MO2");
console.log(arr1);

/*********************************************   reverse **************
console.log(arr1);
console.log(arr1.reverse());

/*********************************************   sort **************

var x = ["Mohamed", "Ali", "aza", 12, "aac", "abb", 53, 37];
console.log(x.sort());

var y = [12, 5, 37, 20, 7]

console.log(y.sort())
console.log(y.sort((a, b) => a - b))


/*********************************************   slice **************
console.log(arr1);
console.log(arr1.slice(2, 4));
console.log(arr1);

/*********************************************   splice *************/
console.log(arr1);

console.log(arr1.splice(1, 0, 'Omar', 'Hassan')); 

console.log(arr1);

/*********************************************   to string **************

console.log(arr1.toString());
console.log(typeof arr1.toString());
*/



////////////////////////////////////////////////////////////////////
/*
1- contatenate two arrays and check if any item is num or not ( use every and typeof ) and output if greater then 3 .

2- create  a prompt to get tasks and push all in an array then output all at tour page .

3- create a  three prompt ages  and get it's values then check if any one is under age or not
EXAMPLE >>> [25 , 5 ,  12 , 25 , 55]
OUTPUT >>> you have all is not +18 (with every if return true) && you have just 5 and 12 is underage (with if condition)




4- create four prompt get text values then (display it in console ordered with sort ) [like >> 1-Mohamed]

5- create an array when you find (no) then convert all next elements in array to (thanks)
EXAMPLE >>> ["Mohamed" , 1 , "Hey" , "no" ,"Front" , "JS"] 
OUTPUT >>> ["Mohamed" , 1 , "Hey" , "no" ,"thanks" , "thanks"] 
hint : user loop , if and fill()
*/