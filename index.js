const allSeat = document.getElementsByClassName("seat");
let count = 0;
// console.log(allSeat);

for(const seat of allSeat){
    seat.addEventListener('click',function(e){

        count = count+1;
        
        // console.log('click');
        const price = 550;
        // console.log(seat);
        const seatPositon = seat.innerText;
        console.log(seatPositon);
        const seatClass = "Economoy"


        // select seat information list 
        const ul1 = document.getElementById('ul-1');
        const li1 = document.createElement('li');
        li1.innerText = seatPositon;
        ul1.appendChild(li1);

        const ul2 = document.getElementById('ul-2');
        const li2 = document.createElement('li');
        li2.innerText = seatClass;
        ul2.appendChild(li2);

        const ul3 = document.getElementById('ul-3');
        const li3 = document.createElement('li');
        li3.innerText = price;
        ul3.appendChild(li3);
        // select seat information list end 
        

        // selected seat marked
        e.target.style.backgroundColor="green";

        // how many seat selected
        setInnerText('seat-count',count);

        // cupon 

        // total seat count 
        let hasTotalSeat = document.getElementById('total-seat').innerText;
        hasTotalSeat = parseInt(hasTotalSeat);
        totalSeat('total-seat',hasTotalSeat);

        // totalPrice
        setTotalPrice('total-price',price);

        // grand total price 
        // grandTotal('grand-total',price);
        

        // input value 
        // const inputCupon = document.getElementById('input-cupon').value;
        grandTotal();

        
    })
}

function confirm(){
    const element = document.getElementById('my_modal_8');
    let grandTotalPrice = document.getElementById('total-price').innerText;
    grandTotalPrice = parseInt(grandTotalPrice);
    if(grandTotalPrice>0){
        element.classList.remove('hidden')
    }
}

function setTotalPrice(id,value){
    let totalPrice = document.getElementById(id).innerText;
    totalPrice = parseInt(totalPrice);
    totalPrice = value+totalPrice;
    setInnerText(id,totalPrice);
}

// function grandTotal(id,value){
//     console.log(value)
//     let grandTotalPrice = document.getElementById(id).innerText;
//     grandTotalPrice = parseInt(grandTotalPrice);
//     grandTotalPrice = value+grandTotalPrice;
//     setInnerText(id,grandTotalPrice);
// }

function grandTotal(){
    let grandTotalPrice = document.getElementById('total-price').innerText;
    grandTotalPrice = parseInt(grandTotalPrice);
    
    setInnerText('grand-total',grandTotalPrice);
}



function totalSeat(id,value){
    value = value -1;
    document.getElementById(id).innerText=value;
}


function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}

function apply(){
    newGrandTotal = document.getElementById('grand-total').innerText;
    newGrandTotal = parseInt(newGrandTotal);

    const inputCupon = document.getElementById('input-cupon').value;
    if(inputCupon==='NEW15'){
        setInnerText('grand-total',newGrandTotal-((newGrandTotal-15)/100));
    }
    else if(inputCupon==='Couple20'){
        setInnerText('grand-total',newGrandTotal-((newGrandTotal-20)/100));
    }
    else{
        alert("Apply Cupon")
    }
    // setInnerText('grand-total',200)
}
