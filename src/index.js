let heroi = "Hulk"
let xp = 5000
let saida = "sair"

while (saida != "sair"){
    if (xp < 1000){
        console.log("O Herói de nome" + heroi + "está no nível Ferro" + xp)
    }elseif (xp === 1001) && (xp <= 2000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Bronze" + xp)
    }elseif (xp === 2001) && (xp <= 5000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Prata" + xp)
    }elseif (xp === 6001) && (xp <= 7000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Ouro" + xp)
    }elseif (xp === 7001) && (xp <= 8000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Platina" + xp)
    }elseif (xp === 8001) && (xp <= 9000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Ascendente" + xp)
    }elseif (xp === 9001) && (xp <= 10000)
    {
        console.log("O Herói de nome" + heroi + "está no nível Imortal" + xp)
    }elseif (xp >= 10001)
    {
        console.log("O Herói de nome" + heroi + "está no nível Radiante" + xp)
    }
}