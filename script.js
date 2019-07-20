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


let posicoes = {
    X:[],
    O:[]
}


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
        // posicoes.X.push()
    }
    
    else{
        event.target.style.backgroundImage = imgo;
        event.target.classList.add('O')
        click++;
        // posicoes.O.push()
    }   
}


for(let div of divs){
    div.onclick = clicar;
}
