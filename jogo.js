class Personagem{
    constructor(vida, força, mana){
        this.vida = vida
        this.força = força
        this.mana = mana
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
        this.mana = -10
        console.log("guerreiro defendeu")
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
        this.mana = -15
        console.log("mago fez uma magia")
    }
    desvia(){
        this.desvia = true
        this.mana = -5
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
        this.mana = -10
        console.log("arquiteto atacou")
    }
    defende(){
        this.defende = true
        this.mana = -15
        console.log("arquiteto defendeu")
    }
}