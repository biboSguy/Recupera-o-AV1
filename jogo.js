class Personagem{
    #vida
    #força
    #mana
    constructor(vida, força, mana){
        this.#vida = vida
        this.#força = força
        this.#mana = mana
    }
}
class Guerreiro extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
        this.ataca = ataca
        this.defende = defende
    }
    ataca(){
        if( //verifica a colisão do guerreiro com o mago
            Mago.x < this.x + this.y &&
            Mago.y + Mago.x > this.x &&
            this.y < Mago.y + Mago.z &&
            this.y + this.z > Mago.y 
        ){
            Mago.vida = 0
            ctx.fillStyle = 'black'
            ctx.font = '50px Arial'
            ctx.fillText('GAME OVER', 50, 100)
        }
        this.ataca = true 
        this.mana = -5
        console.log("guerreiro atacou")
    }
    defende(){
        this.defende = true
        get = mana(),{
            set: 5
        }
        console.log("guerreiro nao defendeu"),
        get = vida(),{
            set: 10
        }
    }
}
class Mago extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
        this.magia = magia
        this.desvia = desvia
    }
    magia(){
        if( //verifica a colisão do mago com o arquiteto
            Arquiteto.x < this.x + this.y &&
            Arquiteto.y + Arquiteto.x > this.x &&
            this.y < Arquiteto.y + Arquiteto.z &&
            this.y + this.z > Arquiteto.y 
        ){
            Arquiteto.vida = 0
            ctx.fillStyle = 'black'
            ctx.font = '50px Arial'
            ctx.fillText('GAME OVER', 50, 100)
        }
        this.magia = true
        get = mana(),{
            set: 10
        }
        console.log("mago fez uma magia")
    }
    desvia(){
        this.desvia = true
        get = vida(),{
            set: 0
        }
        console.log("mago desviou")
    }
}
class Arquiteto extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
        this.ataca = ataca
        this.defende = defende
    }
    ataca(){
        if( //verifica a colisão do arquiteto com o guerreiro
            Guerreiro.x < this.x + this.y &&
            Guerreiro.y + Guerreiro.x > this.x &&
            this.y < Guerreiro.y + Guerreiro.z &&
            this.y + this.z > Guerreiro.y 
        ){
            Guerreiro.vida = 0
            ctx.fillStyle = 'black'
            ctx.font = '50px Arial'
            ctx.fillText('GAME OVER', 50, 100)
        }
        this.ataca = true
        get = força(),{
            set: 15
        }
        console.log("arquiteto atacou")
    }
    defende(){
        this.defende = true
        get = mana(),{
            set: 15
        }
        console.log("arquiteto defendeu")
    }
}