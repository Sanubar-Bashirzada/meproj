const user=document.getElementById("user");
const email=document.getElementById("email");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");
const submitUp=document.getElementById("submitUp");

let arr=[];

if (JSON.parse(localStorage.getItem("Data")) !== null){
    arr=JSON.parse(localStorage.getItem("Data"));
}
submitUp.addEventListener("submit", (e) =>{
    e.preventDefault();
    const obj = {
        name:user.value,
        email:email.value,
        pass:password1.value,
        confPass:password2.value
    };

    arr.push(obj);
    localStorage.setItem("Data", JSON.stringify(arr));
    windo
})
