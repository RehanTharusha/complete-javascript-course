// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIJohn > BMIMark) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})`)
// }else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})`)
// }


// const money = 0

// if (money) {
//     console.log("Don't spend it all!");
// }else{
//     console.log("Get a job!");
// }

// // DolphinsTotal = 96 + 108 + 189
// DolphinsTotal = 96 + 108 + 189

// // KoalasTotal =  88 + 91 + 210
// KoalasTotal =  88 + 91 + 210


// scoreDolphins = DolphinsTotal/3
// scoreKoalas = KoalasTotal/3

// if (scoreKoalas === scoreDolphins && scoreDolphins >= 100) {
//     console.log("Both win");
// }else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win");
// }else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koala win");
// }


// // console.log(scoreDolphins);


let bill = 275

const tip = bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100 

console.log(tip);
console.log(`The bill was $${bill}, and the tip was $${tip} and the total value is $${bill + tip}`);