let divs = document.querySelectorAll('div');
let button = document.querySelector('input');

let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");
let d4 = document.querySelector(".d4");
let d5 = document.querySelector(".d5");
let d6 = document.querySelector(".d6");
let d7 = document.querySelector(".d7");
let d8 = document.querySelector(".d8");
let d9 = document.querySelector(".d9");


let jogadores = {
    jogador1:[],
    jogador2:[]
}
let click = 1;
function jogar(event){
    console.log(click);
    if(click % 2 == 0){
        event.target.style.backgroundImage = 'url(img/x.png)';
        jogadores.jogador1.push(click);
        
        click ++;
    }else{
        event.target.style.backgroundImage = 'url(img/o.png)';
        jogadores.jogador2.push(click);

        click++;
    }
}


//function resetar (event){ for()}



for(let div of divs){
    div.onclick = jogar;
}


