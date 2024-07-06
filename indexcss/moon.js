document.addEventListener("DOMContentLoaded", () => {
    let moon = document.getElementById("clicked");
    let isBlack = false;

    moon.addEventListener("click", (e) => {
        e.preventDefault(); 
        
        if (isBlack) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "#000"
        } else {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff"
        }
        
        
        isBlack = !isBlack;
    });
});
