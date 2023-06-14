const admin_container=document.getElementById("admin_container");
// fetch("http://localhost:3000/write")
//     .then((resp) => resp.json())
//     .then(data => {
//         data.forEach((element, i) => {
//             if (i < 3) {
//                 let card1 = document.createElement("div");
//                 let p1 = document.createElement("p");
//                 let p2 = document.createElement("p");
//                 let flxdiv = document.createElement("div");
//                 let opacityDiv=document.createElement("div");
//                 // let opacityDiv2=document.createElement("div");
               
//                 card1.classList.add("box1", "animate__animated","animate__backInUp",);
//                 flxdiv.classList.add("flxdiv");
//                 p2.classList.add("bigP");
//                 p1.classList.add("littleP");
//                 opacityDiv.classList.add("elementor-background-overlay");

//                 p1.innerHTML = element.money;
//                 p2.innerHTML = element.room;

//                 card1.style.backgroundImage =`url("${element.img}")`;

//                 flxdiv.append(p1, p2);
//                 card1.append(flxdiv,opacityDiv);
//                 admin_cards.append(card1);


//                 //2ci card
//             //    let card2 = document.createElement("div");
//             //    let pOne = document.createElement("p");
//             //    let pTwo = document.createElement("p");
//             //    let flxdiv2 = document.createElement("div");

//             //    flxdiv2.append(pOne,pTwo);
//             //    card2.append(flxdiv2,opacityDiv2);
//             //    offersCards.append(card2);

//             //    card2.classList.add("box1", "animate__animated","animate__backInUp",);
//             //    flxdiv2.classList.add("flxdiv");
//             //    pOne.classList.add("bigTwoP");
//             //    pTwo.classList.add("littleTwoP");
//             //    opacityDiv2.classList.add("elementor-background-overlay");

              

//             //    pOne.innerHTML = element.honey;
//             //    pTwo.innerHTML = element.lorem;
               
//             //    card2.style.backgroundImage =`url("${element.img1}")`;


//             }
//         })
//     })


      // post start
 const create=document.getElementById("create");
 const post=document.createElement("a");
 post.innerText="Create";
 post.href="post.html";
 post.target="_blank";
 create.append(post);

//  post end

const deleteBtn=document.getElementById("delete");
deleteBtn.addEventListener("click", function(){

    fetch("http://localhost:3000/write", {
    method: "DELETE"
})
.then((resp)=>resp.json())
.then((data)=> {
    console.log(data);
})

})

//delete end

//more start
const more=document.getElementById("more");
const More=document.createElement("a");
More.innerText="Load More";
More.href="more.html";
More.target="_blank";
more.append(More);
//more end


//uptade start

const uptade=document.getElementById("uptade");
uptade.addEventListener("click", function(){
    fetch("http://localhost:3000/write" ,{
        method: "PUT",
        body:JSON.stringify({
            money: "eli",
            room: "veli"
            
        }),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    })

    .then((resp)=>resp.json())
    .then(data=> {
        console.log(data);
    })

})

//uptade end


const createBtn=document.getElementById("createBtn");
createBtn.addEventListener("click", function() {
    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
   

    let obj= {
        money: name,
        room: surname,
        
    }
     fetch(" http://localhost:3000/write", 
     {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(obj),
     })
     .then((res)=>res.json())
     .then(data=>{
        console.log(data);
     })
})



