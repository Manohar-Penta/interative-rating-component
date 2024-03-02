let nums = document.getElementsByClassName("num");
for(let i=0;i<nums.length;i++){
    nums[i].addEventListener("click",(event) => {
        nums[i].classList.toggle("active");
    })
}
function check(){
    let nums = document.getElementsByClassName("active");
    if(nums.length!=1){
        let perr = document.getElementById("err");
        perr.style.display = "block";
    }
    else{
        let main = document.getElementById("main");
        let tqd = document.getElementById("thankyou");
        let num = document.getElementsByClassName("active");
        
        main.style.display = "none";
        tqd.style.display = "inline-block";

        document.getElementById("selector").innerHTML = "you have selected "+ num[0].innerHTML +" out of 5";
    }
}