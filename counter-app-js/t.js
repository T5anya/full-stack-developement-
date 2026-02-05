let count=0;
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let counter=document.querySelector(".count");

btn1.addEventListener('mousedown', () => {
    btn1.style.scale = '0.5';
});
btn1.addEventListener('mouseup', () => {
    btn1.style.scale = '1';
});

/*btn1.addEventListener('mouseleave', () => {
    btn1.style.scale = '1';
});*/
btn2.addEventListener('mousedown', () => {
    btn2.style.scale = '0.5';
});
btn2.addEventListener('mouseup', () => {
    btn2.style.scale = '1';
});
btn2.addEventListener('mouseleave', () => {
    btn2.style.scale = '1';  
});

btn1.addEventListener("click",function(){
    count++;
    console.log(count);
    counter.innerHTML=count;
});
btn2.addEventListener("click",function(){
    if(count<=0){
        count;
    }
    else{count--;
    console.log(count);
    counter.innerHTML=count;}
});

