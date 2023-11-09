let image = document.getElementById('image');
let images = ['1.png','2.png','3.png']
setInterval(function(){
    let random = Math.floor(Math.random()*3);  //intoarce valoarea lui x rotunjita in jos la cel mai apropriat numar intreg; intoarce un numar aleatoriu intre 0 si 1
    image.src = images[random];
},2000); 