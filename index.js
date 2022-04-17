const btnPlus=document.querySelectorAll(".plus");
const btnMinus=document.querySelectorAll(".minus");

const chekboxtag=document.getElementsByClassName("check");

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",increment);
    chekboxtag[i].addEventListener("click",totelprice);
}

function increment(event){
    var btnplus=event.target;
    var divElt=btnplus.parentElement;
    var quentitytag=divElt.querySelector("p");
    quentityvalue=Number(quentitytag.innerHTML);
    quentityvalue++;
    quentitytag.innerHTML=quentityvalue;

    var trElt=divElt.parentElement.parentElement;
    var unitpricevalue=Number(trElt.querySelector(".unitePrice").innerHTML);
    var pricetag=trElt.querySelector(".price");
    var pricevalue=Number(pricetag.innerHTML);
    pricevalue=quentityvalue*unitpricevalue;
    pricetag.innerHTML=pricevalue;
}

function totelprice(e){
    checkbox=e.target;
    var pricevalue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML);
    var totaltag=document.getElementById("total");
    var totalvalue=Number(totaltag.innerHTML);
    var btnPluss=checkbox.parentElement.parentElement.querySelector(".plus");
    if(checkbox.checked===true){
        totalvalue+=pricevalue;
        btnPluss.setAttribute("disabled",true);

    }
    else{
        totalvalue-=pricevalue;
        btnPluss.removeAttribute("disabled");

    }
    totaltag.innerHTML=totalvalue;


}

function wishlist(event) {

    var btnlike = event.target;


    if(btnlike.style.color==="gray"){
        btnlike.style.color = "red";
    }
    else {
        btnlike.style.color = "gray";
    } 
  }
