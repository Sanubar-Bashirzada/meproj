const offersCards= document.getElementById("offersCards");

fetch("http://localhost:3000/write")
    .then((resp) => resp.json())
    .then(data => {
        data.forEach((element, i) => {
            if (i < 3) {
                // let card1 = document.createElement("div");
                // let p1 = document.createElement("p");
                // let p2 = document.createElement("p");
                // let flxdiv = document.createElement("div");
                // let opacityDiv=document.createElement("div");
                let opacityDiv2=document.createElement("div");
               
                // card1.classList.add("box1", "animate__animated","animate__backInUp",);
                // flxdiv.classList.add("flxdiv");
                // p2.classList.add("bigP");
                // p1.classList.add("littleP");
                // opacityDiv.classList.add("elementor-background-overlay");

                // p1.innerHTML = element.money;
                // p2.innerHTML = element.room;

                // card1.style.backgroundImage =`url("${element.img}")`;

                // flxdiv.append(p1, p2);
                // card1.append(flxdiv,opacityDiv);
                // cards.append(card1);


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


    