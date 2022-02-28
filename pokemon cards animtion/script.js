let cards = document.getElementsByClassName("card");

let onClickHandler = (e)=>{

    if(e.target.classList.contains("selected")){
        for(let i=0;i<cards.length;i++){
            cards[i].classList.remove("selected");
            cards[i].classList.remove('not-selected');
        }
        return;
    }

    for(let i=0;i<cards.length;i++){
        if(e.target==cards[i]){
            e.target.classList.add("selected");
            e.target.classList.remove('not-selected');
        }else{

            cards[i].classList.remove("selected");
            cards[i].classList.add("not-selected");
        }
    }

}



for(let i=0;i<cards.length;i++){
    cards[i].addEventListener('click',onClickHandler)
}

