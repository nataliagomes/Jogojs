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




//  ISSO AQUI ABAIXO É O QUE EU TENTEI FAZER MAS falhei miseravelmente,
//  basicamente eu tentei criar uma função que analisasse a imagem que tivesse
//  em cada parâmetro da função e que me desse retorno apenas se nas 3 divs as imagens fossem iguais.
//  depois, criei uma função que contivesse todas as divs selecionadas que dão vitoria e coloquei pra que a
//  função de validarCasas analisasse as divs
//  não deu muito certo mas se quiserem reaproveitar a lógica ou mostrar pra um ninja ver se a lógica tá correta
// e ver o que pode alterar nisso.

//         function validarCasas (casa1, casa2, casa3){
//             let cs1 = casa1.style.backgroundImage;
//             let cs2 = casa2.style.backgroundImage;
//             let cs3 = casa3.style.backgroundImage;
            
//             return cs1 === cs2 && cs2 === cs3;
//         }
        
//         function possibilidadeVitoria (){
//             return(validarCasas(divs[0], divs[3], divs[6]) || 
//                    validarCasas(divs[1], divs[4], divs[7]) || 
//                    validarCasas(divs[2], divs[5], divs[8]) || 
//                    validarCasas(divs[0], divs[4], divs[8]) || 
//                    validarCasas(divs[2], divs[4], divs[6]) || 
//                    validarCasas(divs[0], divs[1], divs[2]) || 
//                    validarCasas(divs[3], divs[4], divs[5]) || 
//                    validarCasas(divs[6], divs[7], divs[8]));
//         }
// }