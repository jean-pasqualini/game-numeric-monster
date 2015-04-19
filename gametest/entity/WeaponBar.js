var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WeaponBar = (function (_super) {
    __extends(WeaponBar, _super);
    function WeaponBar(game) {
        _super.call(this, game, 50, 50, game.width - 100, 50, "weapon-bar");
    }
    WeaponBar.prototype.addWeapon = function (weapon) {
        var countWeaopon = this.children.length;
        var itemHeight = 50;
        var itemWidth = 50;
        weapon.x = this.x + 50 * countWeaopon;
        weapon.y = 10;
        this.addChild(weapon);
    };
    return WeaponBar;
})(Phaser.TileSprite);
//# sourceMappingURL=WeaponBar.js.map