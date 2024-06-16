// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
//const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
/*const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);8*/


  //================================if all numbers are divisible by 5 ===========================
  
 if ((n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0) ) {
    console.log(true);
 }

 const isdivByFiv = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0) == true;

//=========================if n1 > n4========================================================

if (n1 > n4) {
    console.log("yes");
}else {
    console.log("nope");
}
//const resSult = (n1 > n4) = yes;
//=========================arithmetic chain=======================================

let resulti = (((n1 - n2) *(n3)) % n4 );
console.log(resulti);
//resulti = -0
//==============Change is Over 25================================================

const isLess24 =  n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isLess24);

//=============================Part 2=========================================
//Option1 =====================

let distance = 1500;
let speedA = 55;
let speedB = 60;
let speedC = 75;
let verdict = " ";

//At 55 m/h

let opA = ((1500 / 30) * 3);//50 gallons * 3  = $150
console.log(opA + " " + "dollars needed for fuel at speed 55m/hr");
let tottrpHrA = distance/speedA;
console.log('total hrs at speed 55 is' + " " + tottrpHrA +'hrs'); //27.27 hrs


//At 60 m/h
let opB = ((1500 / 28) * 3) //53.71 gallons needed for total trip * 3 = $160.71
console.log(opB + " " + 'dollars needed for fuel at speed 60m/hr');
let tottrpHrsB = distance/speedB;
console.log('total hrs at speed 60 is' + " " + tottrpHrsB + 'hrs'); //25 hrs

//At 75 m/h
let opC = ((1500 / 23) * 3) // 65.21 gallons needed * 3 =$195.65
console.log(opC + " " + 'dollars needed for fuel at speed 75m/hr');
let tottrpHrsC = (distance/speedC);
console.log('total hrs at speed 75 is' + " " + tottrpHrsC +'hrs'); //20hrs

verdict = "To save time and still stay within budget, option 'B' at 60 m/hr and fuel for $160.71 would be best option. "
console.log(verdict);


