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
}
class Mago extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
        this.magia = magia
        this.desvia = desvia
    }
}
class Arquiteto extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
        this.projeta = projeta
        this.construir = construir
    }
}