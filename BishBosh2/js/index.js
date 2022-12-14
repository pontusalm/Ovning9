
let itemsList=[]

const addItem= ()=>{
        // alert(`added`);
        
        const endValueNr=document.querySelector(`#endValue`);
        endValue=endValueNr.value;

        const divideNr1=document.querySelector(`#divide1`);
        divide1=divideNr1.value;

        const divideNr2=document.querySelector(`#divide2`);
        divide2=divideNr2.value;
        

        for (let i =1; i<endValue; i++) {
            let delbartTre = i % divide1;
            let delbartFyra = i % divide2;
            let koll=i

            if (delbartTre == 0 && delbartFyra ==0){   
                console.log(`Bish-Bosh`);
                koll=`Bish-Bosh`
                itemsList.push(koll);
                continue}

            else if (delbartTre == 0){   
                console.log(`Bish`);
                koll=`Bish`
                itemsList.push(koll);
                continue}
            
            else if (delbartFyra == 0){   
                console.log(`Bosh`);
                koll=`Bosh`
                itemsList.push(koll);
                continue}
            
            itemsList.push(koll);
            
            console.log(i);   
        }
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







