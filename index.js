let NivelHeroi = 9000
let Nome = "kron"
for (let i = 0; i <= 11; i++){
    NivelHeroi +=1
    console.log("ganhou xp " + i )
}
console.log(NivelHeroi + " totais")
if (NivelHeroi <1000){
    console.log("O Herói de nome " + Nome + " está no nível ferro");
} else if(NivelHeroi <2000){ 
    console.log("O Herói de nome " + Nome + " está no nível bronze");
} else if (NivelHeroi < 5000 ) {
    console.log("O Herói de nome " + Nome + " está no nível prata");
} else if(NivelHeroi<7000){
    console.log("O Herói de nome " + Nome + " está no nível ouro");
} else if (NivelHeroi<8000){
    console.log("O Herói de nome " + Nome + " está no nível platina");
}else if (NivelHeroi<9000){
    console.log("O Herói de nome " + Nome + " está no nível ascendente");
}else if (NivelHeroi<1000){
    console.log("O Herói de nome " + Nome + " está no nível imortal");
}else{
    console.log("O Herói de nome " + Nome + " está no nível radiante");
}