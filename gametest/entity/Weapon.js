var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(game, power) {
        _super.call(this, game, 0, 0, this.getTexture());
        this.power = power;
    }
    Weapon.prototype.attack = function (enemy) {
    };
    Weapon.prototype.getTexture = function () {
        return "";
    };
    return Weapon;
})(Phaser.Sprite);
//# sourceMappingURL=Weapon.js.map