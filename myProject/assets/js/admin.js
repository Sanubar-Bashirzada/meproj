// const admin_container=document.getElementById("admin_container");

//post start
const createBtn=document.getElementById("createBtn");
createBtn.addEventListener("click", function() {
    const money=document.getElementById("money").value;
    const room=document.getElementById("room").value;
    const img=document.getElementById("img").value;
    const honey=document.getElementById("honey").value;
    const lorem=document.getElementById("lorem").value;
    const img1=document.getElementById("img1").value;
   

    let obj= {
        money: money,
        room: room,
        img:img,
        honey: honey,
        lorem: lorem,
        img1:img1
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

//post end




//delete start
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


//more start
const more=document.getElementById("more");
const More=document.createElement("a");
More.innerText="More";
More.href="more.html";
More.target="_blank";
more.append(More);

//more end


// const createBtn2=document.getElementById("createBtn2");
// createBtn2.addEventListener("click", function() {
//     const honey=document.getElementById("honey").value;
//     const lorem=document.getElementById("lorem").value;
//     const img1=document.getElementById("img1").value;
   

//     let obj= {
//         honey: honey,
//         lorem: lorem,
//         img1:img1
//     }
//      fetch(" http://localhost:3000/write", 
//      {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body:JSON.stringify(obj),
//      })
//      .then((res)=>res.json())
//      .then(data=>{
//         console.log(data);
//      })
// })

// //post end