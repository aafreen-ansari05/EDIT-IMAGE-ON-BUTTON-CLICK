let a = document.getElementById("change");
let b = document.getElementById("content");
    a.addEventListener("click",function(){
        if(b.classList.contains("open")){
            c.classList.remove("open");
        } else{
            c.classList.add("open");
        }

    })