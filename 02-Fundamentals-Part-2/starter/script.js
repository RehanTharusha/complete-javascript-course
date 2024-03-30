'use strict';

// function dumplings(meat, carrots, flour) {
//     const result = `You can make dumplings by having ${meat} meat, ${carrots} carrots
//     and by turning the flour into a ${flour}`
//     return result
// }

// const recipe = dumplings("piece of", "chopped", "dough")

// console.log(recipe);

// function cutFruitPieces(fruit) {
//     return fruit*4
// }

// function fruitJuice(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice will be made with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//     return juice
// }

// console.log(fruitJuice(5,10));

// const dolphinData =  44 + 23 + 71
// const koalasData =  65 + 54 + 49

// const calcAverage = average => average/3

// const averageDolphin = calcAverage(dolphinData)
// const averageKoalas = calcAverage(koalasData)

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins === 2 * avgKoalas && avgDolphins > avgKoalas) {
//        return console.log("dolph wins!");
//     } else if (avgKoalas === 2*avgDolphins) {
//        return console.log("koala wins!");
//     }else{
//       return console.log("no one  wins!");
//     }
// }

// checkWinner(averageDolphin, averageKoalas)

// const calcAverage = (a, b, c) => (a + b + c)/3

// // console.log(calcAverage(10, 10, 10));

// const dolphinData = calcAverage(44, 23 , 71)
// const koalasData =  calcAverage( 65, 54 , 49)

// // console.log(dolphinData);

// function checkWinner(avgDolphins, avgKoalas) {

//       // console.log(avgDolphins);

//        if (avgDolphins >= 2 * avgKoalas) {
//          return console.log("dolph wins!");
//        } else if (avgKoalas >= 2*avgDolphins) {
//          return console.log("koalas wins!");
//        }else{
//          return console.log("no one  wins!");
//        }
//    }

// console.log(checkWinner(dolphinData, koalasData));

// let bill = 275

// console.log(tip);
// console.log(`The bill was $${bill}, and the tip was $${tip} and the total value is $${bill + tip}`);

// const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue*15/100 : billValue*20/100

// // console.log(calcTip(100));

// const bills = [125, 555, 44]

// // console.log(bills);

// // const test = TestValue => console.log(`This is a ${TestValue}`)

// const tips = bills.map(billValue => calcTip(billValue))

// // const tips = billData.map(TestValue => test(TestValue))

// console.log(tips);

// const calcBMI = (mass, height) => mass / height ** 2

// const MarkMiller = {
//     name : "Mark Miller",
//     mass : 78,
//     height : 1.6,
//     calcBMI: function() {
//         return this.mass / (this.height ** 2)
//     },
//     result : function() {
//         return `${this.name}s BMI(${this.calcBMI()}) is higher than ${JohnSmith.name}s BMI(${JohnSmith.calcBMI()})`
//     }

// }

// const JohnSmith = {
//     name : "John Smith",
//     mass : 78,
//     height : 1.69,
//     calcBMI: function() {
//         return this.mass / (this.height ** 2)
//     },
//     result : function() {
//         return `${this.name}s BMI(${this.calcBMI()}) is higher than ${MarkMiller.name}s BMI(${MarkMiller.calcBMI()})`
//     }
// }

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }

// console.log(ages);

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = billValue =>
  billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;

for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));

  totals[i] = tips[i] + bill[i];
}

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

console.log(bill);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
