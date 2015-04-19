var Numeric = (function () {
    function Numeric(life) {
        this.life = life;
        this.immortel = false;
        this.attackPower = life;
        this.resistance = 0;
    }
    Numeric.prototype.isImmortel = function () {
        return this.immortel;
    };
    Numeric.prototype.setImmortel = function (immortel) {
        this.immortel = immortel;
    };
    Numeric.prototype.getAttackPower = function () {
        return this.attackPower;
    };
    Numeric.prototype.getResistance = function () {
        return this.resistance;
    };
    Numeric.prototype.getLife = function () {
        return this.life;
    };
    Numeric.prototype.attack = function (attacker) {
        this.life -= (attacker.getAttackPower() - this.getResistance());
        if (this.life < 0)
            this.life = 0;
        if (this.life > 9)
            this.life = 9;
        return this;
    };
    Numeric.prototype.isDead = function () {
        return this.life == 0;
    };
    return Numeric;
})();
//# sourceMappingURL=Numeric.js.map