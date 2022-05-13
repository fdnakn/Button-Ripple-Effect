const buttons = document.querySelectorAll(".ripple");
console.log(buttons);

buttons.forEach(button =>{
    button.addEventListener("click",function (e){
        const x = e.clientX;
        const y = e.clientY;

        

        //  Javascript clientX ve clientY kullanımı ile 
        //  bir html elemanı üzerinde mouse kordinatlarını
        //  elde edebilmekteyiz.

        //bizim tıkladıgımız yerin kordinatını almıyacak
        //tüm görüş alanındaki yerin kordinatını alıyor
        //x'in left ten kaç px uzakta oldgunu verir
        //y'nin top tan kaç px uzakta oldugunu verir bu şekilde.

        //şimdi biz buttonun posizyonunu alacaz nerede olduguna dair
        //x'ten nerede başladı y'den nerede başladığına dair.

        const buttonTop = e.target.offsetTop;
        const buttonLeft= e.target.offsetLeft;

        

        // bize top'un ve left'in nerede başladını gösterecek.
        //hep aynı kordinatları verir çünkü ,buttonun pozisyonunu alıyor.not where we click

        //şimdi biz tıkladıgımız yerin buttonda nerede oldugunu hesaplıyacaz
        
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

       

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top =yInside+ "px";
        circle.style.left=xInside+"px";
        
        this.appendChild(circle);


       setTimeout(()=>circle.remove,500);
        
     

    })
})












