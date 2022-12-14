
let itemsList=[]


const addItem= ()=>{
const itemID=document.querySelector(`#item`);
    itemsList.push(itemID.value);
    // alert(`${itemID.value} added`);
    itemID.value="";
    displayList();
}

const displayList= ()=>{
    const itemsRef=document.querySelector(`#itemsList`);
    itemsRef.innerHTML=``
    for (let item in itemsList)
    {
        const itemID=`itemCode`;
        itemsRef.innerHTML +=`
        <li id=${itemID}> ${itemsList[item]} </li>`
    }
}

const removeItem= ()=>{
    const itemID=document.querySelector(`#item`);
        for (let i in itemsList)
    {
        if (itemsList[i] == itemID.value)
        {
            itemsList.splice(i, 1);
            // alert(`${itemID.value} removed`);
        }
        displayList();
    }
}

const markItem=()=>{
    const itemRef=document.querySelector(`#11`);
    itemRef.classList.toggle("item-style");
}    
    
    
    const itemsRef=document.querySelector(`#itemsList`);
    itemsRef.addEventListener("click",(event)=>{
        const itemRef=document.querySelector(`#itemCode`);
        itemsRef.addEventListener("click",(event)=>{
            event.target.classList.toggle("item-style");
        });
    });





