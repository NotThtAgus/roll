function releaseTheKraken(){
    let boton = document.getElementById("det");

    boton.style.display= "none";
    
    let fondo = document.getElementById("vid");

    fondo.style.display = "block";
    fondo.play();
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.position = "fixed";
    fondo.style.backgroundColor = "black";

    let tit = document.getElementById("tit");
    tit.innerHTML=("LA BESTIA");

    //abajo

    this.img = document.createElement("img");
    this.img.src = "source.gif";
    let resto = document.getElementById("bod");
    resto.appendChild(this.img);

    this.img2 = document.createElement("img");
    this.img2.src = "source.gif";
    resto.appendChild(this.img2);

    this.img3 = document.createElement("img");
    this.img3.src = "source.gif";
    resto.appendChild(this.img3);

    this.img4 = document.createElement("img");
    this.img4.src = "source.gif";
    resto.appendChild(this.img4);

    this.img5 = document.createElement("img");
    this.img5.src = "source.gif";
    resto.appendChild(this.img5);

    this.img.style.position = "absolute";
    this.img.style.top = "340px";
    this.img.style.left = "160px";
    this.img.style.width= "300px";

    this.img2.style.position = "absolute";
    this.img2.style.top = "340px";
    this.img2.style.left = "360px";
    this.img2.style.width= "300px";

    this.img3.style.position = "absolute";
    this.img3.style.top = "340px";
    this.img3.style.left = "560px";
    this.img3.style.width= "300px";

    this.img4.style.position = "absolute";
    this.img4.style.top = "340px";
    this.img4.style.left = "760px";
    this.img4.style.width= "300px";

    this.img5.style.position = "absolute";
    this.img5.style.top = "340px";
    this.img5.style.left = "960px";
    this.img5.style.width= "300px";


    //fondo 

    this.roll1 = document.createElement("img");
    this.roll1.src = "giphy.gif";
    this.roll1.id="r1"
    resto.appendChild(this.roll1);

    this.roll2 = document.createElement("img");
    this.roll2.src = "giphy.gif";
    this.roll2.id="r2"
    resto.appendChild(this.roll2);

    this.roll3 = document.createElement("img");
    this.roll3.src = "giphy.gif";
    this.roll3.id ="r3";
    resto.appendChild(this.roll3);

    this.roll4 = document.createElement("img");
    this.roll4.src = "giphy.gif";
    this.roll4.id="r4";
    resto.appendChild(this.roll4);

    this.roll1.style.position = "absolute";
    this.roll1.style.top = "50px";
    this.roll1.style.width= "100px";
    this.roll1.style.opacity = "30%";

    this.roll2.style.position = "absolute";
    this.roll2.style.top = "150px";
    this.roll2.style.width= "100px";
    this.roll2.style.opacity = "30%";

    this.roll3.style.position = "absolute";
    this.roll3.style.top = "250px";
    this.roll3.style.width= "100px";
    this.roll3.style.opacity = "30%";

    this.roll4.style.position = "absolute";
    this.roll4.style.top = "350px";
    this.roll4.style.width= "100px";
    this.roll4.style.opacity = "30%";

    //mover
    let r1 = document.getElementById("r1");
    let x1 = 0;

    setInterval(function(){
         r1.style.left = x1 + "px" ; x1+=2;
         if( x1 == 1200) {
             x1=0;
        }
 
        });



    let r2 = document.getElementById("r2");
    let x2 = 1200;
    
    setInterval(function(){
        r2.style.left = x2 + "px" ; x2--;
        if( x2 == 0) {
           x2=1200;
        }
        })

    let r3 = document.getElementById("r3");
    let x3 = 0;

    setInterval(function(){
        r3.style.left = x3 + "px" ; x3+=3;
        if( x3 >= 1200) {
           x3=0;
        }
        })
    
    let r4 = document.getElementById("r4");
    let x4 = 1200;
    
    setInterval(function(){
        r4.style.left = x4 + "px" ; x4-=3;
        if( x4 <= 0) {
           x4=1200;
        }
        })
            

    }
