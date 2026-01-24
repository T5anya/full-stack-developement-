//primitive aisi saari values jinko copy karne par tumhe ek real copy mil jayege 
//ex- string,number,Boolean,null,bigint, undefined,symbol

//reference-inko copy kadne par real.copy nahi milegi but aapko reference milega parent ka
//ex-aarays,objects,functions

let a =12;
let b=a;
a=a+2;
 // a=14 b=12
 
let c=[1,2,3];
let d=c;
d.pop();
// a=[1,2]  b=[1,2]


//null ka matlab hat jaan bojh kar koi value nahi di 
//undefined ka matlab hai apne ek variable aur use koi value nahi di uski
//by default value jogi undefined

let e=9007199254740991n;
console.log(e+1n);// 9007199254740992
// the max value a variable can hold is 9007199254740991
//then for number bigger than this we use bigint


//Dynamic typing -js main static typing nahi hai yahn par dynamic typing hai 
//aap yahan pe data ko change kar sakte hai

int f=12;
f=true;//possible in js only 


//Type Coercion - jismai aapka ek type dusre type mai convert ho jata hai 


typeof(NaN)==='number' //true
console.log("5"-1)
console.log("5"+1)
console.log(5+1)
console.log("5"*3)
 console.log(5==='5');
 console.log('5'==5);
 console.log(typeof[])
 console.log(typeof 123n)
 console.log(typeof null)
 console.log(typeof 123)

