var Numeric = (function () {
    function Numeric() {
    }
    Numeric.prototype.construct = function (life) {
        this.life = life;
        this.attackPower = life;
        this.resistance = 0;
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
        return this;
    };
    Numeric.prototype.isDead = function () {
        return this.life == 0;
    };
    return Numeric;
})();
//# sourceMappingURL=Number.js.map