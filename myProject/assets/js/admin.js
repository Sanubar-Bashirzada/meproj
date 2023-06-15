const admin_container=document.getElementById("admin_container");

//       // post start
//  const create=document.getElementById("createBtn");
//  const post=document.createElement("a");
//  post.innerText="Create";
//  post.href="post.html";
//  post.target="_blank";
//  create.append(post);

// //  post end

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
More.innerText="More";
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
    const money=document.getElementById("money").value;
    const room=document.getElementById("room").value;
    const img=document.getElementById("img").value;
   

    let obj= {
        money: money,
        room: room,
        img:img
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



