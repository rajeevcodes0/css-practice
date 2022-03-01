let imagePaths=["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
let pointer = 0;

let leftButton = document.getElementById("left-button");
let rightButton = document.getElementById("right-button");

let image = document.getElementsByTagName("img")[0];

leftButton.addEventListener("click",changeHandler);
rightButton.addEventListener("click",changeHandler);

function changeHandler(e){
    if(e.target.id=="left-button"){
        pointer--;
        
        if(pointer==-1){
            pointer = imagePaths.length-1;
        }
        image.src=imagePaths[pointer];
    }else{
        pointer++;
        if(pointer==imagePaths.length){
            pointer=0;
        }
        image.src=imagePaths[pointer];
    }
}



let x=fetch("./data.json").then((response)=>response.json()).then((data)=>data);
console.log(x);