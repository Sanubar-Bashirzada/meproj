const bar=document.getElementById("bar");
const responsive=document.getElementById("responsive");
const closeBtn=document.getElementById("closeBtn")
bar.addEventListener("click",function(){
    responsive.classList.toggle("addResp");
})
closeBtn.addEventListener("click",function(){
    responsive.classList.remove("addResp")
})

