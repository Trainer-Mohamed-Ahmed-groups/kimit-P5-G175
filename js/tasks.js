for (let num = 65; num <= 90; num++) {
    console.log(String.fromCharCode(num))
}

console.log("*****************")

for (let num = 97; num <= 122; num++) {
    console.log(String.fromCharCode(num))
}

console.log("".repeat(20))

for (let num = 65; num <= 122; num++) {
    if (num > 90 && num < 97) { continue; }
    console.log(String.fromCharCode(num))
}
