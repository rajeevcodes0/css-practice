let input = document.getElementById("search-field");
let xIcon = document.getElementById("x-icon");
let searchIcon = document.getElementById("search-icon");
let container = document.getElementsByClassName("container")[0];


xIcon.addEventListener('click',()=>{
    input.value='';
    xIcon.style.display="none";
})

searchIcon.addEventListener('click',()=>{
    input.focus();
})

input.addEventListener('keyup',()=>{
    if(input.value.length==0){
        xIcon.style.display="none";
    }else{
        xIcon.style.display="inline-block";
    }
})