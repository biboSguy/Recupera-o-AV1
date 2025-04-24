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
    }
}
class Mago extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
    }
}
class Arquiteto extends Personagem{
    constructor(vida, força, mana){
        super(vida, força, mana)
    }
}