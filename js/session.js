var x = 100;

console.log(x)

x %= 3;
// x = x / 5
// 100 = 100 + 5
console.log(x)


/**** Assignment operators ****** */

/*
>>>>

=
+=
-=
*=
/=
%=

*/





/**** Logical operators ****** */
/*
>>>>>>

! Not



*/

console.log(!true)

if (5 > 4 && 20 > 60) {
    console.log("YES")
}
else {
    console.log("NO")
}


if (5 > 4 || 8 > 20) {
    console.log("YES")
}
else {
    console.log("NO")
}

console.log(20 > 60 && 8 > 8); // false
console.log(20 > 6 && 88 > 8); // true
console.log(20 > 6 || 7 > 8); // true
console.log(20 > 76 || 7 > 8); // false

// Role : AND operator return last true and first false


console.log(5 && 8 && "Ali") // Ali => Last true


console.log(5 && 0 && "Ali") // 0 => first false

// Role :  OR operator return first true and last false

console.log(5 || 3) // 5 => First true

console.log(0 || 3) // 3  => First true

console.log(0 || false) // 3  => Last false


console.log(5 && undefined) // undefined

console.log(5 && undefined && "") // undefined

/******************************************* switch *******************************************/

var t = "10";


switch (t) {
    case 1:
        console.log("I am one");
        break;
    case 2:
        console.log("I am two");
        break;
    default:
        console.log("NOT 1 OR 2")
}


var userInput = +prompt("Please enter day number");


function tellDayName(num) {
    switch (num) {
        case 1:
            console.log("It is Saturday")
            break;
        case 2:
            console.log("It is Sunday")
            break;
        case 3:
            console.log("It is Monday")
            break;


        default:
            console.log("Invalid day")
            break;
    }
}



tellDayName(userInput)
