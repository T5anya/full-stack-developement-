// 1 - print numbers from 1 to 10  loop from 1 to 10 and print each numbers .
// 2 - print only even numbers from 1 to 20 use loop and conditions to print even ones . 
// 3 - print numbers from 10 to 1 reverse loop with a decrement .
// 4 - print the word "yes" 5 times repeat using a loop
// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"
// 6.ask user for a number and say if its  positive or negative  use prompt() and a condition

 for(i = 1; i<=10; i++){
    console.log(i);
}



for(i = 1; i <= 20; i++){
   if(i %2 === 0){
       console.log(i);
    }
 }


 for(i = 10; i>0; i--){
   console.log(i);
}


 for(i = 1; i <=5 ; i++){
     console.log(`${i} yes`);
}


for(i = 1; i <= 10; i++){
  if(i%2 === 0 ){
        console.log(`${i} even`);
    }else{
       console.log(`${i} odd`);
    }
 }

 let
 num = prompt("no. de do ji ");
if(num === null ){
    console.log("bhai cancle mat kr no. dal ");
}else{
   num = num.trim();
    if(num === "" || isNaN(num)){
       console.error("plz bhai No. dal de");
     }else{
         if(num > 0){
            console.log(`${num} is positive no.`);
        }else{
          console.log( `${num} is negative no.`);
         }
     }
}


// Level 1 - Pure Beginner Practice

// 7. Ask user's age and check if eligible to vote
//    If age >= 18 → "Eligible", else → "Not eligible"

 let age = 29;
 age = prompt("what is your age")
 //me handle kr lunga i know kaise handle krna hau prompt ko 
 if(age >=18){
    console.log("eligible to vote");
 }else{
    console.log("Not eligible");
 }





// 8. Print multiplication table of 5
//    Use loop to print 5 x 1 to 5 x 10.

 for(i=1; i<= 10; i++){
     console.log(`5 x ${i} = ${5*i}`);
 }






// 9. Count how many numbers between 1 and 15 are greater than 8
//    Loop and count conditionally.

 let count = 0;
  for(i=1; i<=15; i++){
     if(i > 8){
         count = count + 1;
     }
 }
 console.log(count);





// 10. Ask user for password and print access status
//     Hardcoded correct password. Compare with user input.

 const correctPassword = "harshbhaiya@123";
 const maxAttempts = 3;
 let success = false;

 for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  const input = prompt(`Bhai password dal aur sun — ${4-attempt} moka hi mila hai `);

  if (input === null) {
     console.error("Bhai password dal de, cancel kyu kar rha hai?");
    break;
   }

   const pwd = input.trim();

   if (pwd === "") {
     console.error("Bhai apni galti se khali chhod diya ");
    continue;
  }

  if (pwd === correctPassword) {
     console.log("Bhai bdiya! Ho gya kaam ");
    success = true;
     break;
   } else {
    const left = maxAttempts - attempt;
     if (left > 0) {
      alert(`Galat password . ${left} moka bacha hai.`);
     } else {
       alert("Galat password. Ab moka khatam ");
    }
     console.warn("Incorrect password.");
 }
}

 if (!success) {
  console.log("Access Denied ");
 }


// Level 2 - Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
//     If user gets it right early, stop. If not → "Account locked"

let correctpass="Tanu@7653;
let attempts=0;
let input;
while(attempts>3){
    input=prompt("enter the correct password ");
    if(input===correctpass){
        console.log("account opened")
        break;
    }
    else{
        attempts++;
        console.log(
        if (attempts>3){
        console.log("you have ${3-attempts} left");
        }
        else{
        console.log("too many attempts account locked");
        }
    }
}


// 12. Ask user for words until they type "stop". Count how many times they typed "yes"
//     Loop until "stop" is typed. Count "yes".

let input="";
let count=0;
while(input!=="stop"){
   input=prompt("enter a word ");
   console.log(input);
   if(input==="yes"){
      count++;
   }
}
console.log("you typed yes ${count} times");


// 13. Print numbers divisible by 7 from 1 to 50
//     Use modulo % and loop.



// 14. Sum of all odd numbers from 1 to 30
//     Add only odd numbers. Print final sum.

let sum=0;
for(let i=1 ;i<31;i++){
   if(i%2===1){
      sum=sum+i; 
   }
}
console.log(sum)

// 15. Keep asking number until user enters an even number
//     Use while loop. Stop only if input is even.

let input=prompt("enter a number");
while(input%2!===0){
    input=prompt(enter another even number")!
}

// 16. Print numbers between two user inputs
//     Input start and end using prompt() → print all between.

let u1=prompt("enter first input");
let u2=prompt("enter second input");
for (let i=u1;i<=u2;i++){
    console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
//     Use loop. Stop with break after 3 odd prints.

// 18. Ask user 5 numbers. Count how many are positive
//     Use loop + condition + counter.

let posicount=0;
let count=0;
while(count>5){
   let user=prompt("enter a number");
   if(user>0){
       posicount++;
   }
   count++;
}
console.log("${posicount} out of 5 are positive");


// ATM Simulator - Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print "Insufficient balance"

let drawnamount;
let balance=1000;
let withdrawls=1;
while(withdrawls=<3){
    drawnamount=prompt("enter withdrawal amount);
    if(balance>=drawnamount){
        let balance=balance-draw amount;
        console.log("remaining amount is ${balance}");
    }
    else{
        console.log(insufficient balance");
    }
    withdrawls++;
}


//19-
//write a loop form 1 to 100
// prints each number
//stops immediately after finding the first multiple of 7 .

for (let i=1;i<=100 ;i++){
  console.log(i)
  if(i%7==0){
    break;
  }
}
//1 2 3 4 5 6 7

//20-
//write a loop from 1 to 20 which prints all other
// numbers except those divisible by 3 . ex -
//1 2 4 5 7 8 10 11 13 14 16 17 19 20

for (let i=1;i<=21 ;i++){
  
  if(i%3==0){
    continue;
  }
  console.log(i)
}

//21- write a loop from 1 to 100 printing only first 5 odd numbers and then. breaking the loop ex output 1 3 5 7 9

let count=0;
for (let i=1;i<=101 ;i++){
  
  if(i%2==1){
    console.log(i)
    count++;
    if(count==5){
      break;
    }
  }
  
//22- ask user to give 5 numbers, now check how many are +ve:

let positiveNum 0;
let negativeNum = 0;
for(let i=1; i<=5; i++){
   value +prompt("give me a number: "); 
   if(value === 0){
     console.error("value should not be zero");
     break;
   }
   else{
      if(value < 0) negativeNum++;
      else positiveNum++;
    }
console.log(positive numbers are ${positiveNum) times");

