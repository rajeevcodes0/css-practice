let allPs = document.getElementsByTagName('p');
let imageContainer = document.getElementsByClassName("image-container")[0];

let backgroundChanger = (e)=>{
    console.log("yeuss")
    let hoveredName = e.target.innerHTML;
    if(hoveredName==="Bulbasaur"){
        console.log("bulbasaurrrrrrr");
        imageContainer.style.backgroundImage = "url('assets/bulbasaur.png')";
    }else if(hoveredName==="Charlizard"){
        imageContainer.style.backgroundImage = "url('assets/charlizard.png')";
    }else if(hoveredName==="Dragonite"){
        imageContainer.style.backgroundImage = "url('assets/dragonite.png')";
    }else if(hoveredName==="Gyarados"){
        imageContainer.style.backgroundImage = "url('assets/gyarados.png')";
    }else if(hoveredName==="Mewtwo"){
        imageContainer.style.backgroundImage = "url('assets/mewtwo.png')";
    }else if(hoveredName==="Snorlax"){
        imageContainer.style.backgroundImage = "url('assets/snorlax.png')";
    }else if(hoveredName==="Squirtle"){
        imageContainer.style.backgroundImage = "url('assets/squirtle.png')";
    }

}

for(let i=0;i<allPs.length;i++){
    allPs[i].addEventListener("mouseover",backgroundChanger)
}

