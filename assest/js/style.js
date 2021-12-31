let buttons = document.querySelectorAll(".button")
let lastbutton = document.querySelector(".lastbutton")
let lastabout = document.querySelector(".lastabout")
let abouts = document.querySelectorAll(".about")
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(lastabout){
            lastabout.classList.add("d-none")
        }
        if(lastbutton){
            lastbutton.classList.remove("active")
        }
        button.classList.add("active")
        dataidd = button.getAttribute("data-id")
        let about = document.getElementById(dataidd)
        about.classList.remove("d-none")
        lastabout = about
        lastbutton = button
    })
})



///////
console.log(document.querySelector(".nav-links"))
let navslide = function(){
    let burger = document.querySelector(".burger")
    let nav = document.querySelector(".nav-links")
    let xicon = document.querySelector(".xicon")

    burger.addEventListener("click",function(){
        nav.classList.add("navactive")
        xicon.addEventListener("click",function(){
           nav.classList.remove("navactive")
        })
    })
}

navslide();


$(document).ready(function(){
   $(".salam").click(function(){
       $(".ul2").not($(this).next()).slideUp() 
       $(this).next().slideToggle() 
    })
})

let headers = document.querySelectorAll(".header")
headers.forEach(function(header){
    header.addEventListener("click",function(){
        header.nextElementSibling.classList.toggle("acctive")
    })
})



$(document).ready(function(){
    $(".header").click(function(){
        $(".ul2").not($(this).next()).slideUp() 
        $(this).next().slideToggle()
    })
})

//////////////
let skls = document.querySelectorAll(".smlimgs .smlimg img")
//let popup = document.querySelector(".popupimg")
//let popupimg = document.querySelector(".popupimg img")
skls.forEach((skl)=>{
    skl.addEventListener("click",function(){
        popup = document.querySelector(".popupimg")
        let popupimg = document.querySelector(".popupimg img")
        popup.style.display = "block"
        popupimg.src = skl.getAttribute("src")
        popup.addEventListener("click",function(){
            popup.style.display = "none"
        })
    })
})


let right = document.querySelector(".iright")
let left = document.querySelector(".ileft")
let number = document.querySelector(".number")
var data = 1
number.innerHTML = data

function minus(){
    data = data-1
    number.innerHTML = data
}
function plus(){
    data = data+1
    number.innerHTML = data
}

right.addEventListener("click",function(){
    plus();
})
left.addEventListener("click",function(){
    minus();
})
///////////////////////////////