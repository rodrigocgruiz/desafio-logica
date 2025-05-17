let heroi; 
let xp; 

do {
    heroi = readline("Digite o nome do Heroi ou 'sair' para encerrar")

    if (heroi === "sair") break;

    xp = Number(readline("Digite valor do nível do Heroi"))
    
    if (xp < 1000) {
        console.log("O Herói de nome" + heroi + "está no nível Ferro" + xp)
    }
    else if (xp >= 1001 && xp <= 2000) {
        console.log("O Herói de nome" + heroi + "está no nível Bronze" + xp)
    }
    else if (xp >= 2001 && xp <= 5000) {
        console.log("O Herói de nome" + heroi + "está no nível Prata" + xp)
    }
    else if (xp >= 6001 && xp <= 7000) {
        console.log("O Herói de nome" + heroi + "está no nível Ouro" + xp)
    }
    else if (xp >= 7001 && xp <= 8000) {
        console.log("O Herói de nome" + heroi + "está no nível Platina" + xp)
    }
    else if (xp >= 8001 && xp <= 9000) {
        console.log("O Herói de nome" + heroi + "está no nível Ascendente" + xp)
    }
    else if (xp >= 9001 && xp <= 10000) {
        console.log("O Herói de nome" + heroi + "está no nível Imortal" + xp)
    }
    else if (xp >= 10001) {
        console.log("O Herói de nome" + heroi + "está no nível Radiante" + xp)
    }
}while (heroi != "sair")