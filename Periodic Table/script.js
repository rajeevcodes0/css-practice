let elementData=[];
fetch('./PeriodicTableJSON.json')
.then(response=>response.json())
.then(data=>(
    elementData=data,generateElements()));

function generateElements(){
    let periodicTable = document.getElementById("periodic-table");
    for(let i=0;i<118;i++){
        let element = document.createElement("div");
        element.classList.add("element");
        element.classList.add(elementData.elements[i].symbol);
        let block = elementData.elements[i].electron_configuration[ elementData.elements[i].electron_configuration.length-2];

        if(block!='s'&&block!='p'&&block!='d'&&block!='f'){
            console.log(block);
            block = elementData.elements[i].electron_configuration[ elementData.elements[i].electron_configuration.length-3];
            console.log(block);
        }


        if(block=='s'){
            element.classList.add('s-block');
        }else if(block=='p'){
            element.classList.add('p-block');
        }else if(block=='d'){
            element.classList.add('d-block');
        }else if(block=='f'){
            element.classList.add('f-block');
        }

        let atomicNumber = document.createElement("p");
        atomicNumber.innerText = elementData.elements[i].number;
        atomicNumber.className="atomic-number";

        let symbol= document.createElement("p");
        symbol.innerText = elementData.elements[i].symbol;
        symbol.className="symbol";


        // let name = document.createElement("p");
        // name.innerText = elementData.elements[i].name;
        // name.className="name";

        element.appendChild(atomicNumber);
        element.appendChild(symbol);
        //element.appendChild(name);

        periodicTable.appendChild(element);

    }
}