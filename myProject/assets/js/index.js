const bar = document.getElementById("bar");
const responsive = document.getElementById("responsive");
const closeBtn = document.getElementById("closeBtn")
bar.addEventListener("click", function () {
    responsive.classList.toggle("addResp");
})
closeBtn.addEventListener("click", function () {
    responsive.classList.remove("addResp")
})

const cards = document.getElementById("cards");
const offersCards= document.getElementById("offersCards");

fetch("http://localhost:3000/write")
    .then((resp) => resp.json())
    .then(data => {
        data.forEach((element, i) => {
            if (i < 3) {
                let card1 = document.createElement("div");
                let boxhover = document.createElement("div");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let flxdiv = document.createElement("div");
                let opacityDiv=document.createElement("div");
                let opacityDiv2=document.createElement("div");
               
                card1.classList.add("box1", "animate__animated","animate__backInUp",);
                flxdiv.classList.add("flxdiv");
                boxhover.classList.add("boxHover");
                p2.classList.add("bigP");
                p1.classList.add("littleP");
                opacityDiv.classList.add("elementor-background-overlay");

                p1.innerHTML = element.money;
                p2.innerHTML = element.room;

                card1.style.backgroundImage =`url("${element.img}")`;

                flxdiv.append(p1, p2);
                card1.append(flxdiv,opacityDiv,boxhover);
                cards.append(card1);


                //2ci card
               let card2 = document.createElement("div");
               let pOne = document.createElement("p");
               let pTwo = document.createElement("p");
               let flxdiv2 = document.createElement("div");

               flxdiv2.append(pOne,pTwo);
               card2.append(flxdiv2,opacityDiv2);
               offersCards.append(card2);

               card2.classList.add("box1", "animate__animated","animate__backInUp",);
               flxdiv2.classList.add("flxdiv");
               pOne.classList.add("bigTwoP");
               pTwo.classList.add("littleTwoP");
               opacityDiv2.classList.add("elementor-background-overlay");

              

               pOne.innerHTML = element.honey;
               pTwo.innerHTML = element.lorem;
               
               card2.style.backgroundImage =`url("${element.img1}")`;


            }
        })
    })


    

    // window.addEventListener('scroll', function() {
    //     var scrollPosition = window.scrollY;
    //     var box1 = document.querySelectorAll('.box1');
  
    //     if (scrollPosition >= 780) {
    //       box1.style.bottom = '780px';
    //     } else {
    //       box1.style.bottom = '0';
    //     }
    //   });

    const theimg=document.getElementById("theimg");
    const swimming=document.getElementById("swimming");
    const spa=document.getElementById("spa");
    const sport=document.getElementById("sport");
    const restoran=document.getElementById("restoran");
    theimg.style.backgroundImage="url('./assets/imgs/swim.jpg')";

    swimming.addEventListener("mousemove",function(){
        theimg.style.backgroundImage="url('./assets/imgs/swim.jpg')";
        swimming.style.height="80px";
        swimming.style.transition="500ms";
        swimming.style.backgroundColor="white";
        swimming.style.color="black";
        spa.style.color="white";
        sport.style.color="white";
        restoran.style.color="white";
        spa.style.height="0px";
        restoran.style.height="0px";
        sport.style.height="0px";
        sport.style.display="block";
        spa.style.display="block";
        restoran.style.display="block";
        sport.style.textAlign="center";
        restoran.style.textAlign="center";
        spa.style.textAlign="center";
    

    
    });
    spa.addEventListener("mousemove",function(){
        theimg.style.backgroundImage="url('./assets/imgs/spa.jpg')";
        spa.style.height="80px";
        spa.style.backgroundColor="white";
        spa.style.color="black";
        swimming.style.height="0px";
        sport.style.height="0px";
        restoran.style.height="0px";
        sport.style.display="block";
        swimming.style.display="block";
        restoran.style.display="block";
        sport.style.textAlign="center";
        swimming.style.textAlign="center";
        restoran.style.textAlign="center";
        swimming.style.color="white";
        sport.style.color="white";
        restoran.style.color="white";
        spa.style.transition="500ms";
    
    });
    sport.addEventListener("mousemove",function(){
        theimg.style.backgroundImage="url('./assets/imgs/sport.jpg')";
        sport.style.height="80px";
        sport.style.backgroundColor="white";
        sport.style.color="black";
        swimming.style.height="0px";
        spa.style.height="0px";
        restoran.style.height="0px";
        spa.style.display="block";
        swimming.style.display="block";
        restoran.style.display="block";
        restoran.style.textAlign="center";
        swimming.style.textAlign="center";
        spa.style.textAlign="center";
        spa.style.color="white";
        swimming.style.color="white";
        restoran.style.color="white";
        sport.style.transition="500ms";

    
    
    });
    restoran.addEventListener("mousemove",function(){
        theimg.style.backgroundImage="url('./assets/imgs/restoran.jpg')";
        restoran.style.height="80px";
        restoran.style.backgroundColor="white";
        restoran.style.color="black";
        swimming.style.height="0px";
        sport.style.height="0px";
        spa.style.height="0px";
        sport.style.display="block";
        swimming.style.display="block";
        spa.style.display="block";
        sport.style.textAlign="center";
        swimming.style.textAlign="center";
        spa.style.textAlign="center";
        spa.style.color="white";
        sport.style.color="white";
        swimming.style.color="white";
        restoran.style.transition="500ms";
    
    
    })



  


   