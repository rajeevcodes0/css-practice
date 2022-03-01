let leftSideBar = document.getElementsByClassName("left-sidebar")[0];
console.log(leftSideBar);

let hamButton = document.getElementsByTagName("button")[0];
hamButton.addEventListener("click",()=>{
    if(leftSideBar.classList.contains("hide")){
        leftSideBar.classList.remove("hide");
    }else{
        leftSideBar.classList.add("hide");
    }
});


