let hamburgerIcon = document.getElementsByClassName("hamburger-icon-container")[0];
let arrowIcon = document.getElementsByClassName("arrow-icon-container")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let linkList = document.getElementsByClassName("link-list-hidden")[0];
console.log(linkList);

hamburgerIcon.addEventListener("click",()=>{
    hamburgerIcon.classList.add("hamburger-icon-container-hidden");
    arrowIcon.classList.add("arrow-icon-animation-class");
    overlay.classList.remove("overlay-fill-reverse-animation-class");
    overlay.classList.remove("overlay-fill-reverse-animation-class-mobile");
    overlay.classList.add("overlay-fill-animation-class");
    linkList.classList.add("link-list");
    linkList.classList.remove("link-list-hidden");
    
})

arrowIcon.addEventListener("click",()=>{
    arrowIcon.classList.remove("arrow-icon-animation-class");
    arrowIcon.classList.add("arrow-icon-reverse-animation-class");
    overlay.classList.remove("overlay-fill-animation-class");

    if(document.body.clientWidth<=500){
        overlay.classList.add("overlay-fill-reverse-animation-class-mobile");
    }else{
        overlay.classList.add("overlay-fill-reverse-animation-class");
    }
    
    linkList.classList.remove("link-list");
    linkList.classList.add("link-list-hidden");
    setTimeout(()=>{
        arrowIcon.classList.remove("arrow-icon-reverse-animation-class");
        hamburgerIcon.classList.remove("hamburger-icon-container-hidden");
    },200)
})