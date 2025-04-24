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
        this1.magia = true
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