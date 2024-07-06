const btn = document.querySelectorAll(".cart");
btn.forEach(button =>{
    button.addEventListener("click",()=>{
        alert("payment is successfully now you will click another button");
    });
})