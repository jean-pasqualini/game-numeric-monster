var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PlusWeapon = (function (_super) {
    __extends(PlusWeapon, _super);
    function PlusWeapon() {
        _super.apply(this, arguments);
    }
    PlusWeapon.prototype.getTexture = function () {
        return "weapon-plus";
    };
    return PlusWeapon;
})(Weapon);
//# sourceMappingURL=PlusWeapon.js.map