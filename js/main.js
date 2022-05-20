var cuadros = document.querySelectorAll(".square");
var pickedColor = document.querySelector("#colorDisplay");
var btn = document.querySelector("#btnf");

// cuadradosColor(colores) Añade colores a los cuadrados, luego correctoIncorrecto(colorClick) analiza si es o no correcto.
function cuadradosColor(colores){
    for (i=0; i < cuadros.length; i++){
        cuadros[i].style.background=colores[i];
        cuadros[i].addEventListener("click", function(){
            let clickedColor = this.style.background;
            correctoIncorrecto(clickedColor);
        });
    };
};

function correctoIncorrecto(colorClick){
    if (colorClick == pickedColor.textContent ){
        document.querySelector("#message").innerText="¡Correcto!";
        document.querySelector("#message").style.color="rgb(111, 230, 136)";
        let h1 = document.querySelector("h1").style.color=colorClick;
        btn.innerText='Play Again?';
        for(i=0;i<cuadros.length;i++){
            cuadros[i].style.background=pickedColor.textContent;
        };
        
    } else {
        let h1 = document.querySelector("h1").style.color="white";
        document.querySelector("#message").innerText="Intentalo Nuevamente";
        document.querySelector("#message").style.color="red";
        for(e=0;e<cuadros.length;e++){
            if(colorClick == cuadros[e].style.background){
                cuadros[e].style.background='rgb(35, 35, 35)';
            };
        };
    };
};

// changeColors(numero)-> Cambia el color en el tag en span, randomColor()-> genera los colores rgb random.
function changeColors(numero){
    let color = Math.floor(Math.random()*numero);
    pickedColor.innerText=colors[color];
};

function randomColor(){
    let rgb = "rgb("+Math.floor(Math.random()*256)+", " + Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
    return rgb;
};

// rdm() añade colores al array, luego generateRandomColors() escoge facil o dificil, finalmente reset(num) son eventos de nuevos colores y playgain?.
function rdm(){
    colors = [];
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    colors.push(randomColor());
    return colors;
};

function generateRandomColors(){
    rdm();
    var facil = document.querySelector("#easy").style.display="grid";
    var facil = document.querySelector("#easy");
    facil.addEventListener("click", function(){
        cuadradosColor(colors);
        changeColors(2.49);
        reset(2.49);
        cuadros[3].style.visibility = "hidden";
        cuadros[4].style.visibility = "hidden";
        cuadros[5].style.visibility = "hidden";
        document.querySelector("#message").innerText='';
        document.querySelector("h1").style.color='white';
    });

    var dificil = document.querySelector("#hardMode").style.display="grid";
    var dificil = document.querySelector("#hardMode");
    dificil.addEventListener("click", function(){
        cuadradosColor(colors);
        changeColors(5.49);
        reset(5.49);
        cuadros[3].style.visibility = "visible";
        cuadros[4].style.visibility = "visible";
        cuadros[5].style.visibility = "visible";
        document.querySelector("#message").innerText='';
        document.querySelector("h1").style.color='white';
    });
};
generateRandomColors();

function reset(num){
    btn.style.display="flex";
    btn.addEventListener('click', function(){
        btn.innerText='Nuevos Colores';
        let message = document.querySelector("#message").innerText='';
        let h1= document.querySelector('h1').style.color='white';
        var x = rdm();
        cuadradosColor(x);
        changeColors(num);
    });
};