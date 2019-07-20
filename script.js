let imgx = 'url(img/x.png)';
let imgo = 'url(img/o.png)';

let divs = document.querySelectorAll("div");

let click = 1;

function clicar(event){

    console.log(click);    
    
    if(event.target.classList.contains('X') || (event.target.classList.contains('O'))){
        alert('Jogava inválida. Tente novamente!');
    }
    
    else if(click % 2 == 0){
        event.target.style.backgroundImage = imgx;
        event.target.classList.add('X')
        click++;
        validarVitoria()
    }
    
    else{
        event.target.style.backgroundImage = imgo;
        event.target.classList.add('O')
        click++;
        validarVitoria()
    }   
}

for(let div of divs){
    div.onclick = clicar;
}

function validarVitoria(){

    //validarVitoriaX
    if(divs[0].classList.contains('X') && divs[1].classList.contains('X') && divs[2].classList.contains('X') ||
       divs[3].classList.contains('X') && divs[4].classList.contains('X') && divs[5].classList.contains('X') ||
       divs[6].classList.contains('X') && divs[7].classList.contains('X') && divs[8].classList.contains('X') ||
       divs[0].classList.contains('X') && divs[4].classList.contains('X') && divs[8].classList.contains('X') ||
       divs[2].classList.contains('X') && divs[4].classList.contains('X') && divs[6].classList.contains('X') ||
       divs[0].classList.contains('X') && divs[3].classList.contains('X') && divs[6].classList.contains('X') ||
       divs[1].classList.contains('X') && divs[4].classList.contains('X') && divs[7].classList.contains('X') ||
       divs[2].classList.contains('X') && divs[5].classList.contains('X') && divs[8].classList.contains('X') ){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
        }

    //validarVitoriaO
    else if(divs[0].classList.contains('O') && divs[1].classList.contains('O') && divs[2].classList.contains('O') ||
            divs[3].classList.contains('O') && divs[4].classList.contains('O') && divs[5].classList.contains('O') ||
            divs[6].classList.contains('O') && divs[7].classList.contains('O') && divs[8].classList.contains('O') ||
            divs[0].classList.contains('O') && divs[4].classList.contains('O') && divs[8].classList.contains('O') ||
            divs[2].classList.contains('O') && divs[4].classList.contains('O') && divs[6].classList.contains('O') ||
            divs[0].classList.contains('O') && divs[3].classList.contains('O') && divs[6].classList.contains('O') ||
            divs[1].classList.contains('O') && divs[4].classList.contains('O') && divs[7].classList.contains('O') ||
            divs[2].classList.contains('O') && divs[5].classList.contains('O') && divs[8].classList.contains('O') ){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }else{
        verificarVelha()
    }
}

function verificarVelha(){
    let jogadas = 0;
    for (let index = 0; index <= divs.length - 1; index++){
        if(divs[index].classList != ''){
            jogadas++
            if(jogadas == divs.length){
                alert("EMPATE! O jogo deu velha.");
                window.location.reload();
            }
        }
    }
}