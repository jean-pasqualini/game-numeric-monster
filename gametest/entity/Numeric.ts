class Numeric {

    life: number;
    resistance: number;
    attackPower: number;
    immortel: boolean;

    constructor(life: number) {
        this.life = life;
        this.immortel = false;
        this.attackPower = life;
        this.resistance = 0;
    }

    isImmortel() {
        return this.immortel;
    }

    setImmortel(immortel: boolean) {
        this.immortel = immortel;
    }

    getAttackPower() {
        return this.attackPower;
    }

    getResistance() {
        return this.resistance;
    }

    getLife() {
        return this.life;
    }

    attack(attacker: Numeric) {
        this.life -= (attacker.getAttackPower() - this.getResistance());

        if (this.life < 0) this.life = 0;
        if (this.life > 9) this.life = 9;

        return this;
    }

    isDead() {
        return this.life == 0;
    }
}