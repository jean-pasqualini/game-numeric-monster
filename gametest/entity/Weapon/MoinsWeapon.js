var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MoinsWeapon = (function (_super) {
    __extends(MoinsWeapon, _super);
    function MoinsWeapon() {
        _super.apply(this, arguments);
    }
    MoinsWeapon.prototype.getTexture = function () {
        return "weapon-moins";
    };
    return MoinsWeapon;
})(Weapon);
//# sourceMappingURL=MoinsWeapon.js.map