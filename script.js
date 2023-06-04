'use strict';

const btn = document.querySelector('.searchIt');
const countriesContainer = document.querySelector('.countries');
const inbox=document.querySelector(".contname");


const GOD=function(data){
    const html=`<article class="country">
    <img class="country__img" alt=${data.flags.alt} src=${data.flags.png} title="Flag"/>
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>💖</span>${(+data.population/1000000000).toFixed(1)}B People</p>
    <p class="country__row"><span>🚩</span>${data.capital}</p>
    <p class="country__row"><span>🪙</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
    </div>
</article>`;
const creator=document.createElement("div");

creator.innerHTML=html;
 countriesContainer.append(creator)
countriesContainer.style.opacity=1;
}
const Ajax=function(value){
const req=new XMLHttpRequest();
req.open("GET",`https://restcountries.com/v3.1/name/${value}`);
req.send();
req.addEventListener('load',function(){
    const [data]=JSON.parse(this.responseText);
   //console.log(data);
   GOD(data);
   
});}
const promise=function(value){fetch(`https://restcountries.com/v3.1/name/${value}`)
.then(response=>{
   
    if(!response.ok) 
      
        throw new Error("Page Not Find");
    return response.json()})
.then((data)=>{
    document.querySelector("header").classList.add("mover");
    return GOD(data[0]);}).catch((err)=>{alert(err.message)})
    .finally(console.log("NO doubt its working"));}
  
btn.addEventListener('click',function(){
    if(!inbox.value){alert("Kindly! Enter the Value First");return;}
   // Ajax('india');
    promise(inbox.value);
   // document.querySelector("header").classList.add("mover");
  });