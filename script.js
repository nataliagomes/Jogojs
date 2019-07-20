let imgx = 'url(img/x.png)';
let imgo = 'url(img/o.png)';

let divs = document.querySelectorAll("div");

// let a1 = document.querySelector("#a1");
// let a2 = document.querySelector("#a2");
// let a3 = document.querySelector("#a3");
// let b1 = document.querySelector("#b1");
// let b2 = document.querySelector("#b2");
// let b3 = document.querySelector("#b3");
// let c1 = document.querySelector("#c1");
// let c2 = document.querySelector("#c2");
// let c3 = document.querySelector("#c3");


// let posicoes = {
//     X:[],
//     O:[]
// }


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
    if(divs[0].classList.contains('X') && divs[1].classList.contains('X') && divs[2].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[3].classList.contains('X') && divs[4].classList.contains('X') && divs[5].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[6].classList.contains('X') && divs[7].classList.contains('X') && divs[8].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[0].classList.contains('X') && divs[4].classList.contains('X') && divs[8].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[2].classList.contains('X') && divs[4].classList.contains('X') && divs[6].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[0].classList.contains('X') && divs[3].classList.contains('X') && divs[6].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[1].classList.contains('X') && divs[4].classList.contains('X') && divs[7].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[2].classList.contains('X') && divs[5].classList.contains('X') && divs[8].classList.contains('X')){
        alert('Jogador X foi o vencedor! Parabéns');
        window.location.reload();
    }

    //validarVitoriaO

    if(divs[0].classList.contains('O') && divs[1].classList.contains('O') && divs[2].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[3].classList.contains('O') && divs[4].classList.contains('O') && divs[5].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[6].classList.contains('O') && divs[7].classList.contains('O') && divs[8].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[0].classList.contains('O') && divs[4].classList.contains('O') && divs[8].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[2].classList.contains('O') && divs[4].classList.contains('O') && divs[6].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[0].classList.contains('O') && divs[3].classList.contains('O') && divs[6].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[1].classList.contains('O') && divs[4].classList.contains('O') && divs[7].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
    else if(divs[2].classList.contains('O') && divs[5].classList.contains('O') && divs[8].classList.contains('O')){
        alert('Jogador O foi o vencedor! Parabéns');
        window.location.reload();
    }
}