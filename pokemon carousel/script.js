let leftButton = document.getElementsByClassName("left")[0];
let rightButton = document.getElementsByClassName("right")[0];

let cardArray = document.getElementsByClassName("card-array")[0];

let cards = document.getElementsByClassName("card");



let elementInFocusIndex = 1;

cards[elementInFocusIndex].className="card selected";

let cardArrayRightPosition = 0;



// let moveLeft = ()=>{
//     elementInFocusIndex--;
//     if(elementInFocusIndex<0){
//         elementInFocusIndex=4;
//         cardArrayRightPosition=elementInFocusIndex*300;
//     }else{
//         cardArrayRightPosition-=300;
//     }
//     //array moves right
//     //each card is of with 300px
//     //decrease right
    
//     console.log(elementInFocusIndex);
//     cardArray.style.right=`${cardArrayRightPosition}px`;

// }

// let moveRight = ()=>{
//     //array moves left
//     //each card is of with 300px
//     //increase right
//     elementInFocusIndex++;
//     if(elementInFocusIndex>4){
//         elementInFocusIndex=0;

//         //0 th card is at 0px
//         //1st card is at 300px
//         //and so on
//         cardArrayRightPosition=elementInFocusIndex*300;
//     }else{
//         cardArrayRightPosition+=300;
//     }
    
//     console.log(elementInFocusIndex);
//     cardArray.style.right=`${cardArrayRightPosition}px`;
// }


let moveLeft = ()=>{
    elementInFocusIndex--;
    if(elementInFocusIndex<0){
        elementInFocusIndex=4;   
    }
    //array moves right
    //each card is of with 300px
    //decrease right
    
    console.log(elementInFocusIndex);
    cardArray.className=`card-array position-${elementInFocusIndex}`;

    for(let i=0;i<cards.length;i++){
        if(i===elementInFocusIndex){
            cards[i].className="card selected";
        }else{
            cards[i].className="card";
        }
    }


}

let moveRight = ()=>{
    //array moves left
    //each card is of with 300px
    //increase right
    elementInFocusIndex++;
    if(elementInFocusIndex>4){
        elementInFocusIndex=0;

        //0 th card is at 0px
        //1st card is at 300px
        //and so on
    }
    
    console.log(elementInFocusIndex);
    cardArray.className=`card-array position-${elementInFocusIndex}`;

    for(let i=0;i<cards.length;i++){
        if(i===elementInFocusIndex){
            cards[i].className="card selected";
        }else{
            cards[i].className="card";
        }
    }
}

leftButton.addEventListener("click",moveLeft);
rightButton.addEventListener("click",moveRight);