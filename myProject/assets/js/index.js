const bar=document.getElementById("bar");
const responsive=document.getElementById("responsive");
const closeBtn=document.getElementById("closeBtn")
bar.addEventListener("click",function(){
    responsive.classList.toggle("addResp");
})
closeBtn.addEventListener("click",function(){
    responsive.classList.remove("addResp")
})

const cards=document.getElementById("cards");

fetch("http://localhost:3000/write")
.then((resp)=>resp.json())
.then(data=>{
    data.forEach((element,i)=>{
        if(i<3){
        let card1=document.createElement("div");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let flxdiv=document.createElement("div");

        flxdiv.append(p1,p2);
        card1.append(flxdiv);
        cards.append(card1);
        card1.classList.add("box1");
        flxdiv.classList.add("flxdiv");
        p2.classList.add("bigP");
        p1.classList.add("littleP");


        p1.innerHTML=  element.money;
        p2.innerHTML=  element.room;
        // img.src=element.img;
        //  card1.style.backgroundImage='url("element.img")';

       
        }
    })
})
