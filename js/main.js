var numImg = 1;

function alternarImg() {
    let capa = null;
    capa = document.getElementById('capa');

if(numImg==1){
    capa.src = 'img/navio.jpg';
    numImg= 2;
}
else{
    capa.src = 'img/lago.jpg';
    numImg= 1;
}
console.log(numImg);

}

function alternarAutomatico(){
    window.setInterval(()=>{
        /////////
        alternarImg();
    }, 1000);

}