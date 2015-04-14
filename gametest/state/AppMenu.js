/// <reference path="../dts/phaser.d.ts"/>
var AppMenu = (function () {
    function AppMenu() {
    }
    AppMenu.prototype.preload = function () {
        this.game.load.image("btn", "assets/sprite/btn.png");
    };
    AppMenu.prototype.create = function () {
        //this.game.add.button(0, 0, "btn");
        this.button = new LabelButton(this.game, 50, 50, "btn", "okok", this.onStart, this);
    };
    AppMenu.prototype.onStart = function () {
        this.button.setLabel("noknok");
    };
    AppMenu.prototype.update = function () {
    };
    return AppMenu;
})();
//# sourceMappingURL=AppMenu.js.map